'use client';
import React from 'react';
import Card from '@/app/ui/card';
import { ProjectData } from './lib/palceholder_data';
import { TProjectItem } from './lib/definitions';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/react';
import FadeAnimation from './ui/fadeAnimation';

const Projects = () => {
  const { title, description, items, social } = ProjectData;
  const redirectTo = (url: string) => window.open(url);

  return (
    <section className="grid grid-cols-1">
      <div className="pt-4 px:0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <FadeAnimation className="flex flex-col items-center md:items-start">
          <h1 className="max-w-md text-white text-6xl text-center md:text-left lg:text-left xl:text-left font-semibold my-8">
            {title}
          </h1>
          <p className="text-xl md:text-xl font-light text-center md:text-justify md:text-clip mt-6 mb-8">
            {description}
          </p>
          <Button
            onClick={() => redirectTo(social.github)}
            className="w-full md:w-auto mr-4 mb-4 border-white"
            radius="full"
            variant="bordered"
          >
            <FontAwesomeIcon icon={faGithub} />
            {'My Github'}
          </Button>
        </FadeAnimation>

        {items.slice(0, 3).map((project: TProjectItem, index: number) => (
          <Card key={index} index={index} project={project}></Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
