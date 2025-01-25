CREATE MIGRATION m1qcfklqr6fje577z4bsf7m26vnjit4xtmjzhha6ha3ht3gbvaxomq
    ONTO m1pzde6hvfv3lhncfjxglekcbgbj4eu4mbvduhyp7glfdwdm63nq4a
{
  ALTER TYPE properties::Project {
      CREATE REQUIRED PROPERTY title: std::str {
          SET REQUIRED USING ('untitled');
      };
  };
};
