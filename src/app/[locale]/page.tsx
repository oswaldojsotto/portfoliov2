import Header from "@/app/[locale]/components/header";
import initTranslations from "../i18n";
import TranslationsProvider from "../TranslationsProvider";
import Landing from "./components/Landing";

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
        <Landing />
      </main>
    </TranslationsProvider>
  );
};

export default Home;
