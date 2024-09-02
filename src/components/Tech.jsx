import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const technologies = [
  {
    name: "HTML 5",
    icon: "https://i.pinimg.com/236x/9b/35/11/9b351163777b01c1ee83d566b0935d5c.jpg",
  },
  {
    name: "CSS 3",
    icon: "https://i.pinimg.com/236x/9b/35/11/9b351163777b01c1ee83d566b0935d5c.jpg",
  },
];

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");