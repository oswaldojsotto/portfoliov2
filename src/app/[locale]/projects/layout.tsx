import Header from "@/[locale]/components/header";
import initTranslations from "@/i18n";
import TranslationsProvider from "@/TranslationsProvider";

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
      </main>
    </TranslationsProvider>
  );
};

export default ProjectsLayout;
