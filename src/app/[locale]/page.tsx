import initTranslations from "@/app/i18n";
import TranslationsProvider from "../TranslationsProvider";
import Landing from "@/app/[locale]/components/landing";
import Header from "./components/header";

interface HomeProps {
  params: {
    locale: string;
  };
}

const Home = async ({ params: { locale } }: HomeProps) => {
  const { t, resources } = await initTranslations(locale, ["landing"]);

  console.log(t);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["landing"]}>
      <main>
        <Header />
        <Landing title={t("title")} subtitle={t("subtitle")} />
      </main>
    </TranslationsProvider>
  );
};

export default Home;
