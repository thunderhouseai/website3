// Env-dependent values, documented in output/build-notes.md. Nothing baked
// in: all four routes render dynamically (see root layouts), so these are
// read per-request and changing them in Coolify needs no rebuild.

export function getCalendlyUrl(): string | null {
  return process.env.CALENDLY_URL || null;
}

export function getWhatsAppUrl(): string | null {
  return process.env.WHATSAPP_URL || null;
}

export function getSiteUrl(): string {
  return process.env.SITE_URL || 'https://thunderhouseai.com';
}
