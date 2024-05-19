import "dotenv/config";

import * as schema from "../db/schemas";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Resetting the database...");

    console.log("Reset finished.");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to reset database");
  }
};

main();
