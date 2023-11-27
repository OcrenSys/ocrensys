import React from 'react';
import Card from '@/app/ui/card';
import PorjectDescription from '@/app/ui/project-description';
import { ProjectData } from './lib/palceholder_data';
import { TProjectItem } from './lib/definitions';
import ScrollAnimation from './ui/scrollAnimation';

const Projects = () => {
  const { title, description, items } = ProjectData;

  return (
    <ScrollAnimation>
      <section className="grid grid-cols-1">
        <div className="pt-4 px:0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <PorjectDescription
            title={title || ''}
            description={description || ''}
          ></PorjectDescription>

          {items.slice(0, 3).map((project: TProjectItem, index: number) => (
            <Card key={index} index={index} project={project}></Card>
          ))}
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Projects;
