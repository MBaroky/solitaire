CREATE MIGRATION m1ibcdoamkmbalwstn37vprtplnxmne7onxnrwguwk4duskcc52aaq
    ONTO m1wbjor2ykfg4v754icqhqki76qt2ikr7vieng3gd2dhuhwdf4dbcq
{
  CREATE TYPE properties::button {
      CREATE PROPERTY text: std::str;
      CREATE PROPERTY url: std::str;
  };
  ALTER TYPE properties::SingleProperty {
      CREATE MULTI LINK buttons: properties::button;
  };
};
