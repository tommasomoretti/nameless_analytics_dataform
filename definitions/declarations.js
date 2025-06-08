// Users raw export table
declare({
  database: constants.project_id,
  schema: constants.dataset_id,
  name: constants.users_raw_changelog
});

// Users table
declare({
  database: constants.project_id,
  schema: constants.dataset_id,
  name: constants.users_raw_latest
});

// Events table
declare({
  database: constants.project_id,
  schema: constants.dataset_id,
  name: constants.events
});

// Session table
declare({
  database: constants.project_id,
  schema: constants.dataset_id,
  name: constants.sessions
});

