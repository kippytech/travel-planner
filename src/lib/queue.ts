import { connection } from "./";
import { Queue } from "bullmq";

export const jobsQueue = new Queue("jobsQueue", {
  connection,
  defaultJobOptions: {
    attempts: 2,
    backoff: {
      type: "exponential",
      delay: 5000,
    },
  },
});
