import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

function Social({ data }) {
  return (
    <ul className='flex flex-row gap-3'>
      {data &&
        Object.entries(data).map(([key, value]) => (
          <li key={key}>
            {/* <Link href={value}> */}
            <SocialIcon
              className='bg-gold rounded-full max-w-8 max-h-8'
              bgColor='transparent'
              network={key}
              url={value}
            />
            {/* </Link> */}
          </li>
        ))}
    </ul>
  );
}

export default Social;
