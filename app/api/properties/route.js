import { createClient } from 'edgedb';
const endpoint = [
  {
    id: 1,
    image: "Luxurious House with Infinity Pool at Sunrise_Sunset.jpg",
    address: "Dubsi, UAE",
    price: "400",
    offer: "",
    title: "Luxurious House with Infinity Pool at Sunrise_Sunset",
    desc: "",
    featured: true,
    size: "villa",
    lease: "Rent",
    timestamp: "",
  },
  {
    id: 2,
    image: "Luxurious Twilight Estate.jpg",
    address: "Dubsi, UAE",
    price: "400",
    offer: "",
    title: "Luxurious Twilight Estate",
    desc: "",
    featured: true,
    size: "villa",
    lease: "Rent",
    timestamp: "",
  },
  {
    id: 3,
    image: "Serenity Waters Luxury Villa.jpg",
    address: "Dubsi, UAE",
    price: "400",
    offer: "",
    title: "Serenity Waters Luxury Villa",
    desc: "",
    featured: true,
    size: "villa",
    lease: "Sell",
    timestamp: "",
  },
  {
    id: 4,
    image: "Serenity Waters Villa.jpg",
    address: "Dubsi, UAE",
    price: "400",
    offer: "",
    title: "Serenity Waters Villa",
    desc: "",
    featured: false,
    size: "villa",
    lease: "rent",
    timestamp: "",
  },
];



const client = createClient();
const items = await client.query(`\
  select properties::SingleProperty {
    price,
    propertyType: {name},
    lease,
    propertyArea:{name},
    developer:{name},
    size,
    excerpt,
    featured,
    bedrooms,
    bathrooms,
    images,

    buttons:{text, url},
 };`);

export async function GET(req, res) {
  return new Response(JSON.stringify(items), {
    status: 200,
    // headers: { 'Set-Cookie': `token=${token.value}` },
  });
}
