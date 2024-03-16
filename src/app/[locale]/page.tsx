import Header from "@/app/[locale]/components/header";
import initTranslations from "../i18n";
import TranslationsProvider from "../TranslationsProvider";

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
        {/* <p>{t("title")}</p> */}
        <Header />
      </main>
    </TranslationsProvider>
  );
};

export default Home;
