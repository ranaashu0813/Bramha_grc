import React from "react";
import "./About.css";

const Container = () => {
  return (
    <>

<div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">

  <div data-theme="teal" className="mx-auto max-w-6xl">
    <h2 className="sr-only">Featured case study</h2>
    <section className="font-sans text-black">
      <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
        <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
          <div className="h-full">
            <article className="h-full">
              <div className="h-full">
                <img className="h-full object-cover"
                 src="/12.jpg" width="733" height="412" alt='""' typeof="foaf:Image" />
              </div>
            </article>
          </div>
        </div>
        <div className="p-6 bg-grey">
          <div className="leading-relaxed">
            <h2 className="leading-tight text-4xl font-bold about_className">About Brahma GRC Creation</h2>
            <p className="mt-4">At Brahma GRC Creation, <span classNameName="text-blue-700">we specialize </span> 
           in transforming architectural visions into timeless creations..</p>
            <p className="mt-4">With a strong commitment to craftsmanship, innovation, and design precision, we offer comprehensive 
              solutions in the manufacturing and installation of high-quality Glass Fiber Reinforced Concrete (GRC) products.</p>
            <p><a className="mt-4 button button--secondary" href="https://inviqa.com/cxcon-experience-transformation">Explore this event</a></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>


<div className="bg-white dark:bg-gray-800 h-screen py-6 sm:py-8 lg:py-12 gallery_grc">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
                <h2 className="text-2xl font-bold text-violet-800 about_className">Gallery</h2>

                <p className="hidden max-w-screen-sm text-black-700  md:block">
Each piece we create blends aesthetics with durability, making it ideal for modern constructions, heritage restorations,
 and ornamental architecture. From conceptual design to on-site fitting, our skilled team ensures precision and quality at every step.

Whether you're an architect, builder, or homeowner, Brahma GRC Creation is your trusted partner for turning 
architectural elements into lasting impressions.
                </p>
            </div>

            <a href="#"
                className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
                More
            </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
    
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="/scroll_image/image_s_1.jpg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">JAALI</span>
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="/scroll_image/image_s_2.jpg" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">BALUSTERS</span>
            </a>
     
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg
                 bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="/scroll_image/image_s_3.jpg" loading="lazy" alt="Photo by Martin Sanchez" 
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 
                group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">WALL PANELS</span>
            </a>
          
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="/scroll_image/image_s_4.jpg" 
                loading="lazy" alt="Photo by Lorenzo Herrera"
                 className="absolute inset-0 h-full w-full object-cover object-center 
                 transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Brackets and statue</span>
            </a>
       
        </div>
    </div>
</div>


{/* this is new section of the page */}


    </>
  );
};

export default Container;