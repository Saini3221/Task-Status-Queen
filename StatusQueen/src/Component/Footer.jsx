import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-white py-4 w-full shadow-md">
      {/* Links Section - Hidden on Small Screens */}
      <div className="hidden md:flex gap-4 sm:gap-6 text-gray-500 text-sm md:text-base">
        <button className="hover:text-pink-400">Privacy Policy</button>
        <button className="hover:text-pink-400">Site Map</button>
        <button className="hover:text-pink-400">Contact Us</button>
      </div>

      {/* Social Icons - Centered on Small Screens */}
      <div className="flex gap-6 text-pink-400 justify-center w-full md:w-auto mt-3 md:mt-0">
        <TwitterIcon className="hover:scale-110 transition-transform cursor-pointer" />
        <FacebookIcon className="hover:scale-110 transition-transform cursor-pointer" />
        <PinterestIcon className="hover:scale-110 transition-transform cursor-pointer" />
      </div>
    </div>
  );
}

export default Footer;
