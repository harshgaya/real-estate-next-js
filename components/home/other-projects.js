// "use client";
// import Image from "next/image";

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import OrangeText from "../texts/orange-text";
// import SmallText3 from "../texts/small-text-3";

// export default function OtherProjects() {
//   return (
//     <div className="w-full">
//       <div className="flex justify-center flex-col items-center">
//         <OrangeText>Other Projects</OrangeText>
//         <SmallText3>Other projects by us in different locations </SmallText3>
//         <Carousel
//           autoPlay
//           infiniteLoop
//           showThumbs={false}
//           width={"80%"}
//           className="flex flex-row justify-center items-center"
//         >
//           <div>
//             <Image
//               src="/other-project/other-project-1.png"
//               height={500}
//               width={600}
//               alt="image1"
//             />
//             <p className="legend">Estaing, France</p>
//           </div>
//           <div>
//             <Image
//               src="/other-project/other-project-2.png"
//               height={500}
//               width={600}
//               alt="image2"
//             />
//             <p className="legend">Montego Bay, JAMAICA</p>
//           </div>
//           <div>
//             <Image
//               src="/other-project/other-project-3.png"
//               height={500}
//               width={600}
//               alt="image3"
//             />
//             <p className="legend">Moscow, Russia</p>
//           </div>
//         </Carousel>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import OrangeText from "../texts/orange-text";
import SmallText3 from "../texts/small-text-3";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function OtherProjects() {
  return (
    <motion.div
      className="w-full mt-10 md:mt-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center flex-col items-center">
        {/* Header Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <OrangeText>Other Projects</OrangeText>
          <SmallText3>Other projects by us in different locations</SmallText3>
        </motion.div>

        {/* Carousel Section */}
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          width={"80%"}
          className="flex flex-row justify-center items-center mt-5"
        >
          {/* Individual Slides with Animation */}
          {[
            {
              src: "/other-project/other-project-1.png",
              alt: "image1",
              legend: "Estaing, France",
            },
            {
              src: "/other-project/other-project-2.png",
              alt: "image2",
              legend: "Montego Bay, JAMAICA",
            },
            {
              src: "/other-project/other-project-3.png",
              alt: "image3",
              legend: "Moscow, Russia",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                src={project.src}
                height={500}
                width={600}
                alt={project.alt}
              />
              <p className="legend">{project.legend}</p>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </motion.div>
  );
}
