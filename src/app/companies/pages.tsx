import Image from "next/image";
import PIKI from "../../../public/companies/piki.png";
import CLN from "../../../public/companies/cln.png";
import SMBS from "../../../public/companies/smbs.png";
import ANDER from "../../../public/companies/ander.png";

const Companies = () => {
  return (
    <div className="w-screen -ml-4 md:-ml-16 lg:-ml-24   bg-white grid grid-cols-4 xs:grid-2 sm:grid-2 md:grid-cols-4 lg:grid-cols-4 gap-4 px-4">
      <div className="grid content-center justify-center">
        <Image
          src={PIKI}
          width={100}
          height={50}
          className="h-max object-contain"
          alt="piki"
        />
      </div>

      <div className="grid content-center justify-center">
        <Image
          src={CLN}
          width={100}
          height={50}
          className="h-max object-contain"
          alt="cln"
        />
      </div>

      <div className="grid content-center justify-center">
        <Image
          src={SMBS}
          width={100}
          height={50}
          className="h-max object-contain"
          alt="smbs"
        />
      </div>

      <div className="grid content-center justify-center">
        <Image
          src={ANDER}
          width={100}
          height={50}
          className="h-max object-contain"
          alt="ander"
        />
      </div>
    </div>
  );
};

export default Companies;
