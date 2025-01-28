CREATE MIGRATION m15ew763nz2bdx2z7fr7lzjuszqqe2dbaai2wfypgbe5dkhbdj5qaa
    ONTO m1qcfklqr6fje577z4bsf7m26vnjit4xtmjzhha6ha3ht3gbvaxomq
{
  ALTER TYPE properties::developer {
      CREATE PROPERTY excerpt: std::str;
  };
};
