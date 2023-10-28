import About from '@/app/ui/about';
import { TInformation } from './lib/definitions';
import { InformationData as data } from './lib/palceholder_data';

function getData(): TInformation {
  return data;
}

const HomePage = () => {
  const data = getData();

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
