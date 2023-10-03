import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({
  className,
  isLoad,
  setLoad,
  setRepoConfig,
  repoConfig,
  repos,
}) => {

  const [pageCache, setPageCache] = useState({});

  useEffect(() => {
    if (!pageCache[repoConfig.page]) {
      setLoad(true);
    }
  }, [repoConfig.page]);

  const handlePageChange = (page) => {
    if (!pageCache[page]) {
      setLoad(true);
      setRepoConfig({
        ...repoConfig,
        page
      });
    } else {
      setRepoConfig({
        ...repoConfig,
        page  
      });
    }
  }

  const cachePage = () => {
    setPageCache(prev => ({
      ...prev,
      [repoConfig.page]: repos
    }));
  }

  useEffect(() => {
    if (isLoad) {
      cachePage();
    }
  }, [isLoad]);
  const handlePrevPage = () => {
    const prevPage = repoConfig.page - 1;
    if (prevPage >= 1 && pageCache[prevPage]) {
      setRepoConfig(prev => ({
        ...prev,
        page: prevPage  
      }));
    } else {
      handlePageChange(prevPage);
    }
  };

   const handleNextPage = () => {
    const nextPage = repoConfig.page + 1;
    if (nextPage <= 4 && pageCache[nextPage]) {
      setRepoConfig(prev => ({
        ...prev,
        page: nextPage
      }));
    } else {
      handlePageChange(nextPage);
    }
  };
  return (
    <div className={`${className} flex w-full mr-3 mb-3 space-x-2 justify-end text-xs`}>
      {/* prev button */}
      <button 
        disabled={repoConfig.page === 1}
        onClick={handlePrevPage}
        className={`${repoConfig.page === 1 ? 'opacity-10' : ''}`}  
      >
        <FaChevronLeft size={12} /> 
      </button>
      {/* page buttons */}
      {[1,2,3,4].map(page => (
        <button 
          key={page}
          onClick={() => handlePageChange(page)}
          className="inline-flex items-center w-5 h-5 md:h-6 md:w-6 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none"
        >
          {page}
        </button>
      ))}
      
      {/* next button */}
      <button
        disabled={repoConfig.page === 4}
        onClick={handleNextPage} 
        className={`${repoConfig.page === 4 ? 'opacity-10' : ''}`}
      >
        <FaChevronRight size={12} />
      </button>
    </div>
  );
}

export default Pagination