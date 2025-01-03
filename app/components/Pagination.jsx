import React, { useEffect, useState } from "react";
import Loader from "./Loader";

function Pagination({ perPage = 6, children, className }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginated, setPaginated] = useState({ children, perPage });
  // TODO: next and prev buttons on more than 3 pages
  // TODO: responsive perPage
  const handleClick = e => {
    setCurrentPage(e.target.value);
  };
  useEffect(() => {
    const pages = Math.ceil(children.length / perPage);
    const content = children;
    if (pages < 2) {
      setCurrentPage(1); // reset current
    }
    setPaginated({
      pages,
      content,
    });
    // console.log(paginated);
    // console.log(currentPage);
  }, [children]);
  return (
    <>
      <PaginationWrapper className={className}>
        {paginated.content ? (
          paginated.content.filter(
            (item, i) =>
              i < currentPage * perPage && // page 2 : i < 12
              i + 1 > currentPage * perPage - perPage // page 2 : i + 1  >  6
          )
        ) : (
          <Loader />
        )}
      </PaginationWrapper>

      <ul
        id='buttons'
        className='flex flex-row justify-center items-stretch gap-3 py-3'>
        {paginated.pages > 1 &&
          Array.from({ length: paginated.pages }).map((item, i) => (
            <li key={i} className=''>
              <input
                className='hidden peer'
                id={`radio-${i + 1}`}
                value={i + 1}
                type='radio'
                name='pagination'
                defaultChecked={parseInt(currentPage) === i + 1}
                onClick={handleClick}
              />
              <label
                className='cursor-pointer bg-white aspect-square flex w-10 justify-center items-center border border-white peer-checked:border-gold'
                htmlFor={`radio-${i + 1}`}>
                {i + 1}
              </label>
            </li>
          ))}
      </ul>
    </>
  );
}

export function PaginationItem({ children }) {
  return <li className='border border-l-neutral-300'>{children}</li>;
}

export function PaginationWrapper({ children, className }) {
  return <ul className={className}>{children}</ul>;
}

export default Pagination;
