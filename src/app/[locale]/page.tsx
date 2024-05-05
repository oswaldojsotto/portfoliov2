import Header from "@/app/[locale]/components/header";
import initTranslations from "../i18n";
import TranslationsProvider from "../TranslationsProvider";
import Landing from "./components/landing";
import ProjectsSection from "./components/projects-section";

interface HomeProps {
  params: {
    locale: string;
  };
}

const Home = async ({ params: { locale } }: HomeProps) => {
  const { t, resources } = await initTranslations(locale, ["common"]);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["common"]}>
      <main className="">
        <Header />
        {/* <h1>{t("common:title")}</h1> */}
        <Landing t={t} />
        <ProjectsSection t={t} />
      </main>
    </TranslationsProvider>
  );
};

export default Home;
