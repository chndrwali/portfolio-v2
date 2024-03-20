import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const servicesData = [
    {
      icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
      title: 'Web Design',
      description: 'I specialize in creating visually stunning and user-friendly websites that effectively communicate your brand message. Let me help you bring your vision to life!',
    },
    {
      icon: <Blocks size={72} strokeWidth={0.8} />,
      title: 'Web Development',
      description: 'With expertise in front-end and back-end development, I build custom solutions tailored to your specific needs. From e-commerce platforms to corporate websites, I deliver high-quality results.',
    },
    {
      icon: <Gem size={72} strokeWidth={0.8} />,
      title: 'App Development',
      description: 'From concept to launch, I provide full-stack development services for mobile applications. Whether you need a native or cross-platform solution, I have the skills to bring your app idea to fruition.',
    },
  ];
  
const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Services</h2>
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8 '>
          {servicesData.map((item, index) => {
            return (
              <Card key={index} className="w-full max-w-[420px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative">
                <CardHeader className="text-primary absolute -top-[60px] "> 
                <div className="w-[140px] h-[80px]  dark:bg-background flex justify-center items-center">{item.icon}</div>
                </CardHeader>
                <CardContent className="text-center"> 
                    <CardTitle className="mb-4">{item.title}</CardTitle>
                    <CardDescription className="text-lg">{item.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
