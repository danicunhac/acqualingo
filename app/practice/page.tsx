import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const metadata = [
  {
    id: 1,
    title: 'Precipitation',
    text: 'À medida que as nuvens se tornam mais densas e pesadas, as gotas de água se unem e caem de volta à Terra na forma de chuva, neve ou granizo. Esse é o estágio da precipitação, que repõe a água nos reservatórios terrestres.. ',
    imagePosition: 'right',
  },
  {
    id: 2,
    title: 'Evaporation',
    text: 'Tudo começa com a energia do sol aquecendo a superfície da Terra. Essa energia é absorvida pela água em oceanos, lagos e rios, levando à evaporação das moléculas de água, que se transformam em vapor de água na atmosfera.',
    imagePosition: 'left',
  },
  {
    id: 3,
    title: 'Condensation',
    text: 'O vapor de água sobe na atmosfera, onde a temperatura é mais baixa. Isso leva à condensação, na qual o vapor se agrupa para formar pequenas gotas de água, criando nuvens. Esse processo é crucial para a formação das nuvens.',
    imagePosition: 'right',
  },
  {
    id: 4,
    title: 'Infiltration',
    text: 'A água da precipitação se infiltra no solo, onde é absorvida pelas plantas ou segue para os lençóis freáticos. Parte dela também flui para rios e riachos, alimentando ecossistemas aquáticos.',
    imagePosition: 'left',
  },
  {
    id: 5,
    title: (
      <>
        (Evapo) <br /> Transpiration
      </>
    ),
    text: 'As plantas absorvem a água do solo e a liberam na atmosfera através da transpiração. A evapotranspiração refere-se à soma da evaporação da superfície do solo e da transpiração das plantas. Esse processo é vital para a circulação contínua da água na biosfera.',
    imagePosition: 'right',
  },
  {
    id: 6,
    title: 'Runoff to streams',
    text: 'A água que não é absorvida pelo solo ou pelas plantas flui para rios e riachos, formando sistemas fluviais que fornecem água doce para diversas finalidades, desde o abastecimento público até a agricultura.',
    imagePosition: 'left',
  },
  {
    id: 7,
    title: 'Runoff to ocean',
    text: 'Finalmente, a água flui de volta para os oceanos, onde o ciclo recomeça com a evaporação.',
    imagePosition: 'right',
  },
];

export default function Home() {
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
          <div className="flex gap-32 uppercase font-normal">
            <Link className="font-extrabold	" href="/">
              Home
            </Link>
            <Link href="#practice">Practice</Link>
            <Link href="https://github.com/danicunhac/acqualingo">Contact</Link>
            <Link href="">About</Link>
          </div>
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

        <div className="flex flex-col mt-32 w-full gap-32">
          {metadata.map((item) => (
            <div
              id={item.id === 1 ? 'start' : item.id.toString()}
              key={item.id}
              className="flex justify-between"
            >
              {item.imagePosition === 'left' ? (
                <Image
                  src="/cute-whale.svg"
                  alt="Cute whale"
                  width={300}
                  height={200}
                />
              ) : null}
              <div className="w-full flex flex-col gap-y-8 max-w-[50%]">
                <h3 className="font-bold text-3xl max-w-[900px] leading-tight uppercase">
                  {item.title}
                </h3>
                <p className={`${inter.className} text-base font-extralight`}>
                  {item.text}
                </p>
              </div>
              {item.imagePosition === 'right' ? (
                <Image
                  src="/cute-whale.svg"
                  alt="Cute whale"
                  width={300}
                  height={200}
                />
              ) : null}
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-32 w-full gap-32 text-3xl">
          <h2 className="w-[50%]">
            Climate change is disrupting the water cycle in worrying ways,
            increasing evaporation and resulting in more intense and extreme
            precipitation events.
          </h2>
          <h2 className="w-[50%] self-end">
            This leads to prolonged droughts in some areas and devastating
            floods in others.
          </h2>
          <h2 className="w-[50%]">
            Glacier melting affects the supply of freshwater, while rising sea
            levels cause saline intrusion in coastal aquifers.
          </h2>
          <h2 className="w-[50%] self-end">
            Sustainable water management and reducing greenhouse gas emissions
            are crucial to preserving this delicate and essential balance for
            life on Earth.
          </h2>
        </div>
        <hr className="w-full opacity-75" />
        <div
          id="practice"
          className={`${inter.className} w-full flex flex-col gap-16`}
        >
          <h1 className="text-5xl w-[75%] text-bold">
            So far we have learned a lot about the cycle of{' '}
            <span className="text-[#4A89DC]">water</span>.
          </h1>
          <div className="flex justify-between">
            <Image
              className="max-w-[50%]"
              src="/walter.svg"
              alt="Walter"
              width={200}
              height={100}
            />
            <h2 className="text-4xl w-[55%] self-end">
              Scientists also say that practicing is part of the learning
              process, so we have a{' '}
              <span className="text-[#5DD2CE]">quick test</span>.
            </h2>
          </div>
          <div className="flex text-2xl gap-12 mt-12">
            <p>
              During this <span className="text-[#5DD2CE]">test</span>, you have
              to choose the correct option for each question in order to keep
              your <span className="text-[#4A89DC]">water</span> resource.
            </p>
            <div className="flex flex-col align-items-center gap-12">
              <p>
                And as you may know,{' '}
                <span className="text-[#4A89DC]">water</span> is{' '}
                <span className="text-[#5DD2CE]">crucial</span> for human being,
                so you don&apos;t want to{' '}
                <span className="text-[#5DD2CE]">lose</span> it, right?
              </p>
            </div>
          </div>
          <Link
            href="/practice"
            className={`${inter.className} text-sm justify-center flex uppercase w-[25%] text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-[#] font-medium rounded-full shadow px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200`}
          >
            Start Practice
          </Link>
        </div>
      </div>
    </main>
  );
}
