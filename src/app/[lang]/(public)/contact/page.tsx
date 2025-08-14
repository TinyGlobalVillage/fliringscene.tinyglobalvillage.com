// src/app/[lang]/(public)/contact/page.tsx
import AboveFoldContactPage from "./AboveFoldContactPage";
import { getDictionary } from "@/data/i18n/getDictionary";

import { buildPageMetadata } from '@/hook-utils/buildPageMetadata';

import { LangParams } from '@/data/i18n/types';

interface ContactPageProps {
  params: LangParams;
}

export async function generateMetadata(
  { params }: { params: LangParams }
) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return buildPageMetadata({ dictPage: dict.contact, lang, route: '/contact' });
}


export default async function ContactPage({ params }: ContactPageProps
) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <AboveFoldContactPage dict={dict.contact.contentAboveFold.form} />;
}
