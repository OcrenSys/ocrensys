import React from "react";
import Card from "@/components/card";
import { Project, TProject } from "@/core/types/project.type";
import { promises as fs } from "fs";
import path from "path";
import PorjectDescription from "@/components/project-description";

async function getData() {
  const _directory = path.join(process.cwd(), "src/config/data");
  const _path: string = `${_directory}/projects.json`;
  const data = await fs.readFile(_path, "utf8");

  return { data };
}

const Projects = async () => {
  const result: { data: string } = await getData();
  const { title, qualities, description, projects }: TProject = JSON.parse(
    result.data
  );

  return (
    <div className="grid grid-cols-1 gap-16">
      <PorjectDescription
        title={title || ""}
        description={description || ""}
      ></PorjectDescription>
      <div className="pt-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-16">
        {projects.map((project: Project, index: number) => (
          <Card key={index} index={index} project={project}></Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
