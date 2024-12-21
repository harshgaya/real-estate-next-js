// import Image from "next/image";
// import OrangeText from "../texts/orange-text";
// import SmallText1 from "../texts/small-text-1";
// import SmallText2 from "../texts/small-text-2";
// import SmallText3 from "../texts/small-text-3";

// export default function AboutUs() {
//   return (
//     <div>
//       <div className="relative w-full h-[736px] mt-5">
//         <Image src={"/about/about.png"} fill alt="building" />
//         <div className="absolute top-1/2 left-20 -translate-y-1/2">
//           <OrangeText>About Us</OrangeText>
//           <SmallText2>
//             {
//               "Dream Home is a gated community with a great location. Located downtown, you’re within walking distance of Parks, and the best shopping, dining and entertainment Getting around is a breeze, with easy access to freeways, buses and trolleys. . Laundry is available on premises."
//             }
//           </SmallText2>
//         </div>
//         <div className="absolute top-1/2 -translate-y-1/2 right-20 flex flex-col space-y-5">
//           <div className="text-center w-[200px] flex flex-col space-y-1">
//             <OrangeText>500+</OrangeText>
//             <SmallText1>Projects</SmallText1>
//             <SmallText3>
//               Over 500 lexury villas for“Home Away From Home” experience
//             </SmallText3>
//           </div>
//           <div className="text-center w-[200px] flex flex-col space-y-1">
//             <OrangeText>40+</OrangeText>
//             <SmallText1>Locations</SmallText1>
//             <SmallText3>
//               luxury villas and private holiday homes, from all across
//             </SmallText3>
//           </div>
//           <div className="text-center w-[200px] flex flex-col space-y-1">
//             <OrangeText>24/7</OrangeText>
//             <SmallText1>Help</SmallText1>
//             <SmallText3>
//               24/7 Help service for all customers to guide and support
//             </SmallText3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import OrangeText from "../texts/orange-text";
import SmallText1 from "../texts/small-text-1";
import SmallText2 from "../texts/small-text-2";
import SmallText3 from "../texts/small-text-3";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutUs() {
  return (
    <div>
      <motion.div
        className="relative w-full h-[700px] md:h-[736px] mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <Image src={"/about/about.png"} fill alt="building" />
        {/* Left Section */}
        <motion.div
          className="absolute top-5  left-5 md:top-1/2 md:left-20 md:-translate-y-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <OrangeText>About Us</OrangeText>
          <SmallText2>
            {
              "Dream Home is a gated community with a great location. Located downtown, you’re within walking distance of Parks, and the best shopping, dining and entertainment. Getting around is a breeze, with easy access to freeways, buses and trolleys. Laundry is available on premises."
            }
          </SmallText2>
        </motion.div>
        {/* Right Section */}
        <div className="absolute top-[490px] md:top-1/2 -translate-y-1/2 right-20 flex flex-col space-y-5">
          {[
            {
              number: "500+",
              title: "Projects",
              description:
                "Over 500 luxury villas for a 'Home Away From Home' experience",
            },
            {
              number: "40+",
              title: "Locations",
              description:
                "Luxury villas and private holiday homes, from all across",
            },
            {
              number: "24/7",
              title: "Help",
              description:
                "24/7 Help service for all customers to guide and support",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center w-[200px] flex flex-col space-y-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{
                duration: 0.5,
                delay: index * 0.2, // Adds delay for staggered animation
              }}
            >
              <OrangeText>{item.number}</OrangeText>
              <SmallText1>{item.title}</SmallText1>
              <SmallText3>{item.description}</SmallText3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
