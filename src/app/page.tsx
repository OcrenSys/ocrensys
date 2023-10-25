import About from "@/components/about";
import { TAbout } from "@/core/types/about.type";
import { promises as fs } from "fs";
import path from "path";

async function getData() {
  const _directory = path.join(process.cwd(), "src/config/data");
  const _path: string = `${_directory}/about.json`;
  const data = await fs.readFile(_path, "utf8");

  return { data };
}

const HomePage = async (props: any) => {
  const result: { data: string } = await getData();
  const data: TAbout = JSON.parse(result.data);

  return (
    <div className="w-full">
      <div className="grid grid-flow-row auto-rows-max">
        <div className="grid grid-cols-1">
          <About data={data || {}}></About>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
