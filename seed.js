
// seed.js
const { createClient } = require('edgedb');
const client = createClient();

async function seed() {
  const query = `
INSERT properties::SingleProperty{
    propertyType := (
      WITH existing_type := (
        SELECT properties::PropertyType
        FILTER properties::PropertyType.name = "Apartment"
      )
      SELECT (
        INSERT properties::PropertyType {name := "Apartment"}
        UNLESS CONFLICT ON .name
        ELSE (SELECT existing_type)
      )
    ),
    price:= 25000000,
    excerpt:= 'Expansive villas with golf course views, landscaped gardens, and luxurious interiors.',
    propertyArea := (
      WITH existing_area := (
        SELECT properties::PropertyArea
        FILTER properties::PropertyArea.name = "Emirates Hills, Dubai"
      )
      SELECT (
        INSERT properties::PropertyArea {name := "Emirates Hills, Dubai"}
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
    size:= 12000,
    featured:=true,
    bedrooms:= 8,
    bathrooms := 5,
    buttons := {
    (insert properties::button{text:='Book  A Viewing', url:=''}),
    (insert properties::button{text:='Call', url:=''}),
    (insert properties::button{text:='Message', url:=''}),
    },
    images := {"2-01.webp", "2-02.webp", "2-03.webp"}
  };
`; try { await client.execute(query); console.log('Data inserted successfully'); } catch (err) { console.error('Error inserting data:', err); } finally { await client.close(); }}
seed();
