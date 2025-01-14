CREATE MIGRATION m14o7xd4ibymyrknfump77ohzs5sfhfrky6gsmoodarim4mpykbbtq
    ONTO m1mheqc56uucw4bktssonnkfsqaykrjfca2tkfk3bzps4p32g4ssnq
{
  ALTER TYPE properties::SingleProperty {
      ALTER PROPERTY badrooms {
          RENAME TO bedrooms;
      };
  };
};
