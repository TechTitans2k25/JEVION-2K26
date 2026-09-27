// JEVION 2K26 - Google Sheets Registration Backend
// Deploy this as a Web App in Google Apps Script
//
// SETUP INSTRUCTIONS:
// 1. Go to https://script.google.com
// 2. Create a new project
// 3. Paste this code
// 4. Run the 'setupSheets' function once to create all sheets
// 5. Deploy > New Deployment > Web App
//    - Execute as: Me
//    - Who has access: Anyone
// 6. Copy the deployment URL
// 7. Set it as VITE_GOOGLE_SCRIPT_URL in your .env file

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    if (data.action === 'register') {
      return handleRegistration(data.data);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ success: false, message: 'Unknown action' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: 'JEVION 2K26 Registration API is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function handleRegistration(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  var row = [
    data.registrationId || '',
    data.name || '',
    data.college || '',
    data.department || '',
    data.year || '',
    data.email || '',
    data.phone || '',
    data.selectedEvents || '',
    data.paymentStatus || 'PENDING',
    data.timestamp || new Date().toISOString()
  ];
  
  // 1. Write to OVERALL sheet
  var overallSheet = ss.getSheetByName('Overall');
  if (overallSheet) {
    overallSheet.appendRow(row);
  }
  
  // 2. Determine which events are selected
  var events = (data.selectedEvents || '').split(',').map(function(e) { return e.trim(); });
  
  // Day 1 events
  var day1Events = ['Tech Talk', 'EraseX', 'Titan 11', 'Insta Lens', 'Think & Link'];
  // Day 2 events
  var day2Events = ['Code Hack', 'Hunt IQ', 'Aurora Films', 'Nayakan', 'Secret Hunt'];
  
  var isDay1 = false;
  var isDay2 = false;
  
  // 3. Write to individual event sheets
  events.forEach(function(eventName) {
    var sheet = ss.getSheetByName(eventName);
    if (sheet) {
      sheet.appendRow(row);
    }
    
    if (day1Events.indexOf(eventName) !== -1) isDay1 = true;
    if (day2Events.indexOf(eventName) !== -1) isDay2 = true;
  });
  
  // 4. Write to Day 1 sheet if any Day 1 events selected
  if (isDay1) {
    var day1Sheet = ss.getSheetByName('Day 1');
    if (day1Sheet) {
      // Add which day1 events this person registered for
      var day1Row = row.slice();
      day1Row[7] = events.filter(function(e) { return day1Events.indexOf(e) !== -1; }).join(', ');
      day1Sheet.appendRow(day1Row);
    }
  }
  
  // 5. Write to Day 2 sheet if any Day 2 events selected
  if (isDay2) {
    var day2Sheet = ss.getSheetByName('Day 2');
    if (day2Sheet) {
      var day2Row = row.slice();
      day2Row[7] = events.filter(function(e) { return day2Events.indexOf(e) !== -1; }).join(', ');
      day2Sheet.appendRow(day2Row);
    }
  }
  
  return ContentService.createTextOutput(JSON.stringify({ success: true, message: 'Registration saved!' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Run this function ONCE to create all the required sheets with headers
function setupSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  var headers = [
    'Registration ID',
    'Name',
    'College',
    'Department',
    'Year',
    'Email',
    'Phone',
    'Selected Events',
    'Payment Status',
    'Timestamp'
  ];
  
  var sheetNames = [
    'Overall',
    'Day 1',
    'Day 2',
    'Tech Talk',
    'EraseX',
    'Titan 11',
    'Insta Lens',
    'Think & Link',
    'Code Hack',
    'Hunt IQ',
    'Aurora Films',
    'Nayakan',
    'Secret Hunt'
  ];
  
  sheetNames.forEach(function(name) {
    var sheet = ss.getSheetByName(name);
    if (!sheet) {
      sheet = ss.insertSheet(name);
    }
    
    // Set headers if first row is empty
    var firstCell = sheet.getRange('A1').getValue();
    if (!firstCell) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format headers
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#FF6A00');
      headerRange.setFontColor('#FFFFFF');
      
      // Set column widths
      sheet.setColumnWidth(1, 150); // Reg ID
      sheet.setColumnWidth(2, 200); // Name
      sheet.setColumnWidth(3, 250); // College
      sheet.setColumnWidth(4, 200); // Department
      sheet.setColumnWidth(5, 80);  // Year
      sheet.setColumnWidth(6, 250); // Email
      sheet.setColumnWidth(7, 150); // Phone
      sheet.setColumnWidth(8, 300); // Events
      sheet.setColumnWidth(9, 120); // Payment
      sheet.setColumnWidth(10, 200); // Timestamp
      
      // Freeze header row
      sheet.setFrozenRows(1);
    }
  });
  
  // Delete default 'Sheet1' if it exists and is empty
  var sheet1 = ss.getSheetByName('Sheet1');
  if (sheet1 && sheet1.getLastRow() <= 1) {
    try { ss.deleteSheet(sheet1); } catch(e) {}
  }
  
  SpreadsheetApp.flush();
  Logger.log('All sheets created successfully!');
}
