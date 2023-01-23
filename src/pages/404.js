import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div className="container mx-auto w-full h-[500px]">
      <div className="flex flex-col mx-auto mt-[10rem] justify-center gap-4">
        <h1 className="mx-auto font-semibold text-xl">404 | Oops Page not found :(</h1>
        <Link href="/" className="mx-auto font-light">
          Go back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
