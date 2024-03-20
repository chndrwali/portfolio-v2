import DevImg from '../Hero/DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Candra Wali Sanjaya',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+62 89652648201',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'chndrwali@gmail.com',
  },
  {
    icon: <Calendar size={20} />,
    text: 'Born in Bandung, 15 May 2001',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Informatics Engineering',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Jl. Mentor N0.74 Bandung, Indonesia',
  },
  {
    icon: <User2 size={20} />,
    text: 'Candra Wali Sanjaya',
  },
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Universitas Nasional Pasim',
        qualification: 'Bachelors of Informatics Engineering',
        years: '2020 - 2024(expected)',
      },
      {
        university: 'SMK Pasundan 2 Bandung',
        qualification: 'student',
        years: '2017 - 2020',
      },
      {
        university: 'SMPN 26 Bandung',
        qualification: 'student',
        years: '2014 - 2017',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'DevHandal(CodePolitan & Alibaba Cloud)',
        qualification: 'Learn JavaScript Expert',
        years: 'August 2023 - Now',
        location: 'Bandung, Indonesia (Remote)',
      },
      {
        company: 'IDCamp 2023',
        qualification: 'Learn Machine Learning Intermediate',
        years: 'Sept 2023 - Jan 2024',
        location: 'Bandung, Indonesia (Remote)',
      },
      {
        company: 'Orbit Campus (MSIB) - Artificial Intelligences 4 Jobs',
        qualification: 'Group leader, Front End Dev, Machine Learning Dev',
        years: 'Aug 2023 - Jan 2024',
        location: 'Jakarta, Indonesia (Remote)',
      },
      {
        company: 'Dicoding Indonesia (MSIB) - Front End Web & Back End ',
        qualification: 'Front End Developer',
        years: 'Feb 2023 - June 2023',
        location: 'Bandung, Indonesia (Remote)',
      },
    ],
  },
];

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML,CSS',
      },
      {
        name: 'Next JS,JavaScript, TypeScript',
      },
      {
        name: 'Python,React, TailwindCSS',
      },
      {
        name: 'Github, Git',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/figma.svg',
      },
      {
        imgPath: '/about/notion.svg',
      },
      {
        imgPath: '/about/wordpress.svg',
      },
    ],
  },
];
const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  console.log(getData(qualificationData, 'education'));
  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About me</h2>
      </div>
    </section>
  );
};

export default About;
