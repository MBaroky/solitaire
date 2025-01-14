CREATE MIGRATION m1wbjor2ykfg4v754icqhqki76qt2ikr7vieng3gd2dhuhwdf4dbcq
    ONTO m14o7xd4ibymyrknfump77ohzs5sfhfrky6gsmoodarim4mpykbbtq
{
  ALTER TYPE properties::SingleProperty {
      CREATE MULTI PROPERTY images: std::str;
  };
};
