CREATE MIGRATION m1kusfgnhowj4kawiynkeqqtsmrihcdlt4dn7uql2znxejgwq7k4hq
    ONTO m15ew763nz2bdx2z7fr7lzjuszqqe2dbaai2wfypgbe5dkhbdj5qaa
{
  ALTER TYPE properties::PropertyArea {
      ALTER PROPERTY image {
          SET default := 'default.webp';
      };
  };
};
