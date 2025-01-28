CREATE MIGRATION m1uxtsmihxf2g6llb7henqgcgszrmprqkzib6hkbqugigbq2kz63jq
    ONTO m1kusfgnhowj4kawiynkeqqtsmrihcdlt4dn7uql2znxejgwq7k4hq
{
  DROP TYPE default::Movie;
  ALTER TYPE default::Person RENAME TO default::User;
  ALTER TYPE default::User {
      CREATE REQUIRED PROPERTY email: std::str {
          SET REQUIRED USING (<std::str>{});
          CREATE CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::User {
      ALTER PROPERTY name {
          RENAME TO password_hash;
      };
  };
};
