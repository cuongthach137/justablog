import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
const NotFoundPage = () => {
  const [counter, setCounter] = useState(10);
  const router = useRouter();
  useEffect(() => {
    if (counter <= 0) {
      router.push("/");
    }
    const timer = setInterval(() => {
      if (counter > 0) {
        setCounter((c) => c - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <Layout title="404 - Page not found">
      {() => (
        <div className="flex items-center justify-center">
          <div className="w-96 h-80 lg:w-[35rem] lg:m-48 border-t-8 border-blue-500 border-[1px] flex items-center justify-center ">
            <div className="px-4">
              <div className="text-xl lg:text-3xl font-bold text-center mb-2">
                404 - You have fallen into the realm of darkness. 💀💀💀
              </div>
              <div className="mb-4 text-lg">
                The vicious creatures are crawling out to get yo ass. You now
                have <span className="uppercase font-semibold">two</span>{" "}
                options:
              </div>
              <div className="mb-2">
                Yeet yourself back to
                <Link href="/">
                  <span className="underline text-blue-400 ml-1 cursor-pointer">
                    Home Page.
                  </span>
                </Link>
              </div>
              <div>
                Or Thor{" "}
                <Image
                  className="inline-block"
                  src="https://img.icons8.com/office/16/000000/thor.png"
                  alt=""
                />{" "}
                will swoop in and get you in {counter}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default NotFoundPage;
