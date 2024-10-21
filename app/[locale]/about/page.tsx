import AboutHero from "@/app/_components/AboutHero";
import { Link } from "@/i18n/routing";
import { Globe, Megaphone, Palette, PhoneCall } from "lucide-react";
import React from "react";
import Image from 'next/image'


const page = () => {
  return (
    <div className="min-h-screen ">
      <AboutHero />
      {/* Our Story Section */}
      <section className="py-16 px-4 md:px-0 bg-gray-100 dark:bg-gray-100 mt-8 container relative overflow-hidden  rounded-2xl">
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl font-semibold text-center mb-8 font-mono text-black ">Our Story</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 ">
            <div className="md:w-1/2">
              <Image
                src="/teams.jpg"
                width={500}
                height={300}
                alt="Our digital agency team at work"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg font-mono mb-4 text-black font-semibold">
                Our journey began when we recognized a gap in the digital
                landscape for the trucking industry. We saw the potential to
                help trucking companies elevate their online presence and reach
                their target audience more effectively.
              </p>
              <p className="text-lg font-mono text-black font-semibold">
                Today, we're committed to providing top-tier digital solutions
                tailored specifically for the trucking sector. Our expertise in
                web design, digital marketing, and branding allows us to drive
                real results for our clients in this unique industry.
              </p>
            </div>
          </div>
        </div>
        {/* Decorative Shape */}
        <svg
          className="absolute z-0 top-0 right-0 -mt-20 -mr-20 text-violet-100 dark:text-violet-900 opacity-50 lg:opacity-100"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="de316486-4a29-4312-bdfc-fbce2132a2c1"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" className="text-violet-200 dark:text-violet-700" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
        </svg>
      </section>

      {/* Our Mission Section */}
      <section className="py-16  bg-gray-100 dark:bg-gray-100 container rounded-2xl mt-8 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-0 relative z-10 ">
          <h2 className="text-3xl font-semibold text-center text-black mb-12">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className=" p-6 rounded-lg shadow-md">
              <Globe className="w-12 h-12 text-violet-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Digital Transformation
              </h3>
              <p className="text-gray-700">
                Empowering trucking companies with cutting-edge digital
                solutions to thrive in the modern marketplace.
              </p>
            </div>
            <div className=" p-6 rounded-lg shadow-md">
              <Megaphone className="w-12 h-12 text-violet-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Industry-Focused Marketing
              </h3>
              <p className="text-gray-700">
                Crafting targeted marketing strategies that resonate with the
                unique audience in the trucking sector.
              </p>
            </div>
            <div className=" p-6 rounded-lg shadow-md">
              <Palette className="w-12 h-12 text-violet-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">Brand Excellence</h3>
              <p className="text-gray-700">
                Developing strong, memorable brands that stand out in the
                competitive trucking industry.
              </p>
            </div>
          </div>
             {/* Decorative Shape */}

          <svg
            className="absolute -bottom-12 md:-bottom-6 -right-24 md:-right-32  w-full h-full md:h-64 text-violet-100 dark:text-violet-900 transform translate-y-1/2"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillOpacity="0.2"
              d="M0,224L60,229.3C120,235,240,245,360,234.7C480,224,600,192,720,181.3C840,171,960,181,1080,192C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              fill="currentColor"
            />
            <path
              fillOpacity="0.4"
              d="M0,288L60,261.3C120,235,240,181,360,181.3C480,181,600,235,720,234.7C840,235,960,181,1080,170.7C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              fill="currentColor"
            />
            <path
              fillOpacity="0.6"
              d="M0,256L60,261.3C120,267,240,277,360,261.3C480,245,600,203,720,197.3C840,192,960,224,1080,213.3C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              fill="currentColor"
            />
          </svg>
        </div>
        
        
      </section>

      {/* Our Services Section */}
      <section className="py-16 px-4 md:px-0 bg-gray-100 z-30 dark:bg-gray-100 mt-8 container rounded-2xl relative overflow-hidden">
        <div className="container mx-auto relative z-0">
          <h2 className="text-3xl text-black font-mono font-semibold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8  relative z-30 ">
            <div className="p-6 rounded-lg shadow-md relative z-10 bg-gray-100 dark:bg-gray-100">
              <h3 className="text-xl text-black font-mono font-semibold mb-4">
                Website Design & Development
              </h3>
              <p className="text-gray-700 font-mono">
                Creating responsive, user-friendly websites that showcase your
                trucking services and drive conversions.
              </p>
            </div>
            <div className=" p-6 rounded-lg shadow-md relative z-10  bg-gray-100 dark:bg-gray-100">
              <h3 className="text-xl text-black font-mono font-semibold mb-4">
                Digital Advertising
              </h3>
              <p className="text-gray-700 font-mono">
                Crafting targeted ad campaigns to reach potential clients and
                grow your trucking business.
              </p>
            </div>
            <div className=" p-6 rounded-lg shadow-md font-mono relative z-10  bg-gray-100 dark:bg-gray-100">
              <h3 className="text-xl text-black font-semibold mb-4">
                Branding & Identity
              </h3>
              <p className="text-gray-700 font-mono">
                Developing unique brand identities that set your trucking
                company apart from the competition.
              </p>
            </div>
            <div className=" p-6 rounded-lg shadow-md relative z-10  bg-gray-100 dark:bg-gray-100">
              <h3 className="text-xl text-black font-semibold mb-4 font-mono">Content Marketing</h3>
              <p className="text-gray-700">
                Creating engaging, industry-specific content that establishes
                your expertise in the trucking sector.
              </p>
            </div>
          </div>
          <svg
            className="absolute top-0 right-0  text-violet-300 dark:text-violet-800 opacity-20 lg:opacity-100 transform rotate-180"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M47.5,-67.2C55.9,-59.3,53.2,-37.9,56.7,-20.1C60.2,-2.3,69.9,11.8,70.8,27.3C71.7,42.9,63.8,59.9,50.6,64.4C37.4,68.9,18.7,60.8,0.6,59.9C-17.5,59.1,-35,65.5,-45.7,60.1C-56.4,54.7,-60.4,37.5,-65.8,20.1C-71.1,2.7,-77.9,-14.9,-73.4,-28.4C-68.9,-41.9,-53.2,-51.4,-38.5,-57.9C-23.8,-64.4,-11.9,-67.9,4.3,-73.8C20.5,-79.7,41.1,-88,47.5,-67.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-violet-600 text-white mt-8 container rounded-2xl relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-0 text-center relative z-10">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Accelerate Your Online Presence?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to learn how we can transform your trucking
            company's digital strategy.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-violet-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            <PhoneCall className="w-5 h-5 mr-2" />
            Get in Touch
          </Link>
        </div>
        
      </section>
    </div>
  );
};

export default page;
