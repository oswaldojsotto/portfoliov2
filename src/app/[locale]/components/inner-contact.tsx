import React from "react";
import { useRouter } from "next/navigation";
import NavbarLink from "./navbar-link";

const InnerContact = () => {
  const router = useRouter();

  const goToProject = (page: string) => {
    router.push(page);
  };

  return (
    <div className="flex flex-col w-full justify-between h-[18rem] md:h-[14rem] md:flex-row font-dimensions my-8 ">
      <div className="w-full h-[12rem] flex text-[90px] text-dark dark:text-light md:flex-col md:pb-[8rem] tracking-[4px]">
        <p className="text-dark dark:text-light pr-2 md:-my-4">
          {`${`LETS GET IN`}`}
        </p>

        <p className=" md:-mt-8 text-dark dark:text-light">TOUCH</p>
      </div>
      <div className="w-full h-[32rem] md:h-[14rem]  font-agdasima text-dark dark:text-light">
        <p className=" text-[30px] font-medium">GET IN TOUCH</p>
        <p className=" text-[20px]">
          Are you a brand or company in need of contagiously creative stopping
          power? Or are you an agency in need of a kick-ass creative production
          partner? Just hit us up!
        </p>
        <div className="-ml-1" onClick={() => goToProject("/contact")}>
          <NavbarLink text="CONTACT" />
        </div>
      </div>
    </div>
  );
};

export default InnerContact;
