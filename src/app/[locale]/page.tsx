import initTranslations from "@/i18n";
import TranslationsProvider from "@/TranslationsProvider";
import LandingSection from "@/[locale]/components/landing-section";
import { Menu } from "./components/menu";
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
      namespaces={["landing", "header", "projects"]}>
      <ClientHome />
    </TranslationsProvider>
  );
};

function ClientHome() {
  return (
    <main>
      <div key={1} />
      <Menu />
      <LandingSection />
    </main>
  );
}

export default Home;
