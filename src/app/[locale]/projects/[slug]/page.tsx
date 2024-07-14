"use client";
import React, { useEffect, useState } from "react";
import PreloadWrapper from "@/[locale]/components/preloading/wrapper";
import RevealAnimation from "@/hooks/revealAnimation";
import NavbarLink from "@/[locale]/components/navbar-link";
import Gallery from "@/[locale]/components/gallery/gallery";
import {
  movieTrailersData,
  sevenSuiteData,
  blockchainAppData,
  nextAuthData,
  shopData,
} from "@/[locale]/components/gallery/image-data";
import { useTranslation } from "react-i18next";

const ProjectDetail = ({ params }: { params: { slug: string } }) => {
  const { t } = useTranslation("projects");

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const projectName = params.slug.toString().toLocaleUpperCase();

  function data() {
    switch (projectName) {
      case "BLOCKCHAIN-APP":
        return blockchainAppData;
      case "SEVEN-SUITE":
        return sevenSuiteData;
      case "NEXT-AUTHORIZE":
        return nextAuthData;
      case "MOVIE-TRAILERS":
        return movieTrailersData;
      case "SHOP-APP":
        return shopData;
      default:
        return null;
    }
  }

  return (
    <PreloadWrapper words={[projectName]}>
      <div className="relative py-24  px-8 xl:px-[15%]">
        <RevealAnimation delayWait={1.6}>
          <div className="w-full flex justify-start flex-col px-4">
            <p
              className="font-dimensions w-full flex text-dark dark:text-light justify-center  whitespace-nowrap
                text-[40px] xs:text-[50px] sm:text-[70px] md:text-[90px] lg:text-[100px]  xl:text-[140px]">
              {projectName}
            </p>
          </div>
        </RevealAnimation>
        <RevealAnimation delayWait={1.7}>
          <div className="flex flex-col sm:flex-row w-full justify-start text-[22px] sm:text-[30px] mt-12 gap-8 px-2">
            <div className=" text-dark dark:text-light">
              <p className="opacity-[0.8] font-dimensions">{t("role")}</p>
              <p className="font-semibold font-agdasima text-[20px] md:text-[26px]">
                {data()?.role === 1 ? t("dev") : t("desdev") || ""}
              </p>
            </div>
            <div className="text-dark dark:text-light">
              <p className="opacity-[0.8] font-dimensions">{t("location")}</p>
              <p className="font-semibold font-agdasima text-[20px] md:text-[26px]">
                {data()?.location || ""}
              </p>
            </div>
          </div>
        </RevealAnimation>
        <RevealAnimation delayWait={1.8}>
          <div className="w-[20rem] my-4 flex px-2">
            <a href={data()?.url || "/"} target="_blank">
              <NavbarLink text={t("visit")} />
            </a>
          </div>
          <div
            className="font-dimensions w-full flex text-dark dark:text-light justify-center  whitespace-nowrap
          text-[40px] xs:text-[50px] sm:text-[70px] md:text-[90px] lg:text-[100px]  xl:text-[140px]">
            GALLERY
          </div>
        </RevealAnimation>
        <div
          className="flex w-full h-[50vh] xs:h-[60vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh]  
        justify-center mt-8">
          <Gallery images={data()} />
        </div>
      </div>
    </PreloadWrapper>
  );
};

export default ProjectDetail;
