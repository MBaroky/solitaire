const contactInfo = {
  connections: {
    tel: "+971 56 905 4635",
    mailto: "solitaire@gmail.com",
  },
  address: "Box No. 44475, Dubai",
  social: {
    facebook: "#",
    x: "#",
    instagram: "#",
    youtube: "#",
  },
};

export async function GET(req, res) {
  return new Response(JSON.stringify(contactInfo), {
    status: 200,
    // headers: { 'Set-Cookie': `token=${token.value}` },
  });
}
