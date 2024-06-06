import React from "react";
import Header from "@/[locale]/components/header";
import StarsBackground from "../components/stars-background";
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import ProjectsLanding from "./projects-landing";
import { GetStaticPaths, GetStaticProps } from "next";

const Projects = async ({ params: { locale } }: HomeProps) => {
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
        <div key={1} className="fixed -z-10 bg-transparent h-[100vh] w-full">
          <StarsBackground />
        </div>
        <Header t={headerTranslations} />
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
