import Home from "./home/page";
export default function HomePage() {
  return (
    <div className="container">
      <div className="grid grid-flow-row auto-rows-max">
        <div className="grid grid-cols-1">
          <Home></Home>
        </div>
      </div>
    </div>
  );
}
