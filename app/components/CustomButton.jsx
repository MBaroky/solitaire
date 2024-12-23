import Link from "next/link";
import React from "react";
import { MoveUpRight } from "lucide-react";

function CustomButton({ url, text }) {
  return (
    <Link
      href={url}
      className='w-40 h-40 text-white
 flex items-center justify-center gap-3 rounded-full bg-gold'>
      {text ? text : "Read More"}
      <MoveUpRight />
    </Link>
  );
}

export default CustomButton;
