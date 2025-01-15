CREATE MIGRATION m1wtvvu3dhkz6rixskorpmfxtmqdghxmhe243rncgeevxwwuyowzza
    ONTO m17tuv7dxvxksyo6k6zdoph4t2kwsegxinr2mwks667xyafyi2cnda
{
  ALTER TYPE properties::SingleProperty {
      ALTER PROPERTY lease {
          DROP CONSTRAINT std::one_of('Buy', 'Rent');
      };
  };
  ALTER TYPE properties::SingleProperty {
      ALTER PROPERTY lease {
          CREATE CONSTRAINT std::one_of('buy', 'rent');
      };
  };
};
