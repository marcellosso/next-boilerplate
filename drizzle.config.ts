import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schemas",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  migrations: {
    table: "migrations",
    schema: "public",
  },
} satisfies Config;
