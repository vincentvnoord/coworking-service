import { doublePrecision, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const officeTable = pgTable("offices", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  address: varchar({ length: 255 }).notNull(),
  latitude: doublePrecision("latitude").notNull(),
  longitude: doublePrecision("longitude").notNull(),
  characteristic: varchar({ length: 255 }).notNull(),
  totalDesks: integer("total_desks").notNull().default(0),
});
