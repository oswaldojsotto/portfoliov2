import React from "react";
import { useRouter } from "next/navigation";
import NavbarLink from "./navbar-link";
import { useTranslation } from "react-i18next";

const InnerContact = () => {
  const router = useRouter();
  const { t } = useTranslation("landing");

  const goToProject = (page: string) => {
    router.push(page);
  };

  return (
    <div className="flex flex-col w-full justify-between h-[18rem] xs:h-[20rem] md:flex-row font-dimensions mb-32 xs:mb-16 ">
      <div
        className="w-full h-[12rem] flex text-[45px] sm:text-[55px] md:text-[75px] text-dark dark:text-light md:flex-col
       md:pb-[8rem] ">
        <p
          className="text-dark dark:text-light pr-2 md:-my-4 md:flex-col md:mt-[0.5rem] 
        font-dimensions text-[42px] md:text-[62px] lg:text-[76px]">
          {t("ctitle")}
        </p>
      </div>
      <div className="w-full h-[32rem] md:h-[14rem] font-agdasima text-dark dark:text-light">
        <p className=" text-[25px]  sm:text-[30px] font-semibold font-dimensions">
          {t("csubtitle")}
        </p>
        <p className=" text-[18px] font-agdasima sm:text-[20px]">
          {t("cmessage")}
        </p>
        <div className="-ml-1" onClick={() => goToProject("/contact")}>
          <NavbarLink text="CONTACT" />
        </div>
      </div>
    </div>
  );
};

export default InnerContact;
