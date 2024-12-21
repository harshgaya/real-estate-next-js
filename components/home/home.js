// "use client";
// import Image from "next/image";
// import BigText from "../texts/big-text";
// import ButtonBorder from "../buttons/button-border";
// import HomeTile from "./home-tile";
// import OrangeText from "../texts/orange-text";
// import SmallText1 from "../texts/small-text-1";
// import { motion } from "framer-motion";

// const homes = [
//   {
//     key: 1,
//     image: "/homes/image-tile-1.png",
//     price: "100,000",
//     bed: "1",
//     bath: "1",
//     area: "535",
//   },
//   {
//     key: 2,
//     image: "/homes/image-tile-2.png",
//     price: "390,000",
//     bed: "2",
//     bath: "3",
//     area: "1000",
//   },
//   {
//     key: 3,
//     image: "/homes/image-tile-3.png",
//     price: "143,000",
//     bed: "1",
//     bath: "1",
//     area: "535",
//   },
//   {
//     key: 4,
//     image: "/homes/image-tile-4.png",
//     price: "211,200",
//     bed: "1",
//     bath: "1",
//     area: "535",
//   },
//   {
//     key: 5,
//     image: "/homes/image-tile-5.png",
//     price: "545,200",
//     bed: "2",
//     bath: "2",
//     area: "576",
//   },
//   {
//     key: 6,
//     image: "/homes/image-tile-6.png",
//     price: "511,200",
//     bed: "3",
//     bath: "2",
//     area: "780",
//   },
// ];
// const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7989.765781745111!2d-118.18670372425717!3d33.80617227289794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd33d056197b65%3A0xffc9eb1486da65b4!2sBest%20Buy!5e0!3m2!1sen!2sin!4v1734777143626!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`;

// const fadeIn = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0 },
// };

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center">
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//         variants={fadeIn}
//         transition={{ duration: 0.5 }}
//         className="relative w-full h-[700px] top-[-100px] left-0 z-10"
//       >
//         <Image
//           src={"/homes/header-img.png"}
//           fill
//           alt="dream home"
//           className=""
//         />
//         <BigText>
//           Find Your <span className="text-customOrange">Dream Home</span> <br />
//           @ San Diego
//         </BigText>
//       </motion.div>
//       {/* List of homes */}
//       <div className="mt-0 w-[90%] flex flex-col justify-start items-start ">
//         <div className="flex justify-start items-start space-x-5">
//           <ButtonBorder isActive={true}>All</ButtonBorder>
//           <ButtonBorder>Studio</ButtonBorder>
//           <ButtonBorder>1 Bed Room</ButtonBorder>
//           <ButtonBorder>2 Bed Room</ButtonBorder>
//         </div>
//         <div className="grid grid-cols-2 mt-5  justify-items-center items-center w-full">
//           {homes.map((home) => {
//             return (
//               <HomeTile
//                 key={home.key}
//                 price={home.price}
//                 image={home.image}
//                 bed={home.bed}
//                 bath={home.bath}
//                 area={home.area}
//               />
//             );
//           })}
//         </div>
//         {/* List of homes */}
//       </div>
//       {/* map */}
//       <div className="w-[90%] mt-5 flex flex-col justify-start items-start">
//         <OrangeText>Neighborhood</OrangeText>
//         <SmallText1>Deam home villas San Diego, CA, USA</SmallText1>
//         <iframe width="100%" height="550" src={mapUrl} className="mt-5" />
//       </div>
//       {/* map */}
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import BigText from "../texts/big-text";
import ButtonBorder from "../buttons/button-border";
import HomeTile from "./home-tile";
import OrangeText from "../texts/orange-text";
import SmallText1 from "../texts/small-text-1";
import { motion } from "framer-motion";

const homes = [
  {
    key: 1,
    image: "/homes/image-tile-1.png",
    price: "100,000",
    bed: "1",
    bath: "1",
    area: "535",
  },
  {
    key: 2,
    image: "/homes/image-tile-2.png",
    price: "390,000",
    bed: "2",
    bath: "3",
    area: "1000",
  },
  {
    key: 3,
    image: "/homes/image-tile-3.png",
    price: "143,000",
    bed: "1",
    bath: "1",
    area: "535",
  },
  {
    key: 4,
    image: "/homes/image-tile-4.png",
    price: "211,200",
    bed: "1",
    bath: "1",
    area: "535",
  },
  {
    key: 5,
    image: "/homes/image-tile-5.png",
    price: "545,200",
    bed: "2",
    bath: "2",
    area: "576",
  },
  {
    key: 6,
    image: "/homes/image-tile-6.png",
    price: "511,200",
    bed: "3",
    bath: "2",
    area: "780",
  },
];
const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7989.765781745111!2d-118.18670372425717!3d33.80617227289794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd33d056197b65%3A0xffc9eb1486da65b4!2sBest%20Buy!5e0!3m2!1sen!2sin!4v1734777143626!5m2!1sen!2sin`;

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Header */}
      <motion.div
        className="relative w-full h-[300px] md:h-[700px] top-[-100px] left-0 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={"/homes/header-img.png"}
          fill
          alt="dream home"
          className=""
        />
        <BigText>
          Find Your <span className="text-customOrange">Dream Home</span> <br />
          @ San Diego
        </BigText>
      </motion.div>

      <div className="mt-0 w-[90%] flex flex-col justify-start items-start">
        <motion.div
          className="flex justify-start items-start space-x-2 md:space-x-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ duration: 0.3 }}
        >
          <ButtonBorder isActive={true}>All</ButtonBorder>
          <ButtonBorder>Studio</ButtonBorder>
          <ButtonBorder>1 Bed Room</ButtonBorder>
          <ButtonBorder>2 Bed Room</ButtonBorder>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 mt-5 justify-items-center items-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {homes.map((home) => (
            <motion.div key={home.key} variants={fadeIn}>
              <HomeTile
                price={home.price}
                image={home.image}
                bed={home.bed}
                bath={home.bath}
                area={home.area}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="w-[90%] mt-5 flex flex-col justify-start items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <OrangeText>Neighborhood</OrangeText>
        <SmallText1>Dream home villas San Diego, CA, USA</SmallText1>
        <motion.iframe
          src={mapUrl}
          className="mt-5 w-full h-[300px] md:h-[650px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        />
      </motion.div>
    </div>
  );
}
