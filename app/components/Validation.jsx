import React from "react";

function Validation({ message }) {
  return (
    <span
      className={`mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block`}>
      {message}.
    </span>
  );
}

export default Validation;
