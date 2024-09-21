import React from "react";
import logo from "../../assets/images/ttom.png";
import { iconColor, navItems } from "../../core";
import menuIcon from "../../assets/icons/menu.svg";
import { Offcanvas, Ripple, Dropdown, initTWE } from "tw-elements";

const Navbar = () => {
  React.useEffect(() => {
    initTWE({ Offcanvas, Ripple, Dropdown });
  }, []);
  return (
    <>
      <nav className="flex items-center justify-between mobile:hidden mobile:mx-8 mx-80">
        <img src={logo} className="w-10 py-2" />
        {navItems.map((item: any, index: number) => (
          <ul key={index} className="">
            <a href={item.link}>
              <li className="list-none">{item.name}</li>
            </a>
          </ul>
        ))}
      </nav>

      {/* ************** Mobile Nav ***************/}
      <div className="flex justify-between from-nav-laptop-to-laptop-xl:hidden">
        <div>
          <img src={logo} className="w-10 mt-3 ml-4" />
        </div>
        <div className="flex items-center justify-between h-16">
          <a
            className="me-1.5 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out  focus:outline-none focus:ring-0 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            data-twe-offcanvas-toggle
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img
              src={menuIcon}
              style={{
                filter: iconColor,
              }}
              className="w-10"
            />
          </a>
        </div>

        <div
          className="invisible w-80 fixed bottom-0 left-0 top-0 z-[1045] flex max-w-full -translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out data-[twe-offcanvas-show]:transform-none dark:bg-body-dark dark:text-white"
          // tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
          data-twe-offcanvas-init
        >
          <div className="flex items-center justify-between p-4">
            <h5
              className="mb-0 font-semibold leading-normal"
              id="offcanvasExampleLabel"
            >
              Menu
            </h5>
            <button
              type="button"
              className="box-content border-none rounded-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
              data-twe-offcanvas-dismiss
              aria-label="Close"
            >
              <span className="[&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className="flex flex-col p-4 overflow-y-auto">
            {navItems.map((item: any, index: number) => (
              <ul key={index} className="">
                <a href={item.link}>
                  <li className="list-none">{item.name}</li>
                </a>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
