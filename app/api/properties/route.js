const endpoint = {
  message: "Hello, Next.js!",
};

export async function GET(req, res) {
  return new Response(JSON.stringify(endpoint), {
    status: 200,
    // headers: { 'Set-Cookie': `token=${token.value}` },
  });
}
