CREATE MIGRATION m1mheqc56uucw4bktssonnkfsqaykrjfca2tkfk3bzps4p32g4ssnq
    ONTO m16hm3iw3qgy4gakrtxzskbdbrauv7qpcbfps6yrreafi45effktta
{
  CREATE MODULE properties IF NOT EXISTS;
  CREATE TYPE properties::PropertyArea {
      CREATE PROPERTY image: std::str;
      CREATE REQUIRED PROPERTY name: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  CREATE TYPE properties::PropertyType {
      CREATE REQUIRED PROPERTY name: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  CREATE TYPE properties::developer {
      CREATE PROPERTY image: std::str;
      CREATE PROPERTY logo: std::str;
      CREATE REQUIRED PROPERTY name: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  CREATE TYPE properties::SingleProperty {
      CREATE REQUIRED LINK propertyArea: properties::PropertyArea;
      CREATE REQUIRED LINK propertyType: properties::PropertyType;
      CREATE REQUIRED LINK developer: properties::developer;
      CREATE PROPERTY badrooms: std::int16;
      CREATE PROPERTY bathrooms: std::int16;
      CREATE PROPERTY excerpt: std::str;
      CREATE PROPERTY featured: std::bool;
      CREATE REQUIRED PROPERTY lease: std::str {
          CREATE CONSTRAINT std::one_of('Buy', 'Rent');
      };
      CREATE REQUIRED PROPERTY price: std::int32;
      CREATE REQUIRED PROPERTY size: std::int32;
  };
};
