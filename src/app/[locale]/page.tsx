import initTranslations from "@/i18n";
import TranslationsProvider from "@/TranslationsProvider";
import Header from "@/[locale]/components/header";
import LandingSection from "@/[locale]/components/landing-section";
interface HomeProps {
  params: {
    locale: string;
  };
}

const Home = async ({ params: { locale } }: HomeProps) => {
  const { resources } = await initTranslations(locale, [
    "landing",
    "header",
    "projects",
  ]);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["landing", "header,", "projects"]}>
      <main>
        <div key={1} className="absolute bg-transparent h-[100vh] w-full"></div>
        <div>
          <Header />
          <LandingSection />
        </div>
      </main>
    </TranslationsProvider>
  );
};

export default Home;
