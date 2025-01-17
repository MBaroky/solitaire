"use client";
import React, { useEffect, useState } from "react";
import { MoveUpRight, Search, XCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";

function SearchBar({ handler, data }) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get("q");
  const [inputValue, setValue] = useState(searchQuery);
  const handleClear = () => {
    setValue("");
  };
  const handleSearch = () => {
    const convertToString = value => { if (typeof value === 'object' && value !== null) { return JSON.stringify(value); } return value.toString(); };
    if (inputValue) {
      handler(
        data.filter(
          item =>
            Object.values(item).some(value => convertToString(value).toLowerCase().includes(inputValue.toLowerCase()))
        )
      );
    } else {
      handler(data);
    }
  };
  useEffect(() => {
    handleSearch();
  }, [inputValue, data]);

  //   using query
  useEffect(() => {
    if (searchQuery) {
      setValue(searchQuery);
    }
    handleSearch();
  }, []);

  // when press enter
  const handleKeyPress = event => {
    if (event.key === "Enter") return handleSearch();
  };
  // while typing
  const handleChange = event => {
    const inputValue = event.target.value;

    setValue(inputValue);
  };
  return (
    <div>
      <div
        // action=''
        className='flex flex-row py-5 items-stretch min-w-full'>
        <label
          className='bg-white border-0 items-center flex flex-row flex-grow gap-3 px-3'
          htmlFor=''>
          <Search />
          <input
            className='bg-transparent border-0 flex-grow outline-none'
            placeholder='Search'
            type='text'
            name='key'
            value={ inputValue || "" }
            onChange={ handleChange }
            onKeyDown={ handleKeyPress }
          />
          { inputValue?.length > 0 && (
            <XCircle
              className='text-neutral-300 cursor-pointer'
              onClick={ handleClear }
            />
          ) }
        </label>
        <button
          type='submit'
          className='bg-gold aspect-square p-2 text-white'>
          <MoveUpRight />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
