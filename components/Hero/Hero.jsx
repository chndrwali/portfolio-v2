'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";
import { 
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from "react-icons/ri"
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    const [isDownloading, setIsDownloading] = useState(false);
    const [dots, setDots] = useState('');

  useEffect(() => {
    let intervalId;
    if (isDownloading) {
      intervalId = setInterval(() => {
        setDots(prevDots => prevDots.length >= 3 ? '' : prevDots + '.');
      }, 500); 
    } else {
      setDots('');
    }

    return () => clearInterval(intervalId);
  }, [isDownloading]);

    const handleDownloadCV = () => {
      setIsDownloading(true);
      setTimeout(() => {
      fetch("/Front_End_Developer_Candra_Wali_Sanjaya.pdf")
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "Front_End_Developer_Candra_Wali_Sanjaya.pdf");
          link.setAttribute("target", "_blank");
          document.body.appendChild(link);
          link.click();
          setIsDownloading(false);
        })
        .catch(error => {
          console.error("Error downloading CV:", error);
          setIsDownloading(false);
        });
    }, 2000);
    };
    return ( 
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-10 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none  ">
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8 ">
                <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                    <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                    <TypeAnimation sequence={[ "I'am a Front End Developer", 2000, "I'am a Machine Learning Developer", 2000]} repeat={Infinity} />
                    </div>
                    <h1 className="h1 mb-4">Hello, my name is Candra Wali Sanjaya</h1>
                    <p className="subtitle max-w-[490px] mx-auto xl:mx-0 ">As a Frontend Developer with more than 1.5+ year of experience, I have expertise in several modern technologies, including React.js, Next.js, Vite.js, and Tailwind. I am passionate about creating user-friendly and intuitive interfaces to enhance the user experience. I am always eager to learn new technologies. 
                    </p>
                   <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                    <Link href='/contact'>
                    <Button className="gap-x-2 dark:text-white">
                        Contact me <Send size={18}/>
                    </Button>
                    </Link> 
                    <Button variant='secondary' className="gap-x-2 border border-primary hover:bg-primary hover:text-white transition-all duration-300" onClick={handleDownloadCV}>
                    {isDownloading ? 'Downloading' + dots : 'Download CV '} {isDownloading ? null : <Download size={18}/>} 
                    </Button>
                   </div>
                   <Socials 
                   containerStyles='flex gap-x-6 mx-auto xl:mx-0' 
                   iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' 
                   /> 
                </div>
                <div className="hidden xl:flex relative">
                    <Badge 
                    containerStyles='absolute top-[24%] -left-[5rem]' 
                    icon={<RiBriefcase4Fill />} 
                    endCountNum={3} 
                    badgeText='Years of Experience'
                    />
                    <Badge 
                    containerStyles='absolute top-[80%] -left-[1rem]' 
                    icon={<RiTodoFill/>} 
                    endCountNum={6} 
                    badgeText='Finished Projects'
                    />
                    <Badge 
                    containerStyles='absolute top-[50%] -right-8' 
                    icon={<RiTeamFill/>} 
                    endCountNum={6}
                    endCountText='k' 
                    badgeText='Happy Clients'
                    />
                    <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
                    <DevImg containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/hero/developer.webp'  />
                </div>
            </div>
            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                <RiArrowDownSLine className="text-3xl text-primary"/>
            </div>
        </div>
    </section> 
    );
}
 
export default Hero;