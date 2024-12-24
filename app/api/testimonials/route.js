const endpoint = [
  {
    id: 1,
    image: "**client image goes here",
    building: "Modern Tropical Home 1.jpg",
    title: "A Seamless First Home Purchase",
    name: "Ahmed Al Mansouri",
    message:
      "As a first-time buyer, I was unsure about the process of purchasing a home. The team at Solitaire guided me through each step, ensuring everything was transparent and straightforward. Thanks to their support, I’m now the proud owner of my dream apartment in Dubai Marina.",
  },
  {
    id: 2,
    image: "**client image goes here",
    building: "Modern Tropical Home 1.jpg",
    title: "A Seamless First Home Purchase",
    name: "Ahmed Al Mansouri",
    message:
      "As a first-time buyer, I was unsure about the process of purchasing a home. The team at Solitaire guided me through each step, ensuring everything was transparent and straightforward. Thanks to their support, I’m now the proud owner of my dream apartment in Dubai Marina.",
  },
];

export async function GET(req, res) {
  return new Response(JSON.stringify(endpoint), {
    status: 200,
    // headers: { 'Set-Cookie': `token=${token.value}` },
  });
}
