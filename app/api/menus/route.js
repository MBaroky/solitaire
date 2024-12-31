const menus = {
  mainMenu: [
    { title: "Buy", url: "/" },
    { title: "Rent", url: "/" },
    { title: "Projects", url: "/" },
    { title: "Developers", url: "/" },
    { title: "Areas", url: "/" },
    { title: "Services", url: "/" },
    { title: "Blogs", url: "/" },
    {
      title: "More",
      url: "",
      submenu: [
        { title: "About Us", url: "/About" },
        { title: "Meet the team", url: "/" },
        { title: "Careers", url: "/" },
        { title: "Our Awards", url: "/" },
        { title: "Contact us", url: "/" },
        { title: "Real estate guides", url: "/" },
        { title: "complaints procedure", url: "/" },
        { title: "philanthropy", url: "/" },
        { title: "testimonials", url: "/" },
      ],
    },
  ],
  footerMenu: [
    { title: "About Us", url: "/about" },
    { title: "Services", url: "/" },
  ],
};

export async function GET(req, res) {
  return new Response(JSON.stringify(menus), {
    status: 200,
    // headers: { 'Set-Cookie': `token=${token.value}` },
  });
}
