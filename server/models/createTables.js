import pool from '../config/db_config';

const tablesCreator = `
CREATE TABLE IF NOT EXISTS messages(
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  address VARCHAR(500),
  email VARCHAR(200) NOT NULL,
  message VARCHAR(500) NOT NULL,
  created_on TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`;

const tables = async () => {
  await pool.query(tablesCreator).then(() => {
    console.log('Tables Created');
    pool.end();
  }).catch((err) => {
    process.exit(0);
  });
};

tables();
