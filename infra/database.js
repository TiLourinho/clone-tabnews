import { Client } from "pg";

const config = {
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
};

async function query(queryObject) {
  const client = new Client({ ...config });
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();

  return result;
}

export default {
  query: query,
};
