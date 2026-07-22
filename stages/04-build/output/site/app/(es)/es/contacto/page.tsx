import type { Metadata } from 'next';
import { ContactPage } from '@/components/contact-page/ContactPage';
import { es } from '@/content/copy';

export const metadata: Metadata = {
  title: es.meta.contact.title,
  description: es.meta.contact.description,
  alternates: {
    canonical: '/es/contacto',
    languages: { en: '/contact', es: '/es/contacto', 'x-default': '/contact' },
  },
};

export default function RutaContacto() {
  return <ContactPage lang="es" />;
}
