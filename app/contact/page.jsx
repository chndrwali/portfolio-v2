import Form from '@/components/Form/Form';
import { MailIcon, HomeIcon, PhoneCall, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
            <div className="w-[30px] h-[2px] bg-primary"></div>
            Say Hello ✋
            </div>
          <h1 className="h1 max-w-md mb-8">Let's Work Together</h1>
          <p className="subtitle max-w-[400px]">
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, officiis cum, rem ipsa quia, debitis porro quasi nisi ipsum facilis voluptas eligendi iste labore id vitae voluptatem quis deserunt maiores.
          </p>
          
          </div>
          <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
        </div>
        <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
            <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
                <div className='flex items-center gap-x-8 '>
                    <MailIcon size={18} className='text-primary '/>
                    <div>chndrwali@gmail.com</div>
                </div>
                <div className='flex items-center gap-x-8 '>
                    <HomeIcon size={18} className='text-primary '/>
                    <div>Jl. Mentor No.74 Bandung, Indonesia</div>
                </div>
                <div className='flex items-center gap-x-8 '>
                    <PhoneCall size={18} className='text-primary '/>
                    <div>+62 89652648201</div>
                </div>
            </div>
            <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
