import Header from "@/[locale]/components/header";
import initTranslations from "@/i18n";
import TranslationsProvider from "@/TranslationsProvider";
// import Footer from "../components/footer";
import Footer1 from "@/[locale]/components/footer1";

const ProjectsLayout = async ({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) => {
  const { t, resources } = await initTranslations(locale, ["projects"]);

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
      namespaces={["projects"]}>
      <main>
        <Header t={headerTranslations} />
        {children}
        <div className="w-full h-[5vh] bg-dark dark:bg-light ">
          <div className=" flex w-full bg-light dark:bg-dark  h-[5vh] rounded-b-[48px] z-100 " />
        </div>
        <Footer1 />
        {/* <Footer /> */}
      </main>
    </TranslationsProvider>
  );
};

export default ProjectsLayout;
