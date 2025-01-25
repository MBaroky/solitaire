CREATE MIGRATION m1pzde6hvfv3lhncfjxglekcbgbj4eu4mbvduhyp7glfdwdm63nq4a
    ONTO m1nyi5fwst5vpkf3qoekd3otv5jaluvqz2xysjkib55uycyn7htmyq
{
  CREATE TYPE properties::Project {
      CREATE MULTI LINK buttons: properties::button;
      CREATE REQUIRED LINK developer: properties::developer;
      CREATE REQUIRED LINK propertyArea: properties::PropertyArea;
      CREATE REQUIRED LINK propertyType: properties::PropertyType;
      CREATE MULTI LINK tags: properties::tag;
      CREATE PROPERTY bathrooms: std::int16;
      CREATE PROPERTY bedrooms: std::int16;
      CREATE REQUIRED PROPERTY created_at: std::datetime {
          SET default := (std::datetime_current());
      };
      CREATE REQUIRED PROPERTY date: std::int16;
      CREATE PROPERTY excerpt: std::str;
      CREATE PROPERTY featured: std::bool;
      CREATE MULTI PROPERTY images: std::str;
      CREATE REQUIRED PROPERTY price: std::int32;
      CREATE REQUIRED PROPERTY size: std::int32;
  };
};
