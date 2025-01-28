// queries.js
const insertAreaQuery = (name, cover) => `
WITH existing_dev := (
  SELECT properties::PropertyArea
  FILTER properties::PropertyArea.name = '${name.trim().toLowerCase()}'
)
SELECT (
  INSERT properties::PropertyArea {
    name := '${name.trim().toLowerCase()}',
    image := '${cover}',
  }
  UNLESS CONFLICT ON .name
  ELSE (
    UPDATE existing_dev
    SET {
      image := '${cover}',
    }
  )
);
`;

module.exports = {
  insertAreaQuery,
};
