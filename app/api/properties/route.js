const endpoint = [
  {
    image: "",
    address: "Dubsi, UAE",
    price: "400",
    offer: "",
    title: "",
    desc: "",
    featured: true,
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
