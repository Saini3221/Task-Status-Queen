import { useState } from "react";
import SpaIcon from "@mui/icons-material/Spa";
import HomeIcon from "@mui/icons-material/Home";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import CakeIcon from "@mui/icons-material/Cake";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Link } from "react-router-dom";

function Navbar() {
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isWallpaperOpen, setIsWallpaperOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleStatusDropdown = () => {
    setIsStatusOpen(!isStatusOpen);
    setIsWallpaperOpen(false);
  };
  const toggleWallpaperDropdown = () => {
    setIsWallpaperOpen(!isWallpaperOpen);
    setIsStatusOpen(false);
  };
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full bg-white shadow-md z-10">
      <div className="flex max-sm:flex-col justify-between items-center w-full p-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center max-sm:w-full max-md:w-full max-md:justify-between w-[30%] min-md:w-[20%] max-sm:justify-between justify-center">
          <div>
            <Link to="/" className="flex items-center">
              <img
                className="w-32"
                src="https://cdn.statusqueen.com/covers/statusqueen.png"
                alt="logo"
              />
            </Link>
          </div>
          <div>
            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden text-gray-600">
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Navbar Links */}
        <div
          className={`md:flex md:items-center justify-center md:space-x-5 max-sm:w-full max-md:w-full  min-md:w-[80%] w-[70%] text-gray-600 absolute md:static bg-white left-0 top-16 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="flex items-center p-3 md:p-0 hover:text-blue-600"
          >
            <HomeIcon className="mr-1" /> HOME
          </Link>

          {/* Status Dropdown */}
          <div className="relative ">
            <div
              className="cursor-pointer flex items-center p-3 md:p-0 hover:text-blue-600"
              onClick={toggleStatusDropdown}
            >
              <SpaIcon className="mr-1" /> STATUS{" "}
              {!isStatusOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </div>
            {isStatusOpen && (
              <div className="absolute mt-2 bg-white shadow-lg rounded-lg w-40 md:left-0  z-10">
                <ul>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer">
                    {" "}
                    DP IMAGES
                  </li>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer">
                    {" "}
                    IMAGE STATUS
                  </li>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer">
                    {" "}
                    ENGLISH STATUS
                  </li>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer">
                    {" "}
                    HINDI STATUS
                  </li>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer">
                    {" "}
                    PUNJABI STATUS
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Wallpapers Dropdown */}
          <div className="relative">
            <div
              className="cursor-pointer flex items-center p-3 md:p-0 hover:text-blue-600"
              onClick={toggleWallpaperDropdown}
            >
              <InsertPhotoIcon className="mr-1" /> WALLPAPERS{" "}
              {!isWallpaperOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </div>
            {isWallpaperOpen && (
              <div className="absolute mt-2 bg-white shadow-lg rounded-lg w-40 md:left-0 z-10">
                <ul>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer">
                    Nature
                  </li>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer">Art</li>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer">
                    Abstract
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Birthday Wishes */}
          <Link
            to="/birthday"
            className="flex items-center p-3 md:p-0 hover:text-blue-600"
          >
            <CakeIcon className="mr-1" /> BIRTHDAY WISHES
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
