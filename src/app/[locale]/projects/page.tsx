import React from "react";
import PreloadWrapper from "@/app/[locale]/components/preloading/wrapper";
import Header from "@/app/[locale]/components/header";
import ProjectsList from "./projects-list";
import StarsBackground from "../components/stars-background";
import TranslationsProvider from "@/app/TranslationsProvider";
import initTranslations from "@/app/i18n";
import ProjectsLanding from "./projects-landing";

interface HomeProps {
  params: {
    locale: string;
  };
}

const Projects = async ({ params: { locale } }: HomeProps) => {
  const { t, resources } = await initTranslations(locale, ["projects"]);
  const words = [];

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["projects"]}>
      <main>
        <div key={1} className="fixed -z-10 bg-transparent h-[100vh] w-full">
          <StarsBackground />
        </div>
        <Header />
        <ProjectsLanding
          transition={t("transition")}
          title={t("title")}
          subtitle={t("subtitle")}
        />
      </main>
    </TranslationsProvider>
  );
};

export default Projects;
