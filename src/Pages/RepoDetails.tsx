import { useState } from 'react';
import logo from '../assests/a.png';
const RepoDetails = ({ repoToViewIndex, setViewer, repos }) => {
  const { name } = repos[repoToViewIndex];
  const [activeItem, setActiveItem] = useState(1)
  return (
    <>
      <h1 onClick={() => { setViewer(false) }}>close {name}</h1>

      <div id="custom-controls-gallery" className="relative w-full" data-carousel="slide">
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {[1, 2, 3, 4].map((i) => <div className={`${i === activeItem ? "" : 'hidden'} duration-700 ease-in-out`} data-carousel-item>
            <img src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${i}.jpg`} className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
          </div>)}

        </div>
        <div className="flex justify-center items-center pt-4">
          <button onClick={() => setActiveItem(activeItem - 1)} type="button" className="flex justify-center items-center mr-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button onClick={() => setActiveItem(activeItem + 1)} type="button" className="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>

    </>
  );
};

export default RepoDetails;
