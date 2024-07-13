import React from "react";
import NavbarLink from "./navbar-link";
import FooButton from "./foo-button";

const CvModal = ({ text }: { text: string }) => {
  return (
    <>
      <button
        onClick={() => {
          const modal = document.getElementById("my_modal_2");
          if (modal !== null) {
            (modal as any).showModal(false);
          }
        }}>
        <NavbarLink text={text} />
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-dark dark:bg-light">
          <div className="-ml-1 my-2 flex w-full justify-center ">
            <a href="/cv/oswaldo_sotto_cv_en.pdf" target="_blank">
              <FooButton text="ENGLISH" />
            </a>
            <a href="/cv/oswaldo_sotto_cv_es.pdf" target="_blank">
              <FooButton text="SPANISH" />
            </a>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    </>
  );
};

export default CvModal;
