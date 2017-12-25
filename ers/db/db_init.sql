-- create role
CREATE ROLE "ersAdmin" WITH LOGIN PASSWORD 'dirtyRat';
GRANT ALL PRIVILEGES ON DATABASE ers TO "ersAdmin";

-- delete role
-- DROP ROLE "ersAdmin";
-- REVOKE ALL PRIVILEGES ON DATABASE ers FROM "ersAdmin";
