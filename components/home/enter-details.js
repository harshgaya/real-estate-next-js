// import ButtonRounded from "../buttons/button-rounded";
// import BigText2 from "../texts/big-text2";
// export default function EnterDetails() {
//   return (
//     <div className="h-[700px] flex justify-center items-center w-full bg-[#2C2B2B]">
//       <div>
//         <BigText2>
//           Did You Find Your <br />
//           <span className="text-customOrange">Dream Home?</span> <br />
//         </BigText2>
//         <p className="text-3xl text-customBorderColor text-opacity-65 w-[48%] mt-5">
//           Thank you for getting in touch! if you find your dream home connect
//           with us
//         </p>
//       </div>
//       <form>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           required
//           className="text-customGrayColor font-monte text-base bg-transparent border-b-[1px] border-customGrayColor focus:outline-none w-50"
//           placeholder="Your Name"
//         />
//         <input
//           type="email"
//           name="email"
//           id="email"
//           required
//           className="ml-3 font-monte text-base text-customGrayColor bg-transparent border-b-[1px] border-customGrayColor focus:outline-none w-50"
//           placeholder="Your Email"
//         />
//         <p className="mt-20">
//           <input
//             type="number"
//             name="phone"
//             id="phone"
//             required
//             className="font-monte text-base text-customGrayColor bg-transparent border-b-[1px] border-customGrayColor focus:outline-none w-50"
//             placeholder="Phone Number"
//           />
//           <input
//             type="number"
//             name="age"
//             id="age"
//             required
//             className=" ml-3 font-monte text-base text-customGrayColor bg-transparent border-b-[1px] border-customGrayColor focus:outline-none w-50"
//             placeholder="Your Age"
//           />
//         </p>
//         <input
//           type="text"
//           name="message"
//           id="message"
//           required
//           className="mb-10 mt-20 font-monte text-base text-customGrayColor bg-transparent border-b-[1px] border-customGrayColor focus:outline-none w-full"
//           placeholder="Your Message"
//         />
//         <ButtonRounded name={"Submit"} />
//       </form>
//     </div>
//   );
// }

"use client";

import ButtonRounded from "../buttons/button-rounded";
import BigText2 from "../texts/big-text2";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function EnterDetails() {
  return (
    <motion.div
      className="h-[600px] flex flex-col md:flex-row justify-center md:justify-between items-center w-full bg-[#2C2B2B] px-5"
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
        <BigText2>
          Did You Find Your <br />
          <span className="text-customOrange">Dream Home?</span> <br />
        </BigText2>
        <p className="text-lg md:text-3xl text-customBorderColor text-opacity-65 w-full md:w-[48%] mt-5">
          Thank you for getting in touch! If you find your dream home, connect
          with us.
        </p>
      </motion.div>
      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full md:w-[50%] mt-5 md:mt-0"
      >
        <input
          type="text"
          name="name"
          id="name"
          required
          className="w-full md:w-52 text-customGrayColor font-monte text-base bg-transparent border-b-[1px] border-customGrayColor focus:outline-none "
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full md:w-52 mt-8 md:mt-0 md:ml-3 font-monte text-base text-customGrayColor bg-transparent border-b-[1px] border-customGrayColor focus:outline-none "
          placeholder="Your Email"
        />
        <p className="md:mt-20">
          <input
            type="number"
            name="phone"
            id="phone"
            required
            className="mt-8 md:mt-0 w-full md:w-52 font-monte text-base text-customGrayColor bg-transparent border-b-[1px] border-customGrayColor focus:outline-none"
            placeholder="Phone Number"
          />
          <input
            type="number"
            name="age"
            id="age"
            required
            className="mt-8 md:mt-0 w-full md:w-52 md:ml-3 font-monte text-base text-customGrayColor bg-transparent border-b-[1px] border-customGrayColor focus:outline-none "
            placeholder="Your Age"
          />
        </p>
        <input
          type="text"
          name="message"
          id="message"
          required
          className="mb-10 mt-8 md:mt-20 font-monte text-base text-customGrayColor bg-transparent border-b-[1px] border-customGrayColor focus:outline-none w-full"
          placeholder="Your Message"
        />
        <ButtonRounded name={"Submit"} />
      </motion.form>
    </motion.div>
  );
}
