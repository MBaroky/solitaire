"use client";
import React, { useEffect, useState } from "react";
import { MapPin, MapPinIcon, MoveUpRight, Search, XCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";

function SearchBarLocation({ handler, data }) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get("q");
  const [inputValue, setValue] = useState(searchQuery);
  const handleClear = () => {
    setValue("");
  };
  const handleSearch = () => {
    if (inputValue) {
      handler(
        data?.filter(
          item =>
            item.address && item.address.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
      console.log(inputValue);
      console.log(data);
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
    <div className="flex-grow">
      <div
        className='flex flex-row items-stretch min-w-full'>
        <label
          className='bg-white border-0 items-center flex flex-row flex-grow gap-3  px-3'
          htmlFor=''>
          <input
            className='bg-transparent border-0 flex-grow outline-none'
            placeholder='Location'
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
          <MapPinIcon className="text-neutral-400" />
        </label>

      </div>
    </div>
  );
}

export default SearchBarLocation;
