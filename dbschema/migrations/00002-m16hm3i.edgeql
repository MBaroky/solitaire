CREATE MIGRATION m16hm3iw3qgy4gakrtxzskbdbrauv7qpcbfps6yrreafi45effktta
    ONTO m1uwekrn4ni4qs7ul7hfar4xemm5kkxlpswolcoyqj3xdhweomwjrq
{
  ALTER TYPE default::Movie {
      ALTER PROPERTY title {
          SET REQUIRED USING ('untitled');
      };
  };
};
