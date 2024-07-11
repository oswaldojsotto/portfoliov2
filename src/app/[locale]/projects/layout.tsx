import Header from "@/[locale]/components/header";
import initTranslations from "@/i18n";
import TranslationsProvider from "@/TranslationsProvider";
import Footer from "@/[locale]/components/footer";

const ProjectsLayout = async ({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) => {
  const { resources } = await initTranslations(locale, ["projects", "header"]);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["projects", "header"]}>
      <main>
        <Header />
        {children}
        <div className="w-full h-[5vh] bg-dark dark:bg-light ">
          <div className=" flex w-full bg-light dark:bg-dark  h-[5vh] rounded-b-[48px] z-100 " />
        </div>
        <Footer />
      </main>
    </TranslationsProvider>
  );
};

export default ProjectsLayout;
