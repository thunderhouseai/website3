// Env-dependent values, documented in output/build-notes.md. Nothing baked in.

export function getBookingUrl(): string | null {
  return process.env.BOOKING_URL || null;
}

export function getWhatsAppUrl(): string | null {
  return process.env.WHATSAPP_URL || null;
}

export function getSiteUrl(): string {
  return process.env.SITE_URL || 'https://thunderhouseai.com';
}
