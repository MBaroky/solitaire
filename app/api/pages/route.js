const pages = [
  { title: "Buy", url: "/" },
  { title: "Rent", url: "/" },
  { title: "Projects", url: "/" },
  { title: "Developers", url: "/" },
  { title: "Areas", url: "/" },
  { title: "Services", url: "/" },
  { title: "Blogs", url: "/" },
];

export async function GET(req, res) {
  return new Response(JSON.stringify(pages), {
    status: 200,
    // headers: { 'Set-Cookie': `token=${token.value}` },
  });
}
