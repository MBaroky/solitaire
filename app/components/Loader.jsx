import { LoaderCircle } from "lucide-react";
import React from "react";

function Loader() {
  return (
    <LoaderCircle className='animate-spin repeat-infinite w-20 mx-auto' />
  );
}

export default Loader;
