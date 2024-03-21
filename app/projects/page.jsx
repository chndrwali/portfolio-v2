'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/Work/ProjectCard';

const projectData = [
  {
    image: ['/work/3.png', '/work/1.png'],
    category: 'fullstack',
    name: 'Rukun Perkasa Ecommerce',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, qui',
    link: '/',
    github: '/',
  },
  {
    image: ['/work/3.png', '/work/1.png'],
    category: 'react js',
    name: 'Candra Ecommerce',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, qui',
    link: '/',
    github: '/',
  },
  {
    image: ['/work/2.png', '/work/1.png'],
    category: 'next js',
    name: 'Rewwis Ecommerce',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, qui',
    link: '/',
    github: '/',
  },
  {
    image: ['/work/4.png', '/work/1.png'],
    category: 'react js',
    name: 'Rukun Ecommerce',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, qui',
    link: '/',
    github: '/',
  },
];

const uniqueCategories = ['all projects', ...new Set(projectData.map((item) => item.category))];
const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects' ? project : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[648px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger onClick={() => setCategory(category)} value={category} key={index} className="capitalize w-[162px] md:w-auto">
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
