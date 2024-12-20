export async function GET(req, res) {
  return new Response('"message":"Hello, Next.js!",', {
    status: 200,
    // headers: { 'Set-Cookie': `token=${token.value}` },
  });
}
