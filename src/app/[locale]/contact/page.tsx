import initTranslations from "@/app/i18n";
import ContactLanding from "./contact-landing";
import Header from "../components/header";
import TranslationsProvider from "@/app/TranslationsProvider";

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
