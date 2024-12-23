const endpoint = [
  {
    id: 1,
    image: "Twilight Urban Serenity.jpg",
    title: "Residential Sales & Leasing",
    desc: "From luxurious apartments to family homes, we help you find the perfect place that fits your lifestyle.",
    url: "",
  },
  {
    id: 2,
    image: "Serene Architectural Beauty by the Water 1.jpg",
    title: "Commercial Properties",
    desc: "Looking for a space to grow your business? Our team specializes in locating prime commercial properties to help businesses thrive.",
    url: "",
  },
  {
    id: 3,
    image: "Modern Luxury House at Twilight(1) 1.jpg",
    title: "Investment Consultancy",
    desc: "Discover profitable real estate investment opportunities with our strategic advice tailored to maximize returns.",
    url: "",
  },
  {
    id: 4,
    image:
      "Modern Architectural Residential Building with Palm Tree.jpg",
    title: "Property Management",
    desc: "Let us handle the day-to-day management of your property to ensure it remains in top condition and continues to yield returns.",
    url: "",
  },
];

export async function GET(req, res) {
  return new Response(JSON.stringify(endpoint), {
    status: 200,
    // headers: { 'Set-Cookie': `token=${token.value}` },
  });
}
