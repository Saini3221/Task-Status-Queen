/* eslint-disable react/prop-types */
import { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';

function StatusCard({ text }) {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset message after 2 seconds
  };

  return (
    <div className="bg-white  p-4 w-full sm:w-[250px] md:w-[260px] my-2 sm:my-4 h-auto min-h-[130px] flex items-center justify-center flex-col mx-auto sm:mx-2 md:mx-[15px] rounded-xl shadow-md">
      {/* Status Text */}
      <h1 className="text-gray-500 text-center break-words px-2">{text}</h1>

      {/* Buttons Section */}
      <div className="flex items-center justify-around w-full mt-3 gap-3">
        <button
          onClick={handleCopy}
          className="bg-red-300 rounded-2xl text-white w-[50px] sm:w-[65px] py-1 text-sm hover:scale-105"
        >
          {!copied ? "Copy": "Copied!" }
        </button>
        <button className="text-red-300" onClick={handleLike}>
          {!liked ? <FavoriteBorderOutlinedIcon /> : <FavoriteIcon/>}
        </button>
      </div>
    </div>
  );
}

export default StatusCard;
