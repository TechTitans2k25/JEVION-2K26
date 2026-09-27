// Google Sheets Integration Service
// The Google Apps Script URL will be configured here
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

export interface RegistrationData {
  registrationId: string;
  name: string;
  college: string;
  department: string;
  year: string;
  email: string;
  phone: string;
  selectedEvents: string[];
  paymentStatus: string;
  timestamp: string;
}

export async function submitRegistration(data: RegistrationData): Promise<{ success: boolean; message: string }> {
  if (!GOOGLE_SCRIPT_URL) {
    console.warn('Google Script URL not configured. Saving locally only.');
    // Save to localStorage as fallback
    const registrations = JSON.parse(localStorage.getItem('jevion-registrations') || '[]');
    registrations.push(data);
    localStorage.setItem('jevion-registrations', JSON.stringify(registrations));
    return { success: true, message: 'Registration saved locally (Google Sheets not configured)' };
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'register',
        data: {
          ...data,
          selectedEvents: data.selectedEvents.join(', '),
          timestamp: new Date().toISOString(),
        },
      }),
    });

    // no-cors mode always returns opaque response, so we assume success
    return { success: true, message: 'Registration submitted successfully!' };
  } catch (error) {
    console.error('Failed to submit to Google Sheets:', error);
    // Fallback to localStorage
    const registrations = JSON.parse(localStorage.getItem('jevion-registrations') || '[]');
    registrations.push(data);
    localStorage.setItem('jevion-registrations', JSON.stringify(registrations));
    return { success: true, message: 'Registration saved locally (network issue)' };
  }
}

export function getLocalRegistrations(): RegistrationData[] {
  return JSON.parse(localStorage.getItem('jevion-registrations') || '[]');
}
