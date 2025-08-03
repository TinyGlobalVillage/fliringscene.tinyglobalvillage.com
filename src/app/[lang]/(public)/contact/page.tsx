// src/app/[lang]/(public)/contact/page.tsx
import AboveFoldContactPage from "./AboveFoldContactPage";
import { getDictionary } from "@/data/i18n/getDictionary";

interface ContactPageProps {
  params: Promise<{ lang: string }>;
}

export default async function ContactPage({ params }: ContactPageProps
) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <AboveFoldContactPage dict={dict.contact.contentAboveFold.form} />;
}
