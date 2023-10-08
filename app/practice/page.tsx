'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';

import { useState } from 'react';
import { toast } from 'react-toastify';

import questions from './questions.json';

const inter = Inter({ subsets: ['latin'] });

export default function Practice() {
  const [question, setQuestion] = useState(questions[0]);
  const [water, setWater] = useState(100);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  if (water === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between px-[120px] py-[60px] bg-[url('/ocean-background.png')] bg-center bg-no-repeat bg-cover w-full">
        <div className="flex flex-col z-10 w-full items-center justify-between text-sm bg-white/10 backdrop-blur-sm rounded-lg pt-5 px-20 pb-20 gap-8 h-full">
          <div className="gap-10 flex items-center justify-between fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:bg-none font-bold">
            <Link
              href="/"
              className="text-2xl uppercase pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acqualingo
            </Link>

            <p className={`${inter.className} uppercase text-xl`}>
              {correctAnswers} <span className="text-[#0ACF83]">correct</span>{' '}
              answer(s)
            </p>
            <p className={`${inter.className} uppercase text-xl`}>
              <span className="text-[#5DD2CE]">{water.toFixed()}</span>% of
              water resource
            </p>
          </div>
          <h1 className="font-bold text-6xl max-w-[900px] leading-tight uppercase">
            You&apos;re <span className="text-[#FF7262]">out</span> of water!
          </h1>
          <hr className="w-full opacity-50" />
          <span className="text-lg">
            Even though you did not succeed this time, you can always go back,
            learn from our content and try again.
          </span>
          <Link
            href="/"
            className={`${inter.className} text-sm justify-center flex uppercase w-[25%] text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-[#] font-medium rounded-full shadow px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200`}
          >
            Try Again
          </Link>
        </div>
      </main>
    );
  }

  if (answeredQuestions === questions.length) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between px-[120px] py-[60px] bg-[url('/ocean-background.png')] bg-center bg-no-repeat bg-cover w-full">
        <div className="flex flex-col z-10 w-full items-center justify-between text-sm bg-white/10 backdrop-blur-sm rounded-lg pt-5 px-20 pb-20 gap-8 h-full">
          <div className="gap-10 flex items-center justify-between fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:bg-none font-bold">
            <Link
              href="/"
              className="text-2xl uppercase pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acqualingo
            </Link>

            <p className={`${inter.className} uppercase text-xl`}>
              {correctAnswers} <span className="text-[#0ACF83]">correct</span>{' '}
              answer(s)
            </p>
          </div>
          <h1 className="font-bold text-6xl max-w-[900px] leading-tight uppercase">
            Congratulations!
          </h1>
          <p className={`${inter.className} text-xl`}>
            You have answered all questions and saved{' '}
            <span className="text-[#5DD2CE]">{water.toFixed()}</span>% of the
            water resources with the knowledge you have acquired.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-[120px] py-[60px] bg-[url('/ocean-background.png')] bg-center bg-no-repeat bg-cover w-full">
      <div className="flex flex-col z-10 w-full items-center justify-between text-sm bg-white/10 backdrop-blur-sm rounded-lg pt-5 px-20 pb-20 gap-8 h-full">
        <div className="gap-10 flex items-center justify-between fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:bg-none font-bold">
          <Link
            href="/"
            className="text-2xl uppercase pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acqualingo
          </Link>
          <p className={`${inter.className} uppercase text-xl`}>
            <span className="text-[#5DD2CE]">{water.toFixed()}</span>% of water
            resources
          </p>
          <span className="uppercase">
            Question {question.id}/{questions.length}
          </span>
        </div>

        <div className="w-full flex flex-col gap-y-8 max-w-[900px]">
          <h1 className="font-bold text-4xl max-w-[900px] leading-tight uppercase">
            {question.question}
          </h1>
          <div className="grid grid-flow-col auto-cols gap-12">
            {question.options.map(({ label, value }, index) => (
              <button
                key={label}
                className={`${inter.className} text-sm justify-center flex w-fit text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-[#] font-medium rounded-lg shadow px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200`}
                onClick={() => {
                  if (value) {
                    toast('Correct!', {
                      type: 'success',
                      autoClose: 3000,
                    });
                    setCorrectAnswers(
                      (prevCorrectAnswers) => prevCorrectAnswers + 1
                    );
                  } else {
                    // If final amount after subtraction is less than 0, set to 0
                    if (water - 100 / questions.length < 0) {
                      setWater(0);
                    } else {
                      setWater(
                        (prevWater) => prevWater - 100 / questions.length
                      );
                    }

                    toast('Wrong! You lost some water.', {
                      type: 'error',
                      autoClose: 3000,
                    });
                  }

                  setAnsweredQuestions(
                    (prevAnsweredQuestions) => prevAnsweredQuestions + 1
                  );
                  setQuestion(questions[answeredQuestions + 1]);
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
