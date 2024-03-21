'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessagesSquare } from 'lucide-react';
import { sendEmail } from '@/actions/sendEmail';
import toast from 'react-hot-toast';
import { useSectionInView } from '@/lib/hooks';
import { useFormStatus } from 'react-dom';

const Form = () => {
  const { ref } = useSectionInView('Contact');
  const { pending } = useFormStatus();
  return (
    <section id="contact" ref={ref}>
      <form
        className="flex flex-col gap-y-4"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}
      >
        <div className="relative flex items-center">
          <Input name="senderEmail" type="email" id="email" placeholder="your@email.com" required maxLength={500} />
          <MailIcon className="absolute right-6" size={20} />
        </div>
        <div className="relative flex items-center">
          <Textarea type="description" id="description" name="message" required maxLength={5000} placeholder="Your message here" />
          <MessagesSquare className="absolute top-4 right-6" size={20} />
        </div>
        <Button type="submit" disabled={pending} className="flex items-center gap-x-1 max-w-[166px]">
          {pending ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
          ) : (
            <>
              Send Email <ArrowRightIcon size={20} />
            </>
          )}
        </Button>
      </form>
    </section>
  );
};

export default Form;
