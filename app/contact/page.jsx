import Form from '@/components/Form/Form';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <div className="w-[30px] h-[2px] bg-primary"></div>
              Say Hello ✋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together</h1>
            <p className="subtitle max-w-[400px]">
              Are you ready to take your project to the next level? Let's discuss how we can work together to bring your vision to life. Contact me today to get started!
            </p>
          </div>
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8 ">
              <MailIcon size={18} className="text-primary " />
              <div>chndrwali@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8 ">
              <HomeIcon size={18} className="text-primary " />
              <div>Jl. Mentor No.74 Bandung, Indonesia</div>
            </div>
            <div className="flex items-center gap-x-8 hover:underline">
              <PhoneCall size={18} className="text-primary " />
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div>+62 89652648201</div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <h4 className="h4">Contact me on whatsapp</h4>
                  <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                    <div className="text-primary">
                      <FaWhatsapp size={20} />
                    </div>
                    <a className="hover:underline" href='https://wa.me/+6289652648201' target="_blank">
                    +62 89652648201
                    </a>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
