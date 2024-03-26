import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Tab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    // <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-2 ">
      <div className="flex justify-start  -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  dark:text-gray-800">
        <Link
          to={""}
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-t-lg dark:border-gray-600 dark:text-gray-900 ${
            tabIndex === 0 ? "border border-b-0 " : "border-b"
          }`}
        >
          <span>Read Books</span>
        </Link>
        <Link
          onClick={() => setTabIndex(1)}
          to={`w-books`}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-t-lg dark:border-gray-600 dark:text-gray-900 ${
            tabIndex === 1 ? "border border-b-0 " : "border-b"
          }`}
        >
          <span>Whishlist Books</span>
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Tab;
