import { readdirSync } from "fs";
import { join } from "path";

export const POSTS_PATH = join(process.cwd(), "app/posts");
export const pathlist = readdirSync(POSTS_PATH);

export function generateStaticParams() {
  const paths = pathlist
    .map(path => path.replace(/\.mdx?$/, ""))
    .map(slug => ({ slug }));
  return paths;
}
