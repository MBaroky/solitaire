
// seed.js
const { createClient } = require('edgedb');
const client = createClient();
const items = [
  {
    price: "35,000,000",
    excerpt:
      "Ultra-luxury waterfront villas with private beach access and panoramic views of the skyline",
    propertyArea: "Palm Jumeirah, Dubai",
    bedrooms: 6,
    bathrooms: 5,
    size: 15000,
    propertyType: "villa",
    contactInfo: "",
    images: ["1-01.webp", "1-02.webp", "1-03.webp"],
    buttons: [
      { text: "Book  A Viewing", url: "" },
      { text: "Call", url: "" },
      { text: "Message", url: "" },
    ],
  },
  {
    price: "25,000,000",
    excerpt:
      "Expansive villas with golf course views, landscaped gardens, and luxurious interiors.",
    area: "Emirates Hills, Dubai",
    bedrooms: 8,
    bathrooms: 6,
    size: 12000,
    type: "Apartment",
    contactInfo: "",
    images: ["2-01.webp", "2-02.webp", "2-03.webp"],
    buttons: [
      { text: "Book  A Viewing", url: "" },
      { text: "Call", url: "" },
      { text: "Message", url: "" },
    ],
  },
  {
    price: "7,500,000",
    excerpt:
      "Ultra-luxury waterfront villas with private beach access and panoramic views of the skyline",
    area: "Palm Jumeirah, Dubai",
    bedrooms: 5,
    bathrooms: 5,
    size: 8500,
    type: "villa",
    contactInfo: "",
    images: ["3-01.webp", "3-02.webp", "3-03.webp"],
    buttons: [
      { text: "Book  A Viewing", url: "" },
      { text: "Call", url: "" },
      { text: "Message", url: "" },
    ],
  },
];
async function seed(item) {

  const query = `
INSERT properties::SingleProperty{
    propertyType := (
      WITH existing_type := (
        SELECT properties::PropertyType
        FILTER properties::PropertyType.name = ${item.type.toLowerCase()}
      )
      SELECT (
        INSERT properties::PropertyType {name := ${item.type.toLowerCase()}}
        UNLESS CONFLICT ON .name
        ELSE (SELECT existing_type)
      )
    ),
    price:= ${parseInt(item.price)},
    excerpt:= ${item.excerpt},
    propertyArea := (
      WITH existing_area := (
        SELECT properties::PropertyArea
        FILTER properties::PropertyArea.name = ${item.area.toLowerCase()}
      )
      SELECT (
        INSERT properties::PropertyArea {name := ${item.area.toLowerCase()}}
        UNLESS CONFLICT ON .name
        ELSE (SELECT existing_area)
      )
    ),
    developer := (
      WITH existing_dev := (
        SELECT properties::developer
        FILTER properties::developer.name = "sodic"
      )
      SELECT (
        INSERT properties::developer { name := "sodic"}
        UNLESS CONFLICT ON .name
        ELSE (SELECT existing_dev)
      )
    ),
    lease:= 'Rent',
    size:= ${parseInt(item.size)},
    featured:=true,
    bedrooms:= ${item.bedrooms},
    bathrooms := ${item.bathrooms},
    buttons := {
    (insert properties::button{text:='Book  A Viewing', url:=''}),
    (insert properties::button{text:='Call', url:=''}),
    (insert properties::button{text:='Message', url:=''}),
    },
    images := {${item.images[0]}, ${item.images[1]}, ${item.images[2]}}
  };
`;

  try {
    await client.execute(query);
    console.log('Data inserted successfully');
  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    await client.close();
  }
}
items?.map(item => {

  seed(item);
})
