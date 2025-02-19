// eslint-disable-next-line react/prop-types
function LinksCard({ text, icons, fromColor, toColor }) {
  return (
    <div
      className={`my-3 bg-gradient-to-r ${fromColor} ${toColor} w-[250px] h-[180px] flex flex-col items-center justify-center rounded-2xl text-white p-4 shadow-lg transition-transform transform hover:scale-105`}
    >
      {/* Icon Section */}
      <div className="text-4xl">{icons}</div>

      {/* Text Section */}
      <p className="mt-2 text-center font-semibold text-lg">{text}</p>
    </div>
  );
}

export default LinksCard;
