import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Practice() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-[120px] py-[60px] bg-[url('/ocean-background.png')] bg-center bg-no-repeat bg-cover w-full">
      <div className="flex flex-col z-10 w-full items-center justify-between text-sm bg-white/10 backdrop-blur-sm rounded-lg pt-5 px-20 pb-20 gap-8 w-full">
        <div className="gap-10 flex items-center justify-between fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:bg-none font-bold">
          <Link
            href="/"
            className="text-2xl uppercase pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acqualingo
          </Link>
        </div>

        <div className="flex">
          <div className="w-full flex flex-col gap-y-8 max-w-[900px]">
            <h1 className="font-bold text-6xl max-w-[900px] leading-tight uppercase">
              Everything <br /> starts with Water
            </h1>
            <p className={`${inter.className} text-lg font-extralight`}>
              Embark on this adventure of discovery about water and the impacts
              that our ecosystem has been suffering.
            </p>
            <Link
              href="#start"
              className={`${inter.className} justify-center flex uppercase w-[25%] text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-[#] font-medium rounded-full shadow px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200`}
            >
              Embark
            </Link>
          </div>

          <Image
            className="max-w-[50%]"
            src="/cute-whale.svg"
            alt="Cute whale"
            width={600}
            height={500}
          />
        </div>
      </div>
    </main>
  );
}
