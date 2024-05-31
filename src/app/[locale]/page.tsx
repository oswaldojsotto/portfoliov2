import initTranslations from "@/app/i18n";
import TranslationsProvider from "../TranslationsProvider";
import Landing from "@/app/[locale]/components/landing";
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
        <Landing title={t("title")} subtitle={t("subtitle")} />
      </main>
    </TranslationsProvider>
  );
};

export default Home;
