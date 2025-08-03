// src/app/[lang]/(public)]contact/AboveFoldContactPage.tsx

'use client';
import ContactForm from '../../_allPageComponents/forms/ContactForm';
import { ContactSectionWrapper } from './ContactWrapper';
import type { Dictionary } from '@/data/i18n/types';
// import { getDictionary } from '@/data/i18n/getDictionary';


interface AboveFoldContactPageProps {
  dict: Dictionary['contact']['contentAboveFold']['form'];
}

export default function AboveFoldContactPage({ dict }: AboveFoldContactPageProps) {
//   const resolvedParams = await params;
//   const dict = await getDictionary(resolvedParams.lang);

  return (
    <ContactSectionWrapper>
      <ContactForm dict={dict} />
    </ContactSectionWrapper>
  );
}
