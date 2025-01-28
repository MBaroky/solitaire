// queries.js
const insertDeveloperQuery = (name, cover, logo, excerpt) => `
WITH existing_dev := (
  SELECT properties::developer
  FILTER properties::developer.name = '${name.trim().toLowerCase()}'
)
SELECT (
  INSERT properties::developer {
    name := '${name.trim().toLowerCase()}',
    image := '${cover}',
    logo := '${logo}',
    excerpt := '${excerpt}'
  }
  UNLESS CONFLICT ON .name
  ELSE (
    UPDATE existing_dev
    SET {
      image := '${cover}',
      logo := '${logo}',
      excerpt := '${excerpt}'
    }
  )
);
`;

module.exports = {
  insertDeveloperQuery,
};
