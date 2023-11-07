import React, { useRef } from 'react';
import Card from '@/app/ui/card';
import PorjectDescription from '@/app/ui/project-description';
import { TProjectItem, TProject } from './lib/definitions';
import { ProjectData as data } from './lib/palceholder_data';
import { useScroll, useTransform } from 'framer-motion';
import ScrollAnimation from './ui/scrollAnimation';

const Projects = () => {
  const { title, description, items } = data;

  return (
    <ScrollAnimation>
      <section className="grid grid-cols-1">
        <PorjectDescription
          title={title || ''}
          description={description || ''}
        ></PorjectDescription>
        <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {items.map((project: TProjectItem, index: number) => (
            <Card key={index} index={index} project={project}></Card>
          ))}
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Projects;
