// queries.js
const insertUserQuery = () => `

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
    images := {"1-01.webp", "1-02.webp", "1-03.webp"}
  };
  INSERT properties::SingleProperty{
    propertyType := (
      WITH existing_type := (
        SELECT properties::PropertyType
        FILTER properties::PropertyType.name = "Villa"
      )
      SELECT (
        INSERT properties::PropertyType {name := "Villa"}
        UNLESS CONFLICT ON .name
        ELSE (SELECT existing_type)
      )
    ),
    price:= 35000000,
    excerpt:= 'Ultra-luxury waterfront villas with private beach access and panoramic views of the skyline',
    propertyArea := (
      WITH existing_area := (
        SELECT properties::PropertyArea
        FILTER properties::PropertyArea.name = "Palm Jumeirah, Dubai"
      )
      SELECT (
        INSERT properties::PropertyArea {name := "Palm Jumeirah, Dubai"}
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
    size:= 15000,
    featured:=true,
    bedrooms:= 5,
    bathrooms := 3,
    buttons := {
    (insert properties::button{text:='Book  A Viewing', url:=''}),
    (insert properties::button{text:='Call', url:=''}),
    (insert properties::button{text:='Message', url:=''}),
    },
    images := {"2-01.webp", "2-02.webp", "2-03.webp"}
  };
  INSERT properties::SingleProperty{
    propertyType := (
      WITH existing_type := (
        SELECT properties::PropertyType
        FILTER properties::PropertyType.name = "Villa"
      )
      SELECT (
        INSERT properties::PropertyType {name := "Villa"}
        UNLESS CONFLICT ON .name
        ELSE (SELECT existing_type)
      )
    ),
    price:= 7500000,
    excerpt:= 'Ultra-luxury waterfront villas with private beach access and panoramic views of the skyline.',
    propertyArea := (
      WITH existing_area := (
        SELECT properties::PropertyArea
        FILTER properties::PropertyArea.name = "Palm Jumeirah, Dubai"
      )
      SELECT (
        INSERT properties::PropertyArea {name := "Palm Jumeirah, Dubai"}
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
    size:= 8500,
    featured:=true,
    bedrooms:= 5,
    bathrooms := 2,
    buttons := {
    (insert properties::button{text:='Book  A Viewing', url:=''}),
    (insert properties::button{text:='Call', url:=''}),
    (insert properties::button{text:='Message', url:=''}),
    },
    images := {"3-01.webp", "3-02.webp", "3-03.webp"}
  };
`;

module.exports = {
    insertUserQuery,
};
