'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { projectData } from './data';
import ProjectCard from './ProjectCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';



const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">Explore our latest projects showcasing innovative solutions and cutting-edge technology.</p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
        <Carousel 
        className="h-full"
        opts={{
          align: "start",
        }}
         >
          <CarouselContent>
        {projectData.slice(0, 6).map((project, index) => {
        return (
          <CarouselItem key={index}  className="md:basis-1/2 lg:basis-1/3">
            <ProjectCard project={project} />
            </CarouselItem>
         );
         })}
         </CarouselContent>
         <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Work;
