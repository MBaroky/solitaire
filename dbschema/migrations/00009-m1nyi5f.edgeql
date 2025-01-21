CREATE MIGRATION m1nyi5fwst5vpkf3qoekd3otv5jaluvqz2xysjkib55uycyn7htmyq
    ONTO m1wtvvu3dhkz6rixskorpmfxtmqdghxmhe243rncgeevxwwuyowzza
{
  CREATE TYPE properties::tag {
      CREATE REQUIRED PROPERTY name: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE properties::SingleProperty {
      CREATE MULTI LINK tags: properties::tag;
  };
};
