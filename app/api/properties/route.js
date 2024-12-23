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
    title: "",
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

export async function GET(req, res) {
  return new Response(JSON.stringify(endpoint), {
    status: 200,
    // headers: { 'Set-Cookie': `token=${token.value}` },
  });
}
