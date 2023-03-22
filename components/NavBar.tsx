import { BiWorld, BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Logo from "./Logo";
import DatePicker from "./DatePicker";
import { useRouter } from "next/router";
import { date } from "../typing";
import { format } from "date-fns";

function Navbar() {
  const { data: session } = useSession();
  const [isNavBarOpen, setNavBarOpen] = useState(false);
  const [isdatePickerOpen, setDatePickerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
    const [dateValue, setDateValue] = useState<date>([new Date(), new Date()]);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  function toggleSearch(e: any) {
    setSearchIsOpen(!searchIsOpen);
    setSearch(e.target.dataset.search);
  }
  const toggleNavBar = () => {
    setNavBarOpen(true);
  };

  useEffect(() => {
    // console.log(search);
    console.log(isNavBarOpen)
  }, [isNavBarOpen]);

    const router = useRouter();

  function searchFn() {
    setNavBarOpen(false)
    setIsOpen(false)
      setStartDate(new Date(dateValue[0]));
    setEndDate(new Date(dateValue[1]));
    // console.log(startDate,endDate,isNavBarOpen)
    // setLocation("");
    
      router.push({
        pathname: "/search",
        query: {
          location: location,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          numberOfGuests,
        },
      });
    }
  return (
    <nav
      className={`${
        isNavBarOpen ? "h-44 pb-8" : ""
      } transition-[all 150ms ease ] fixed mx-auto flex flex-wrap h-20 w-full items-center justify-center bg-white md:px-8 px-4 z-20`}
    >
      <div className="flex justify-between w-full h-[50%] items-center">
        {/* <!-- logo --> */}
        <Logo />
        {/* <!-- end logo --> */}

        {/* <!-- search bar --> */}
        {isNavBarOpen ? (
          <ul className="flex justify-between w-[30%]">
            <li>Logments</li>
            <li>Expériences</li>
            <li>Expériences en ligne</li>
          </ul>
        ) : (
          <div
            onClick={toggleNavBar}
            className="flex justify-between  shadow-search text-gray-600  py-2 w-[70%] rounded-[40px] border border-[#ddd] md:w-[40%]"
          >
            <button
              data-search="location"
              onClick={(e) => {
                setDatePickerOpen(false);
                toggleSearch(e);
              }}
              className="w-1/4 px-1 truncate"
            >
              N'importe ou
            </button>
            <button
              data-search="time"
              onClick={(e) => {
                setDatePickerOpen(true);
                toggleSearch(e);
              }}
              className="border-l border-x  w-1/4 px-1 truncate"
            >
              Une semaine
            </button>
            <button
              data-search="voyageurs"
              onClick={(e) => {
                setDatePickerOpen(false);
                toggleSearch(e);
              }}
              className=" text-gray-600/60  w-2/5 px-1 truncate"
            >
              Ajouter une place
            </button>
            <div className="bg-[#ff5a60] p-2 rounded-full mr-2">
              <FiSearch className="text-white w-full" />
            </div>
          </div>
        )}
        {/* <!-- end search bar --> */}
        {/* <!-- login --> */}
        <div className="flex-initial">
          <div className="relative flex items-center justify-end">
            <div className="mr-4 md:flex items-center  hidden">
              <a
                className="inline-block rounded-full py-2 px-3 hover:bg-gray-200"
                href="#"
              >
                <div className="relative flex cursor-pointer items-center whitespace-nowrap">
                  Mettre mon logement sur Airbnb
                </div>
              </a>
              <div className="relative block">
                <button
                  type="button"
                  className="relative inline-block rounded-full py-2 px-3 hover:bg-gray-200 "
                >
                  <div className="flex h-5 items-center">
                    <div className="_xpkakx">
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: "16px",
                          width: "16px",
                          fill: "currentColor",
                        }}
                      >
                        <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div className="block">
              <div className="relative inline">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="relative inline-flex items-center rounded-full border px-2 hover:shadow-lg"
                >
                  <div className="pl-1">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        fill: "none",
                        height: "16px",
                        width: "16px",
                        stroke: "currentColor",
                        strokeWidth: 3,
                        overflow: "visible",
                      }}
                    >
                      <g fill="none" fillRule="nonzero">
                        <path d="m2 16h28"></path>
                        <path d="m2 24h28"></path>
                        <path d="m2 8h28"></path>
                      </g>
                    </svg>
                  </div>

                  <div className="block h-10 w-12 flex-shrink-0 flex-grow-0 pl-5">
                    {session ? (
                      <img
                        src={session.user?.image || ""}
                        alt=""
                        className="rounded-full relative top-[6px] left-[2px]"
                      />
                    ) : (
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: "100%",
                          width: "100%",
                          fill: "currentColor",
                        }}
                      >
                        <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                      </svg>
                    )}
                  </div>
                </button>
                {isOpen &&
                  (session ? (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-md overflow-hidden shadow-menu z-10">
                      <div className=" py-2">
                        <Link
                          href="/api/auth/signin"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Messages
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Voyages
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Favoris
                        </Link>
                      </div>
                      <div className="border-t-[1px] border-[#ddd] py-2">
                        <Link
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Mettre mon logement sur Airbnb
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Créer une expérience
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Inscription
                        </Link>
                      </div>
                      <div className="border-t-[1px] border-[#ddd] py-2">
                        <Link
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Aide
                        </Link>
                        <p
                          onClick={() => signOut()}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          Déconnexion
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-md overflow-hidden shadow-menu z-10">
                      <div className=" py-2">
                        <p
                          onClick={() => signIn()}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          Connexion
                        </p>
                        <Link
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Inscription
                        </Link>
                      </div>
                      <div className="border-t-[1px] border-[#ddd] py-2">
                        <Link
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Mettre mon logement sur Airbnb
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Créer une expérience
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Aide
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end login --> */}
      {isNavBarOpen && (
        <div className="w-full flex justify-center">
          <div
            // onClick={toggleNavBar}
            className="flex justify-between relative  shadow-search text-gray-600/60   w-[70%] rounded-[40px] border border-[#ddd] bg-[#ebebeb]"
          >
            <input
              data-search="location"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              onClick={(e) => {
                setDatePickerOpen(false);
                toggleSearch(e);
              }}
              className={`${
                search == "location" ? "bg-white" : ""
              } bg-transparent focus:outline-none placeholder:text-gray-600/60 text-center rounded-[40px] focus:bg-white w-[30%] px-1 truncate py-6 hover:isolate hover:border-transparent hover:bg-white hover:shadow-search`}
              placeholder=" N'importe ou"
            />
            <button
              data-search="time"
              onClick={(e) => {
                setDatePickerOpen(true);
                toggleSearch(e);
              }}
              className={`${
                search == "time" ? "bg-white" : ""
              } rounded-[40px] focus:bg-white w-[30%] px-1 truncate py-6 hover:isolate hover:border-transparent hover:bg-white hover:shadow-search`}
            >
              Une semaine
            </button>
            <button
              data-search="voyageurs"
              onClick={(e) => {
                setDatePickerOpen(false);
                toggleSearch(e);
                console.log(dateValue);
              }}
              className={`${
                search == "voyageurs" ? "bg-white" : ""
              } px-2.5 py-2 flex items-center justify-between rounded-[40px] focus:bg-white text-gray-600/60  w-2/5  truncate hover:isolate hover:border-transparent hover:bg-white hover:shadow-search`}
            >
              <p className="truncate w-1/2">Ajouter une place</p>
              <button
                onClick={() => {
                  setNavBarOpen(false);
                  searchFn();
                }}
                className="h-full w-1/2 items-center  font-bold flex justify-center rounded-[40px] bg-gradient text-white  truncate hover:isolate hover:border-transparent  hover:shadow-search"
              >
                {/* <div className="bg-[#ff5a60] p-2 rounded-full mr-2 py-6"> */}
                <FiSearch className="text-white w-[20%] font-bold" />
                {/* </div> */}
                <p className="w-[60%] text-center">Rechercher</p>
              </button>
            </button>
            {/* <div className="w-1/5 px-2.5 py-2 flex"></div> */}
            {/* <div className="bg-[#ff5a60] p-2 rounded-full mr-2 py-6">
              <FiSearch className="text-white w-full" />
            </div> */}
          </div>
          {isdatePickerOpen && (
            <div className="date absolute right-0 mt-2 w-64 bg-white rounded-md overflow-hidden shadow-menu z-10">
              <DatePicker
                open={isdatePickerOpen}
                value={dateValue}
                setDateValue={setDateValue}
              />
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
export default Navbar;
