import "dotenv/config";

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { schema } from "@/lib/db/schemas";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, {
  schema,
});

const main = async () => {
  try {
    console.log("Seeding database...");

    console.log("Seeding finished.");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

main();
