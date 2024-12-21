const pages = [
  { title: "Projects", number: "250+" },
  { title: "Multifamily Projects", number: "30+" },
  { title: "Homes and Lots Delivered", number: "5000+" },
  { title: "Retail Developments", number: "30+" },
];

export async function GET(req, res) {
  return new Response(JSON.stringify(pages), {
    status: 200,
    // headers: { 'Set-Cookie': `token=${token.value}` },
  });
}
