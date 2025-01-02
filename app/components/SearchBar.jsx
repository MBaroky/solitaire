"use client";
import React, { useEffect, useState } from "react";
import { MoveUpRight, Search } from "lucide-react";
import { useSearchParams } from "next/navigation";

function SearchBar({ handler, data }) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get("q");
  const [inputValue, setValue] = useState(searchQuery);

  const handleSearch = () => {
    if (inputValue) {
      handler(
        data.filter(
          post =>
            post.title
              .toLowerCase()
              .includes(inputValue.toLowerCase()) ||
            post.excerpt
              .toLowerCase()
              .includes(inputValue.toLowerCase())
        )
      );
    } else {
      handler(data);
    }
  };
  useEffect(() => {
    handleSearch();
  }, [inputValue]);

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
            value={inputValue || ""}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
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
