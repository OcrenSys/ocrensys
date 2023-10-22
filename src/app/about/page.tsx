import Typed from "react-typed";
import Image from "next/image";
import PICTURE from "../../../public/images/picture.png";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="mt-10">
        <h1 className="text-5xl font-bold">{"HI!, I'm Jairo"}</h1>
        <h2 className="text-2xl font-medium mt-2 text-primary-50">
          {"Software developer using"}{" "}
          <Typed
            strings={["Angular", "React", "NestJS"]}
            typeSpeed={150}
            backSpeed={60}
            cursorChar="_"
            loop
          />
        </h2>
        <p className="mt-6 text-lg">
          {
            "I'm a highly skilled software developer with over five years of experience, driven by a deep passion for achieving both personal and professional growth."
          }
        </p>
        Buttom
      </div>
      <div className="flex content-center  align-middle  justify-center">
        <Image
          src={PICTURE}
          height={400}
          className="h-max object-contain"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default About;
