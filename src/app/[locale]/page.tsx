import initTranslations from "@/i18n";
import TranslationsProvider from "../TranslationsProvider";
import Landing from "@/[locale]/components/landing";
import Header from "./components/header";

interface HomeProps {
  params: {
    locale: string;
  };
}

const Home = async ({ params: { locale } }: HomeProps) => {
  const { t, resources } = await initTranslations(locale, ["landing"]);

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
      namespaces={["landing"]}>
      <main>
        <Header t={headerTranslations} />
        <Landing title={t("title")} subtitle={t("subtitle")} />
      </main>
    </TranslationsProvider>
  );
};

export default Home;
