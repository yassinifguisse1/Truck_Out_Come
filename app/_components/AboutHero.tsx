import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const AboutHero = () => {
  return (
    <section className="relative container rounded-2xl  bg-gray-100 dark:bg-gray-100  overflow-hidden mt-32 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pb-8 bg-gray-100 dark:bg-gray-100  rounded-l-xl   sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-100 dark:text-gray-100   transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>


          <main className="mt-10 mx-auto max-w-7xl  sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28  ">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold font-mono text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  Digital Solutions for the
                </span>{" "}
                <span className="block text-violet-600 xl:inline">
                  Tracking Industry
                </span>
              </h1>
              <p className="mt-3 text-base font-mono text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Accelerate your online presence with our tailored web design,
                branding, and digital marketing services for trucking companies.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Link href="/" className="rounded-md shadow">
                  <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium font-mono rounded-md text-white bg-violet-600 hover:bg-violet-700 md:py-4 md:text-lg md:px-10">
                    Get started
                  </Button>
                </Link>

                <Link href="/" className="mt-3 sm:mt-0 sm:ml-3">
                  <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium font-mono rounded-md text-violet-700 bg-violet-100 hover:bg-violet-200 md:py-4 md:text-lg md:px-10">
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute hidden md:flex lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:h-full relative">
          <Image
            src="/warsaw.jpg"
            alt="Digital marketing for trucking industry"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutHero