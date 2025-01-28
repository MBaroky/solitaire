CREATE MIGRATION m1ign46rltxaj4pippsf5pqvrfjhdwdfgnbeu5ggs564yuvawss7vq
    ONTO m1uxtsmihxf2g6llb7henqgcgszrmprqkzib6hkbqugigbq2kz63jq
{
  CREATE TYPE default::Session {
      CREATE REQUIRED LINK user: default::User;
      CREATE REQUIRED PROPERTY created_at: std::datetime {
          SET default := (std::datetime_current());
      };
      CREATE REQUIRED PROPERTY token: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
