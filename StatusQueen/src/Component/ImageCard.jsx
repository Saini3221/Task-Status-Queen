/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function ImageCard({ img, link }) {
  return (
    <div className="flex flex-col items-center m-4">
      <Link to={link} className="block">
        <img 
          className="w-full sm:w-[180px] md:w-[214px] rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-110" 
          src={img} 
          alt="img" 
        />
      </Link>
    </div>
  );
}

export default ImageCard;
