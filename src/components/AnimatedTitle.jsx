import React from "react";
import "../App.css"; // make sure global styles are imported

const AnimatedTitle = () => {
  return (
  // //   // <div className="grid h-screen place-items-center bg-black">
  //     <h1 className="text-white font-playfair text-[10rem] leading-[0.85] perspective">
  //       <span className="word inline-block animate-word transform -translate-x-8">Raunak
  //         <span className="superscript relative align-text-top"></span>
  //       </span>
  //       <span className="word block text-yellow-400 animate-word delay-[1500ms] ml-[8.2rem]">
  //         Kumar
  //       </span>
  //     </h1>

  // );

  //  return (
  //   <h1 className="text-white font-playfair text-[7rem] leading-[0.85] perspective">
  //     <span className="mr-2 word block animate-word">
  //       Raunak
  //     </span>
  //     <span className="word block text-yellow-400 animate-word delay-[1500ms] ml-[8.2rem]">
  //       Kumar
  //     </span>
  //   </h1>
  // );

  <h1 className="text-rose-500 dark:text-white font-playfair leading-[0.85] perspective">
  <span className="word inline-block animate-word transform -translate-x-8 text-[6rem]">
    Raunak
    <span className="superscript relative align-text-top"></span>
  </span>
  <span className="word block text-yellow-400 animate-word delay-[1500ms] ml-[1.2rem] text-[6rem] mt-[-24px]">
    Kumar
  </span>
</h1>
  )

};

export default AnimatedTitle;
