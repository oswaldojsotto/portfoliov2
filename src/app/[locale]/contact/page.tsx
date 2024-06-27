import initTranslations from "@/i18n";
import ContactLanding from "./contact-landing";
import Header from "@/[locale]/components/header";
import TranslationsProvider from "@/TranslationsProvider";

interface HomeProps {
  params: {
    locale: string;
  };
}

const Contact = async ({ params: { locale } }: HomeProps) => {
  const { t, resources } = await initTranslations(locale, ["contact"]);

  const headerTranslations = {
    about: t("about"),
    projects: t("projects"),
    contact: t("contact"),
    language: t("language"),
    english: t("english"),
    spanish: t("spanish"),
    italian: t("italian"),
  };

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["contact"]}>
      <main>
        <Header t={headerTranslations} />
        <ContactLanding
          transition={t("transition")}
          title={t("title")}
          subtitle={t("subtitle")}
        />
      </main>
    </TranslationsProvider>
  );
};

export default Contact;
