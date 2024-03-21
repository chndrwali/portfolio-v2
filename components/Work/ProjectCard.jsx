'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader } from '@/components/ui/card';
import { Github, Link2Icon, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const ProjectCard = ({ project }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  function limitDescription(description, limit = 27) {
    const words = description.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return description;
  }

  return (
    <>
      <Card className="group overflow-hidden relative">
        <CardHeader className="p-0">
          <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project-bg-light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
            <Image className="absolute bottom-0 shadow-2xl" src={project.image[0]} width={247} height={250} alt="" priority />
            <div className="flex gap-x-4">
              <Link href={project.link} className="bg-primary-foreground w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
                <Link2Icon className="text-primary dark:text-white" />
              </Link>
              <Link href={project.github} className="bg-primary-foreground w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
                <Github className="text-primary dark:text-white" />
              </Link>
            </div>
          </div>
        </CardHeader>
        <div className="h-full px-8 py-6">
          <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">{project.category}</Badge>
          <h4 className="h4 mb-1 hover:underline" onClick={handleOpenDialog}>
            {project.name}
          </h4>

          <p className="text-muted-foreground text-lg">{limitDescription(project.description)}</p>
        </div>
      </Card>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogContent sx={{ padding: '32px' }}>
          <div className="flex flex-col relative">
            <button onClick={handleCloseDialog} className="absolute top-0 right-0 border border-primary/50 rounded-full p-2 cursor-pointer hover:bg-primary transition-all">
              <X size={20} className="hover:text-white" />
            </button>
            <h4 className="h4">{project.name}</h4>
            <Badge className="uppercase text-sm font-medium mb-2 max-w-[100px]">{project.category}</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
            {project.image.map((image, index) => (
              <div key={index} className="flex flex-col items-center">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Image src={image} width={247} height={250} alt="" priority className="rounded-lg image-animation" />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div className="overflow-hidden rounded-lg ">
                      <Image src={image} width={400} height={400} alt="" priority className="rounded-lg" />
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            ))}
          </div>
          <div className="text-muted-foreground text-sm">{project.description}</div>
          <div className="mt-4 flex items-center gap-x-4">
            <Link href={project.link} target="_blank" className="text-blue-500 hover:underline flex items-center">
              Website <Link2Icon size={20} className="ml-1" />
            </Link>
            <Link href={project.github} target="_blank" className="text-blue-500 hover:underline flex items-center">
              Repository <Github size={20} className="ml-1" />
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
