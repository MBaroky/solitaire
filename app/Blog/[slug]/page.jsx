import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default async function Page({ params }) {
  const slug = (await params).slug;
  const { default: Post, metadata } = await import(
    `@/posts/${slug}.mdx`
  );
  return (
    <div>
      <div className='w-full bg-background'>
        <div className='w-full max-w-container mx-auto px-8 py-5'>
          <Link className='text-dark flex flex-row' href={`/Blog`}>
            <MoveLeft /> Back
          </Link>
        </div>
      </div>
      <div className='w-full'>
        <div
          className='hero-bg bg-center bg-cover min-h-[30vw] before:bg-gradient-to-t before:from-dark before:from-30% before:to-transparent before:h-[60%] before:w-full before:absolute before:bottom-0 before:left-0 relative pt-[15vw] leading-loose flex flex-col justify-end'
          style={{
            backgroundImage: `url(/images/posts/${metadata.img})`,
          }}>
          <div className='w-full max-w-container mx-auto z-10 relative p-8 px-8'>
            <h3 className='text-heading-2 font-gerbil text-white'>
              {metadata.title}
            </h3>
          </div>
        </div>
        <div className='w-full max-w-container mx-auto p-8'>
          <div className='prose w-full max-w-full'>
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
}

export const dynamicParams = false;
