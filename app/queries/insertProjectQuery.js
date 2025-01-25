// queries.js
const insertProjectQuery = ( type = "Apartment", price, excerpt, area, size, developer, featured, bedrooms, bathrooms, urls = ['', '', ''], images = ['', '', ''], tags, date = 2024, title="") => `

INSERT properties::Project{
    propertyType := (
      WITH existing_type := (
        SELECT properties::PropertyType
        FILTER properties::PropertyType.name = '${type.toLowerCase()}'
      )
      SELECT (
        INSERT properties::PropertyType {name := '${type.toLowerCase()}'}
        UNLESS CONFLICT ON .name
        ELSE (SELECT existing_type)
      )
    ),
    price:= ${parseInt(price.replace(/,/g, ''))},
    excerpt:= '${excerpt}',
    propertyArea := (
      WITH existing_area := (
        SELECT properties::PropertyArea
        FILTER properties::PropertyArea.name = '${area.toLowerCase()}'
      )
      SELECT (
        INSERT properties::PropertyArea {name := '${area.toLowerCase()}'}
        UNLESS CONFLICT ON .name
        ELSE (SELECT existing_area)
      )
    ),
    developer := (
      WITH existing_dev := (
        SELECT properties::developer
        FILTER properties::developer.name = '${developer.toLowerCase()}'
      )
      SELECT (
        INSERT properties::developer { name := '${developer.toLowerCase()}'}
        UNLESS CONFLICT ON .name
        ELSE (SELECT existing_dev)
      )
    ),
    size:= ${parseInt(size.replace(/,/g, ''))},
    featured:= ${featured},
    bedrooms:= ${parseInt(bedrooms)},
    bathrooms := ${parseInt(bathrooms)},
    buttons := {
    (insert properties::button{text:='Call', url:='${urls[0]}'}),
    (insert properties::button{text:='Message', url:='${urls[1]}'}),
    },
    images := array_unpack([${images.map(image => `'${image}'`).join(', ')}]),
    title:= '${title}',
    date:= ${parseInt(date)},

    tags := (
      FOR tag IN (DISTINCT {${tags.map(tag => `'${tag.toLowerCase()}'`).join(', ')}})
      UNION (
        WITH existing_tag := (
          SELECT properties::tag
          FILTER properties::tag.name = tag
        )
        SELECT (
          INSERT properties::tag {name := tag}
          UNLESS CONFLICT ON .name
          ELSE (SELECT existing_tag)
        )
      )
    )
  };
`;

module.exports = {
  insertProjectQuery,
};
