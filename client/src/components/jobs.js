import React from "react";
import Typography from "@material-ui/core/Typography";

// COMPONENTS
import Job from "./Job";

export default function Jobs({ jobs }) {
  console.log("job is ", jobs[0]);

  return (
    <div className="jobs">
      <Typography variant="h4" component="h1">
        Entry Level Sofware Jobs
      </Typography>

      {jobs.map(job => (
        <Job job={job} />
      ))}
    </div>
  );
}
