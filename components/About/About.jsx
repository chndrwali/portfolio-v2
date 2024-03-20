import DevImg from '../Hero/DevImg';
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
    text: 'S1 Informatics Engineering',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Jl. Mentor N0.74 Bandung, Indonesia',
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
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
        <div className="flex flex-col xl:flex-row ">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" imgSrc="/hero/developer.webp" />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none ">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skill
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8 ">
                <TabsContent value="personal">
                  <div className='text-center xl:text-left'>
                    <h3 className="h3 mb-4">Unmatched Service Quality for Over 10 Years</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, qui!</p>
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                        {infoData.map((item, index) =>{
                            return <div key={index} className='flex items-center gap-x-4 mx-auto xl:mx-0'>
                                <div className='text-primary'>{item.icon}</div>
                                <div>{item.text}</div>
                            </div>
                        })}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">Qualifications</TabsContent>
                <TabsContent value="skills">Skill</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
