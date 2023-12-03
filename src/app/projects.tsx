import React from 'react';
import Card from '@/app/ui/card';
import { ProjectData } from './lib/palceholder_data';
import { TProjectItem } from './lib/definitions';
import ScrollAnimation from './ui/scrollAnimation';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import FadeAnimation from './ui/fadeAnimation';

const Projects = () => {
  const { title, description, items } = ProjectData;

  return (
    // <ScrollAnimation>
    <section className="grid grid-cols-1">
      <div className="pt-4 px:0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <FadeAnimation>
          <h1 className="max-w-md text-white text-6xl text-center md:text-left lg:text-left xl:text-left font-semibold my-8">
            {title}
          </h1>
          <p className="text-xl md:text-xl font-light text-center md:text-justify md:text-clip mt-6 mb-8">
            {description}
          </p>
          <Link href={'#contact'}>
            <Button
              className="w-auto mr-4"
              radius="full"
              color="primary"
              variant="shadow"
            >
              {'View all projects'}
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Link>
        </FadeAnimation>

        {items.slice(0, 3).map((project: TProjectItem, index: number) => (
          <Card key={index} index={index} project={project}></Card>
        ))}
      </div>
    </section>
    // </ScrollAnimation>
  );
};

export default Projects;
