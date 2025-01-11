const menus = {
  mainMenu: [
    { title: "Buy", url: "/Buy" },
    { title: "Rent", url: "/Rent" },
    { title: "Projects", url: "/" },
    { title: "Developers", url: "/" },
    { title: "Areas", url: "/" },
    { title: "Services", url: "/Services" },
    { title: "Blogs", url: "/Blog" },
    {
      title: "More",
      url: "",
      submenu: [
        { title: "About Us", url: "/About" },
        { title: "Meet the team", url: "/" },
        { title: "Careers", url: "/" },
        { title: "Our Awards", url: "/" },
        { title: "Contact us", url: "/Contact" },
        { title: "Real estate guides", url: "/" },
        { title: "complaints procedure", url: "/" },
        { title: "philanthropy", url: "/" },
        { title: "testimonials", url: "/" },
      ],
    },
  ],
  footerMenu: [
    { title: "About Us", url: "/About" },
    { title: "Services", url: "/Services" },
  ],
};

export async function GET(req, res) {
  return new Response(JSON.stringify(menus), {
    status: 200,
    // headers: { 'Set-Cookie': `token=${token.value}` },
  });
}
