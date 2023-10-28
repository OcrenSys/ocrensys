import React from 'react';
import Card from '@/app/ui/card';
import PorjectDescription from '@/app/ui/project-description';
import { TProjectItem, TProject } from '../lib/definitions';
import { ProjectData as data } from '../lib/palceholder_data';

function getData(): TProject {
  return data;
}

const Projects = () => {
  const { title, description, items } = getData();

  return (
    <div className="grid grid-cols-1">
      <PorjectDescription
        title={title || ''}
        description={description || ''}
      ></PorjectDescription>
      <div className="pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        {items.map((project: TProjectItem, index: number) => (
          <Card key={index} index={index} project={project}></Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
