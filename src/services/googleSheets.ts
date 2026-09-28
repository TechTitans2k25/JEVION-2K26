// Google Sheets Integration Service
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
  teamName?: string;
  teamSize?: number;
  teamMembers?: string;
  transactionId?: string;
  amountPaid?: number;
  paymentStatus: string;
  timestamp: string;
}

export async function submitRegistration(data: RegistrationData): Promise<{ success: boolean; message: string }> {
  // Always save to localStorage as backup
  try {
    const registrations = JSON.parse(localStorage.getItem('jevion-registrations') || '[]');
    registrations.push(data);
    localStorage.setItem('jevion-registrations', JSON.stringify(registrations));
  } catch (e) {
    console.error('LocalStorage write error:', e);
  }

  if (!GOOGLE_SCRIPT_URL) {
    console.warn('Google Script URL not configured. Saved locally.');
    return { success: true, message: 'Registration recorded successfully!' };
  }

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'register',
        data: {
          ...data,
          selectedEvents: Array.isArray(data.selectedEvents) ? data.selectedEvents.join(', ') : data.selectedEvents,
          timestamp: new Date().toISOString(),
        },
      }),
    });

    return { success: true, message: 'Registration submitted to Google Sheets successfully!' };
  } catch (error) {
    console.error('Failed to submit to Google Sheets:', error);
    return { success: true, message: 'Registration saved locally (network issue)' };
  }
}

export function getLocalRegistrations(): RegistrationData[] {
  return JSON.parse(localStorage.getItem('jevion-registrations') || '[]');
}
