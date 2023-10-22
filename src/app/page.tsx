"use client";
import About from "./about/page";
import Companies from "./companies/pages";
import Contact from "./contact/page";
import Projects from "./projects/page";

export default function HomePage() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-flow-row auto-rows-max">
        <div className="grid grid-cols-1">
          <About></About>
        </div>
        <div className="mt-10 grid grid-cols-1">
          <Companies></Companies>
        </div>
        <div className="border-1 mt-10 grid grid-cols-1">
          <Projects></Projects>
        </div>
        <div className="border-1 mt-10 grid grid-cols-1">
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}
