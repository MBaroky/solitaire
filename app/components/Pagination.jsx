import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { MoveLeft, MoveRight } from "lucide-react";

function Pagination({ perPage = 6, children, className }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginated, setPaginated] = useState({ children, perPage });
  // [x]: next and prev buttons on more than 3 pages
  // [x]: responsive perPage
  const handleClick = e => {
    setCurrentPage(e.target.value);
  };
  const nextPage = () => {
    setCurrentPage(parseInt(currentPage) + 1);
  };
  const prevPage = () => {
    setCurrentPage(parseInt(currentPage) - 1);
  };
  const handleChange = () => {};
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
        {paginated?.pages > 2 && currentPage > 1 ? (
          <li>
            <button
              onClick={prevPage}
              className='h-10 bg-gold text-white px-3'>
              <MoveLeft />
            </button>
          </li>
        ) : (
          ""
        )}
        {paginated.pages > 1 &&
          Array.from({ length: paginated.pages }).map((item, i) => (
            <li key={i} className=''>
              <input
                className='hidden peer'
                id={`radio-${i + 1}`}
                value={i + 1}
                type='radio'
                name='pagination'
                checked={parseInt(currentPage) === i + 1}
                onClick={handleClick}
                onChange={handleChange}
              />
              <label
                className='cursor-pointer bg-white aspect-square flex w-10 justify-center items-center border border-white peer-checked:border-gold'
                htmlFor={`radio-${i + 1}`}>
                {i + 1}
              </label>
            </li>
          ))}
        {paginated?.pages > 2 && currentPage < paginated.pages ? (
          <li>
            <button
              onClick={nextPage}
              className='h-10 bg-gold text-white px-3'>
              <MoveRight />
            </button>
          </li>
        ) : (
          ""
        )}
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
