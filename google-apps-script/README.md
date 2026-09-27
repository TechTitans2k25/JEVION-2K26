# JEVION 2K26 - Google Sheets Backend Setup

## Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it: **JEVION 2K26 - Registrations**

## Step 2: Set up Google Apps Script
1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code in the editor
3. Copy and paste the entire contents of `Code.gs` from this folder
4. Click **Save** (Ctrl+S)
5. Run the `setupSheets` function:
   - Select `setupSheets` from the function dropdown
   - Click the **Run** button (▶)
   - Grant permissions when prompted
   - This creates all 13 sheets with headers

## Step 3: Deploy as Web App
1. Click **Deploy > New Deployment**
2. Click the gear icon ⚙ and select **Web app**
3. Set:
   - **Description**: JEVION 2K26 Registration API
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Copy the Web App URL** (it looks like: `https://script.google.com/macros/s/XXXX/exec`)

## Step 4: Configure the Website
1. Create a `.env` file in the project root (copy from `.env.example`)
2. Set `VITE_GOOGLE_SCRIPT_URL` to your Web App URL
3. Restart the dev server

## Sheet Structure
The script creates these sheets:

| Sheet Name | Purpose |
|---|---|
| **Overall** | All registrations |
| **Day 1** | Registrations for Day 1 events only |
| **Day 2** | Registrations for Day 2 events only |
| **Tech Talk** | Paper Presentation registrations |
| **EraseX** | Debugging Challenge registrations |
| **Titan 11** | IPL Auction registrations |
| **Insta Lens** | Photography Contest registrations |
| **Think & Link** | Connection Game registrations |
| **Code Hack** | Mini Hackathon registrations |
| **Hunt IQ** | Technical Quiz registrations |
| **Aurora Films** | Short Film Contest registrations |
| **Nayakan** | Guess the Movie registrations |
| **Secret Hunt** | Treasure Hunt registrations |

Each sheet has these columns:
- Registration ID, Name, College, Department, Year, Email, Phone, Selected Events, Payment Status, Timestamp
