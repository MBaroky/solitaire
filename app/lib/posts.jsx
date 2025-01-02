import { readdirSync } from "fs";
import { join } from "path";

export const POSTS_PATH = join(process.cwd(), "app/posts");

export const paths = readdirSync(POSTS_PATH);
export const params = paths
  .map(path => path.replace(/\.mdx?$/, ""))
  .map(slug => ({ slug: slug }));
