import type { Metadata } from 'next';
import { ContactPage } from '@/components/contact-page/ContactPage';
import { en } from '@/content/copy';

export const metadata: Metadata = {
  title: en.meta.contact.title,
  description: en.meta.contact.description,
  alternates: {
    canonical: '/contact',
    languages: { en: '/contact', es: '/es/contacto', 'x-default': '/contact' },
  },
};

export default function ContactRoute() {
  return <ContactPage lang="en" />;
}
