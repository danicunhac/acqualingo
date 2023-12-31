import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const metadata = [
  {
    id: 1,
    title: 'Precipitation',
    text: 'As clouds become denser and heavier, water droplets come together and fall back to Earth in the form of rain, snow, or hail. This is the stage of precipitation, which replenishes water in terrestrial reservoirs. ',
    imagePosition: 'right',
    url: '/precipitation.png',
  },
  {
    id: 2,
    title: 'Evaporation',
    text: 'It all starts with the energy of the sun heating the Earth`s surface. This energy is absorbed by water in oceans, lakes, and rivers, leading to the evaporation of water molecules, which turn into water vapor in the atmosphere.',
    imagePosition: 'left',
    url: '/evaporation.png',
  },
  {
    id: 3,
    title: 'Condensation',
    text: 'Water vapor rises into the atmosphere, where the temperature is lower. This leads to condensation, in which the vapor clusters together to form small water droplets, creating clouds. This process is crucial for cloud formation.',
    imagePosition: 'right',
    url: '/condensation.png',
  },
  {
    id: 4,
    title: 'Infiltration',
    text: 'Precipitation water infiltrates the soil, where it is absorbed by plants or flows into groundwater. Part of it also flows into rivers and streams, feeding aquatic ecosystems.',
    imagePosition: 'left',
    url: '/infiltration.png',
  },
  {
    id: 5,
    title: (
      <>
        (Evapo) <br /> Transpiration
      </>
    ),
    text: 'Plants absorb water from the soil and release it into the atmosphere through transpiration. Evapotranspiration refers to the sum of soil surface evaporation and plant transpiration. This process is vital for the continuous circulation of water in the biosphere.',
    imagePosition: 'right',
    url: '/vaporization.svg',
  },
  {
    id: 6,
    title: 'Runoff to streams',
    text: 'Water that is not absorbed by the soil or plants flows into rivers and streams, forming river systems that provide freshwater for various purposes, from public supply to agriculture.',
    imagePosition: 'left',
    url: '/streams.png',
  },
  {
    id: 7,
    title: 'Runoff to ocean',
    text: 'Finally, water flows back to the oceans, where the cycle begins again with evaporation.',
    imagePosition: 'right',
    url: '/ocean.png',
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
          <div className="flex gap-32 uppercase font-normal text-xs">
            <Link
              className="dark:bg-[#5DD2CE] rounded p-2 font-extrabold"
              href="/"
            >
              Home
            </Link>
            <Link
              className="dark:bg-[#5DD2CE] rounded p-2 font-extrabold"
              href="#practice"
            >
              Practice
            </Link>
            <Link
              className="dark:bg-[#5DD2CE] rounded p-2 font-extrabold"
              href="https://github.com/danicunhac/acqualingo"
            >
              Contact
            </Link>
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
          </div>

          <Image
            className="max-w-[50%]"
            src="/cute-whale.svg"
            alt="Cute whale"
            width={600}
            height={500}
          />
        </div>
        <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-teal-500"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
        <div className="flex flex-col mt-24 w-full gap-32">
          {metadata.map((item) => (
            <div
              id={item.id === 1 ? 'start' : item.id.toString()}
              key={item.id}
              className="flex justify-between"
            >
              {item.imagePosition === 'left' ? (
                <Image
                  src={item.url ?? '/cute-whale.svg'}
                  alt="Cute whale"
                  width={200}
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
                  src={item.url ?? '/cute-whale.svg'}
                  alt="Cute whale"
                  width={200}
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
          {/** CO2 */}
          <div className="w-full flex flex-col gap-y-8 max-w-[50%]">
            <h3 className="font-bold text-3xl max-w-[900px] leading-tight uppercase">
              The increase of carbon dioxide (CO2) in the atmosphere
            </h3>
            <p className={`${inter.className} text-base font-extralight`}>
              Due to human activities, such as burning fossil fuels, this causes
              significant impacts on water and the water cycle. Below are some
              ways in which the increase in CO2 affects water.
            </p>
          </div>

          <div className="w-full flex flex-col gap-y-8 max-w-[50%] self-end">
            <h3 className="font-bold text-3xl max-w-[900px] leading-tight uppercase">
              Ocean Acidification
            </h3>
            <p className={`${inter.className} text-base font-extralight`}>
              Excess CO2 in the atmosphere is absorbed by the oceans, where it
              reacts with water to form carbonic acid. This leads to ocean
              acidification, making the waters more acidic. This can harm marine
              organisms, such as corals and mollusks, that have shells or
              skeletons made of calcium carbonate, as it makes it harder for
              them to build and maintain these structures.
            </p>
          </div>

          <div className="w-full flex flex-col gap-y-8 max-w-[50%]">
            <h3 className="font-bold text-3xl max-w-[900px] leading-tight uppercase">
              Water Heating
            </h3>
            <p className={`${inter.className} text-base font-extralight`}>
              The increase of CO2 in the atmosphere contributes to global
              warming, which also heats up ocean waters and affects marine
              ecosystems, including coral reefs and marine life.
            </p>
          </div>

          <div className="w-full flex flex-col gap-y-8 max-w-[50%] self-end">
            <h3 className="font-bold text-3xl max-w-[900px] leading-tight uppercase">
              Changes in the Hydrological Cycle
            </h3>
            <p className={`${inter.className} text-base font-extralight`}>
              The increase of CO2 in the atmosphere is associated with changes
              in precipitation patterns and the hydrological cycle. This can
              result in more severe droughts in some regions and intense
              rainfall in others.
            </p>
          </div>

          <div className="w-full flex flex-col gap-y-8 max-w-[50%]">
            <h3 className="font-bold text-3xl max-w-[900px] leading-tight uppercase">
              Melting of Glaciers
            </h3>
            <p className={`${inter.className} text-base font-extralight`}>
              The increase in temperatures due to the increase in CO2 is
              contributing to the melting of glaciers and polar ice caps, which
              in turn is raising sea levels and affecting coastal ecosystems.
            </p>
          </div>

          <div className="w-full flex flex-col gap-y-8 max-w-[50%] self-end">
            <h2 className="text-2xl uppercase font-bold">
              Therefore, the increase of carbon dioxide in the atmosphere plays
              a fundamental role in climate change and has significant impacts
              on water and aquatic ecosystems worldwide.
            </h2>
          </div>
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
