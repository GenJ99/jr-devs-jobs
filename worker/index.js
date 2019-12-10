var CronJob = require("cron").CronJob;

const fetchGithub = require("./tasks/fetch-github");

// FETCH GITHUB JOBS
new CronJob("*/1 * * * *", fetchGithub, null, true, "America/Los_Angeles");
