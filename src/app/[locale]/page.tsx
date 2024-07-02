import initTranslations from "@/i18n";
import TranslationsProvider from "../TranslationsProvider";
import Header from "./components/header";
import LandingSection from "./components/landing-section";
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
        <div key={1} className="absolute bg-transparent h-[100vh] w-full"></div>
        <div>
          <Header t={headerTranslations} />
          <LandingSection title={t("title")} subtitle={t("subtitle")} />
        </div>
      </main>
    </TranslationsProvider>
  );
};

export default Home;
