import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex py-4 px-10 bg-gray-300 w-full">
      <Image src="/img/logo.png" alt="Logo" width={100} height={100} />
      <div className="inline ml-auto my-auto">
        <Link href="/" className="mx-2 font-light hover:text-gray-500">
          Home
        </Link>
        <Link href="/about" className="mx-2 font-light hover:text-gray-500">
          About
        </Link>
        <Link href="/ninjas" className="mx-2 font-light hover:text-gray-500">
          Ninja List
        </Link>
      </div>
    </nav>
  );
};
