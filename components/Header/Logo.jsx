import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.webp" width={54} height={54} priority alt="Logo" className="rounded-tr-2xl rounded-bl-2xl" />
    </Link>
  );
};

export default Logo;
