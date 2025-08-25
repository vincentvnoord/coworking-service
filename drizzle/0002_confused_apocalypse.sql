CREATE TABLE "office_images" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "office_images_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"office_id" integer NOT NULL,
	"url" varchar(255) NOT NULL,
	"alt" varchar(255) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "office_images" ADD CONSTRAINT "office_images_office_id_offices_id_fk" FOREIGN KEY ("office_id") REFERENCES "public"."offices"("id") ON DELETE cascade ON UPDATE no action;