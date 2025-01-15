// queries.js
const insertUserQuery = (lease = 'Rent', type = "Apartment", price, excerpt, area, size, developer, featured, bedrooms, bathrooms, urls = ['', '', ''], images = ['', '', '']) => `

INSERT properties::SingleProperty{
    propertyType := (
      WITH existing_type := (
        SELECT properties::PropertyType
        FILTER properties::PropertyType.name = '${type.toLocaleLowerCase()}'
      )
      SELECT (
        INSERT properties::PropertyType {name := '${type.toLocaleLowerCase()}'}
        UNLESS CONFLICT ON .name
        ELSE (SELECT existing_type)
      )
    ),
    price:= ${parseInt(price.replace(/,/g, ''))},
    excerpt:= '${excerpt}',
    propertyArea := (
      WITH existing_area := (
        SELECT properties::PropertyArea
        FILTER properties::PropertyArea.name = '${area.toLocaleLowerCase()}'
      )
      SELECT (
        INSERT properties::PropertyArea {name := '${area.toLocaleLowerCase()}'}
        UNLESS CONFLICT ON .name
        ELSE (SELECT existing_area)
      )
    ),
    developer := (
      WITH existing_dev := (
        SELECT properties::developer
        FILTER properties::developer.name = '${developer.toLocaleLowerCase()}'
      )
      SELECT (
        INSERT properties::developer { name := '${developer.toLocaleLowerCase()}'}
        UNLESS CONFLICT ON .name
        ELSE (SELECT existing_dev)
      )
    ),
    lease:= '${lease.toLocaleLowerCase()}',
    size:= ${parseInt(size.replace(/,/g, ''))},
    featured:= ${featured},
    bedrooms:= ${parseInt(bedrooms)},
    bathrooms := ${parseInt(bathrooms)},
    buttons := {
    (insert properties::button{text:='Book  A Viewing', url:='${urls[0]}'}),
    (insert properties::button{text:='Call', url:='${urls[1]}'}),
    (insert properties::button{text:='Message', url:='${urls[2]}'}),
    },
    images := {'${images[0]}', '${images[1]}', '${images[2]}'}
  };
`;

module.exports = {
  insertUserQuery,
};
