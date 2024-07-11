import Header from "@/[locale]/components/header";
import initTranslations from "@/i18n";
import TranslationsProvider from "@/TranslationsProvider";
import Footer from "@/[locale]/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Oswaldo Sotto ©",
  description: "Contact Portfolio - Oswaldo Sotto ©",
};

const ContactLayout = async ({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) => {
  const { t, resources } = await initTranslations(locale, [
    "contact",
    "header",
  ]);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["contact", "header"]}>
      <main>
        <Header />
        {children}
        <div className="w-full h-[5vh] bg-dark dark:bg-light ">
          <div className=" flex w-full bg-light dark:bg-dark  h-[5vh] rounded-b-[48px] z-100 " />
        </div>
        <Footer />
      </main>
    </TranslationsProvider>
  );
};

export default ContactLayout;
