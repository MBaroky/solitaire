CREATE MIGRATION m17tuv7dxvxksyo6k6zdoph4t2kwsegxinr2mwks667xyafyi2cnda
    ONTO m1ibcdoamkmbalwstn37vprtplnxmne7onxnrwguwk4duskcc52aaq
{
  ALTER TYPE properties::SingleProperty {
      CREATE REQUIRED PROPERTY created_at: std::datetime {
          SET default := (std::datetime_current());
      };
  };
};
