CREATE MIGRATION m1rbogavvpic4ngxmaucktd66gh562aikdgmib5a3gcyqeyxotrx3q
    ONTO m1ign46rltxaj4pippsf5pqvrfjhdwdfgnbeu5ggs564yuvawss7vq
{
  ALTER TYPE default::User {
      CREATE REQUIRED PROPERTY name: std::str {
          SET REQUIRED USING (<std::str>{});
      };
      CREATE REQUIRED PROPERTY phone: std::str {
          SET REQUIRED USING (<std::str>{});
      };
  };
};
