import Link from "next/link";
import React from "react";
import { MoveUpRight } from "lucide-react";

function CustomButton({ url }) {
  return (
    <Link
      href={url}
      className='w-40 h-40 text-white
 flex items-center justify-center gap-3 rounded-full bg-gold'>
      Read More
      <MoveUpRight />
    </Link>
  );
}

export default CustomButton;
