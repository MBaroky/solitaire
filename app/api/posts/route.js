import { pathlist } from "@/lib/posts";

const postsPaths = pathlist;
let endpoint = [];
postsPaths.map(async path => {
  try {
    let { metadata } = await import(`@/posts/${path}`);
    endpoint = [metadata, ...endpoint];
  } catch {
    return;
  }
});
console.log(endpoint);

// const endpoint = [
//   {
//     post_id: 1,
//     image: "post-1.jpeg",
//     title: "Investing in Your Future with Real Estate",
//     desc: "Discover the potential of real estate investments. Learn how Solitaire Crest...",
//     slug: "",
//   },
//   {
//     post_id: 2,
//     image: "post-2.jpeg",
//     title: "Navigating the Real Estate Market",
//     desc: "Stay informed with expert insights on market trends, property values, and...",
//     url: "",
//   },
//   {
//     post_id: 3,
//     image: "post-3.jpeg",
//     title: "Maximizing Value in Property Investments",
//     desc: "Explore strategies to increase property value and maximize your investments...",
//     url: "",
//   },
//   {
//     post_id: 4,
//     image: "post-4.jpeg",
//     title: "Homebuyer’s Guide: From Dream to Reality",
//     desc: "Take the first steps in your homebuying journey with our in-depth guides, tips...",
//     url: "",
//   },
//   {
//     post_id: 5,
//     image: "post-5.jpeg",
//     title: "Building Your Real Estate Portfolio",
//     desc: "Whether you're a first-time investor or a seasoned pro, our tips on building a...",
//     url: "",
//   },
//   {
//     post_id: 6,
//     image: "post-6.jpeg",
//     title: "Spotlight on Neighborhoods: Finding Your Ideal Location",
//     desc: "Renowned for high-quality Explore in-depth profiles of prime neighborhoods...",
//     url: "",
//   },
// ];

export async function GET(req, res) {
  return new Response(JSON.stringify(endpoint), {
    status: 200,
    // headers: { 'Set-Cookie': `token=${token.value}` },
  });
}
