-- CreateTable
CREATE TABLE "Event" (
    "eventid" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "eventname" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("eventid")
);
