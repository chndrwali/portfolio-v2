import DevImg from '../Hero/DevImg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { FaWhatsapp } from 'react-icons/fa';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Candra Wali Sanjaya',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+62 89652648201',
    href: 'https://wa.me/+626289652648201',
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
        qualification: 'Student',
        years: '2017 - 2020',
      },
      {
        university: 'SMPN 26 Bandung',
        qualification: 'Student',
        years: '2014 - 2017',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'DevHandal',
        role: 'Learn JavaScript Expert',
        years: 'August 2023 - Now',
        location: 'Bandung, Indonesia (Remote)',
      },
      {
        company: 'Orbit Campus - Artificial Intelligences 4 Jobs',
        role: 'Group leader, Front End Dev, Machine Learning Dev',
        years: 'Aug 2023 - Jan 2024',
        location: 'Jakarta, Indonesia (Remote)',
      },
      {
        company: 'Dicoding Indonesia ',
        role: 'Front End Developer',
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
        name: 'HTML, CSS, TailwindCSS',
      },
      {
        name: 'Next JS, React,',
      },
      {
        name: 'Python, JavaScript, TypeScript ',
      },
      {
        name: 'Prisma, Keras',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.webp',
      },
      {
        imgPath: '/about/figma.webp',
      },
      {
        imgPath: '/about/npm.webp',
      },
      {
        imgPath: '/about/google-colab.webp',
      },
      {
        imgPath: '/about/git.webp',
      },
      {
        imgPath: '/about/github.webp',
      },
      {
        imgPath: '/about/vercel.webp',
      },
    ],
  },
];
const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

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
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Unmatched Service Quality for Over 2 Years</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0 ">
                      I am a highly skilled and motivated individual with a passion for software engineering. My experience includes working on various projects, where I have honed my skills in problem-solving, teamwork, and communication.
                      I am dedicated to delivering high-quality work and thrive in fast-paced environments. Let's work together to bring your ideas to life!
                    </p>{' '}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div key={index} className="flex items-center gap-x-4 mx-auto xl:mx-0">
                            <div className="text-primary">{item.icon}</div>
                            {item.text === '+62 89652648201' ? (
                              <HoverCard>
                                <HoverCardTrigger asChild>
                                  <div className="hover:underline">{item.text}</div>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-80">
                                  <h4 className="h4">Contact me on whatsapp</h4>
                                  <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                                    <div className="text-primary">
                                      <FaWhatsapp size={20} />
                                    </div>
                                    <a className="hover:underline" href={item.href} target="_blank">
                                      {item.text}
                                    </a>
                                  </div>
                                </HoverCardContent>
                              </HoverCard>
                            ) : (
                              <div>{item.text}</div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>Indonesian, Sundanese, Arabic</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                    <div className="grid md:grid-cols-2 gap-y-8 ">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">{getData(qualificationData, 'experience').title}</h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'experience').data.map((item, index) => {
                            const { company, role, years, location } = item;

                            return (
                              <div key={index} className="flex gap-x-8 group">
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-2xl leading-none mb-2 ">{company}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                  <div className="text-base font-medium ">{location}</div>
                                  <div>{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={20} />
                          <h4 className="capitalize font-medium">{getData(qualificationData, 'education').title}</h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'education').data.map((item, index) => {
                            const { university, qualification, years } = item;

                            return (
                              <div key={index} className="flex gap-x-8 group ">
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-2xl leading-none mb-2 ">{university}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                  <div className="text-base font-medium ">{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillData, 'skills').data.map((item, index) => {
                          const { name } = item;
                          return (
                            <div key={index} className="w-2/4 text-center xl:text-left mx-auto xl:mx-0">
                              <div className="font-medium">{name}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, 'tools').data.map((item, index) => {
                          const { imgPath } = item;

                          return (
                            <div key={index}>
                              <Image src={imgPath} width={48} height={48} alt="" priority className="rounded-full image-animation" />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
