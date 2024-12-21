// import Image from "next/image";
// import SmallText3 from "../texts/small-text-3";

// export default function Footer() {
//   return (
//     <footer className="flex justify-between items-start px-32 py-5">
//       <div>
//         <Image src={"/header/logo.png"} height={62} width={71} alt="logo" />
//         <p className="w-[313px] mt-5 text-white font-monte text-base">
//           Dream Home is a gated community with a great location. Located
//           downtown, you’re within walking distance of Parks.
//         </p>
//       </div>
//       <div className="w-[200px]">
//         <h2 className="text-2xl text-white mb-5">Contact Us</h2>
//         <SmallText3>Deam home villas San Diego, CA, USA</SmallText3>
//         <span className="flex justify-start items-center gap-2 mt-3">
//           <Image
//             src={"/footer/call.png"}
//             width={15}
//             height={15}
//             alt="call icon"
//           />{" "}
//           <SmallText3>025-777-3067</SmallText3>
//         </span>
//         <span className="flex justify-start items-center gap-2  mt-3">
//           <Image
//             src={"/footer/sms.png"}
//             width={15}
//             height={15}
//             alt="call icon"
//           />{" "}
//           <SmallText3>info@dreamhome.com</SmallText3>
//         </span>
//       </div>
//       <div>
//         <h2 className="text-2xl text-white mb-5">Follow Us</h2>
//         <div className="flex justify-between items-center gap-4">
//           <Image
//             src={"/footer/insta.png"}
//             width={32}
//             height={32}
//             alt="call icon"
//           />
//           <Image
//             src={"/footer/youtube.png"}
//             width={32}
//             height={32}
//             alt="call icon"
//           />{" "}
//           <Image
//             src={"/footer/twitter.png"}
//             width={32}
//             height={32}
//             alt="call icon"
//           />
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import Image from "next/image";
import SmallText3 from "../texts/small-text-3";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <motion.footer
      className="flex flex-col md:flex-row justify-start md:justify-between items-start px-5 md:px-32 py-5 space-y-9 md:space-y-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <Image src={"/header/logo.png"} height={62} width={71} alt="logo" />
        <p className="w-[50%] md:w-[313px] mt-5 text-white font-monte text-[10px] md:text-base">
          Dream Home is a gated community with a great location. Located
          downtown, you’re within walking distance of Parks.
        </p>
      </motion.div>

      <motion.div
        className="w-[200px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl md:text-2xl text-white mb-5">Contact Us</h2>
        <SmallText3>Deam home villas San Diego, CA, USA</SmallText3>
        <span className="flex justify-start items-center gap-2 mt-3">
          <Image
            src={"/footer/call.png"}
            width={15}
            height={15}
            alt="call icon"
          />{" "}
          <SmallText3>025-777-3067</SmallText3>
        </span>
        <span className="flex justify-start items-center gap-2 mt-3">
          <Image
            src={"/footer/sms.png"}
            width={15}
            height={15}
            alt="sms icon"
          />{" "}
          <SmallText3>info@dreamhome.com</SmallText3>
        </span>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl text-white mb-5">Follow Us</h2>
        <div className="flex justify-between items-center gap-4">
          <Image
            src={"/footer/insta.png"}
            width={32}
            height={32}
            alt="Instagram"
          />
          <Image
            src={"/footer/youtube.png"}
            width={32}
            height={32}
            alt="YouTube"
          />
          <Image
            src={"/footer/twitter.png"}
            width={32}
            height={32}
            alt="Twitter"
          />
        </div>
      </motion.div>
    </motion.footer>
  );
}
