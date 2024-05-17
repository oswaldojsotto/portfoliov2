// import Header from "@/app/[locale]/components/header";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "../TranslationsProvider";
import Landing from "./components/landing";
// import ProjectsSection from "./components/projects-section";
// import PreLoader from "./components/preloader";

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
        {/* <Header />
        <Landing t={t} />
      
        <ProjectsSection /> */}
        {/* <PreLoader /> */}
        <Landing title={t("title")} />
      </main>
    </TranslationsProvider>
  );
};

export default Home;
