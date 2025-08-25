import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { officeTable } from "./office";

export const officeImageTable = pgTable("office_images", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  officeId: integer("office_id")
    .notNull()
    .references(() => officeTable.id, { onDelete: "cascade" }),
  url: varchar({ length: 255 }).notNull(),
  alt: varchar({ length: 255 }).notNull(),
});
