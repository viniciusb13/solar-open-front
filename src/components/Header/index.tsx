import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import Image from "next/image";

import SearchForm from "@/components/Header/SearchForm";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-99 flex w-full border-b border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark">
      <div className="flex flex-grow items-center justify-between px-4 py-5 shadow-2 md:px-5 2xl:px-10">
        <button
          onClick={(e) => {
            e.stopPropagation();
            props.setSidebarOpen(!props.sidebarOpen);
        }}>
          <Image
              width={32}
              height={32}
              src={"/images/icon/sidebar-minimalistic.svg"}
              style={{ opacity: '0.7'}}
              // src={"/images/icon/sidebar-minimalistic.svg"}
              alt="Sidebar"
              priority
          />
        </button>
        {/* <div className="hidden xl:block">
          <div>
            <h1 className="mb-0.5 text-heading-5 font-bold text-dark dark:text-white">
              Solar Open
            </h1>
            <p className="font-medium">Next.js Admin Dashboard Solution</p>
          </div>
        </div> */}

        <div className="flex items-center gap-2 2xsm:gap-4 w-full justify-end">
          <ul className="flex items-center gap-2 2xsm:gap-4">

            {/* <SearchForm /> */}

            {/* <DarkModeSwitcher /> */}

            <DropdownNotification />
          </ul>

          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
