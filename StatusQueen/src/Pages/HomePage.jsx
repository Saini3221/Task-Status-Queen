import ImageCard from "../Component/ImageCard";
import Navbar from "../Component/Navbar";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import StatusCard from "../Component/StatusCard";
import LinksCard from "../Component/LinksCard";
import Footer from "../Component/Footer";

function HomePage() {
  return (
    <div className="h-screen flex flex-col gap-1 justify-between">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-[url('https://www.giffywalls.com/cdn/shop/files/D173-Wallpaper334_89.jpg?v=1738746787&width=1100')] bg-cover bg-center  w-full flex items-center justify-center mt-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {[
  { text: "DP IMAGES", fromColor: "from-rose-400", toColor: "to-rose-200" },
  { text: "IMAGES STATUS", fromColor: "from-green-400", toColor: "to-cyan-200" },
  { text: "STATUS TEXT", fromColor: "from-sky-300", toColor: "to-cyan-500" },
  { text: "BIRTHDAY WISHES", fromColor: "from-pink-300", toColor: "to-rose-400" },
  { text: "Quotes", fromColor: "from-green-500", toColor: "to-cyan-300" },
  { text: "Mobile Wallpaper", fromColor: "from-indigo-500", toColor: "to-sky-200" },
  { text: "Desktop Wallpaper", fromColor: "from-fuchsia-400", toColor: "to-teal-600" },
  { text: "Festive Wishes", fromColor: "from-orange-300", toColor: "to-rose-500" },
].map((item, index) => (
  <LinksCard
    key={index}
    text={item.text}
    fromColor={item.fromColor}
    toColor={item.toColor}
    icons={<InsertPhotoIcon />}
  />
))}

        </div>
      </div>

      {/* Latest Status Section */}
      <div className="mt-[-25px] mx-4 bg-gray-100 pb-4 rounded-t-xl shadow-md">
        <div className="flex items-center justify-center p-2 text-lg font-semibold">
          ᒪᗩTᙓST ᙎᕼᗩTSᗩᑭᑭ STᗩTᙀS
        </div>
        <div className="flex flex-wrap justify-evenly gap-4 p-4">
          {[
            "Choose people who choose you.",
            "Just a year ago, things were so different.",
            "It's about who stays, not who promised.",
            "Don’t waste your words on people who deserve your silence.",
            "I might be okay but I'm not fine at all.",
            "Alone doesn’t mean lonely.",
            "People come into our lives and you never know for how long.",
            "Tell me how it feels to be loved back.",
            "✌सहारे ढूंढ़ने की Adat नहीं हमारी🚫 😎हम Akele पूरी महफिल के बराबर हैं👑",
            "ਮੰਜਿਲ ਤੇ ਇਕ ਨਾਂ ਇਕ ਦਿਨ ਮਿਲ ਹੀ ਜਾੳਗੀ ਪਰ ਸਾਥ ਕਿਸ ਕਿਸ ਨੇ ਦਿੱਤਾ, ਯਾਦ ਜ਼ਰੂਰ ਰਹੁਗਾ । 💯",
            "ਫੁੱਲਾ🥀 ਵਰਗਾ ਸੁਭਾਅ ਏ ਫੱਕਰਾ ਦਾ, ਕੁਰਬਾਨ ਹੋ ਜਾਨੇ ਆ ਕਿਸੇ ਨੂੰ ਮਹਿਕਾਓੁਣ ਲਈ😊❣️",
            "ਚਿਹਰੇ ਉੱਤੇ ਰੱਖਕੇ ਹਾਸੇ ਜ਼ਿੰਦਗੀ ਜਿਉਣਾਂ ਸਿੱਖਗੇ ਆਂ ❤️‍🩹🖤",
            "ਸਾਫ ਜਿਹੀ ਜ਼ਿੰਦਗੀ ਜੀਉਨੇ ਆ.. ਨਾ ਚਾਲ ਤੇ ਨਾਲ ਕੋਈ ਲਾਰਾ ਏ 😊😊",
            "ਸਾਡੀ ਔਕਾਤ ਨਹੀਂ ਕਿਸੇ ਦਾ ❤️ ਦਿਲ ਜਿੱਤਣ ਦੀ, ਲੋਕ ਖੁਦ ਵਿਕ ਜਾਂਦੇ ਆ ਸਾਡਾ ਕਿਰਦਾਰ ਦੇਖ ਕੇ!",
            "ਅਸੂਲਾਂ ਦੀ ਜਿੰਦਗੀ 👍ਜਿਉਣੇ ਆਂ ਮਿੱਤਰਾ ਤਗੜਾ ਜਾਂ ਮਾੜਾ ਦੇਖ ਕਦੇ 💪 ਬਦਲੇ ਨੀ.",
            "ਨਾਲ ਸਭਨਾਂ ਤੁਰੇ ਅਸੀਂ ਕੱਲੇ ਨੀ ਬਣੇ ਧੰਨਵਾਦ ਮਾਲਕਾਂ ਅਸੀਂ ਦੱਲੇ ਨੀ ਬਣੇ 🦅"
          ]
            .map((text, index) => (
              <StatusCard key={index} text={text} />
            ))}
        </div>
      </div>

      {/* Latest DP Images Section */}
      <div className="mt-5 mx-4 bg-gray-100 pb-4 rounded-t-xl shadow-md">
        <div className="flex items-center justify-center p-2 text-lg font-semibold">
          ᒪᗩTᙓST ᗪᑭ IᙏᗩᘜᙓS
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
          {[
            "https://static.statusqueen.com/dpimages/thumbnail/Krishna_Dp-2127.jpg",
            "https://static.statusqueen.com/dpimages/thumbnail/Krishna_Dp-2272.jpg",
            "https://static.statusqueen.com/dpimages/thumbnail/Krishna_Dp-2306.jpg",
            "https://static.statusqueen.com/dpimages/thumbnail/Krishna_Dp-2318.jpg",
            "https://static.statusqueen.com/dpimages/thumbnail/Krishna_Dp-2349.jpg",
            "https://static.statusqueen.com/dpimages/thumbnail/Krishna_Dp-2437.jpg",
            "https://static.statusqueen.com/dpimages/thumbnail/Krishna_Dp-2414.jpg",
            "https://static.statusqueen.com/dpimages/thumbnail/Stylish_boy_dp-4052.jpg",
            "https://static.statusqueen.com/dpimages/thumbnail/cute_dp_image-4054.jpg",
            "https://static.statusqueen.com/dpimages/thumbnail/Stylish_boy_dp-4053.jpg",
            "https://static.statusqueen.com/dpimages/thumbnail/Mahadev_Dp-4056.jpg",
            "https://static.statusqueen.com/dpimages/thumbnail/Attitude_boy_dp_-4055.jpg",
          ].map((img, index) => (
            <ImageCard key={index} link={"/wallpaper"} img={img} />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-5 mx-4 bg-gray-100 pb-4 shadow-md">
        <div className="flex max-md:flex-col max-md:gap-0.5 justify-center p-5 gap-10 bg-white w-[95%] mx-auto text-gray-500">
          {[
            [
              "Latest Whatsapp Status",
              "Hindi Status for Whatsapp",
              "Punjabi Status for Whatsapp",
              "English Status for Whatsapp",
            ],
            [
              "Love Status in Hindi",
              "Love Status in Punjabi",
              "Sad Status in Punjabi",
              "Attitude Status in Punjabi",
            ],
            [
              "Love DP Pictures",
              "Sad DP Pictures",
              "Alone DP Pictures",
              "Religious DP Pictures",
            ],
            [
              "Best Whatsapp DP",
              "Latest Best Ringtone",
              "HD 4k Mobile Wallpaper",
              "UHD Desktop Wallpaper",
            ],
          ].map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col text-center sm:text-left">
              {column.map((item, index) => (
                <button key={index} className="hover:text-pink-400">
                  {item}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
