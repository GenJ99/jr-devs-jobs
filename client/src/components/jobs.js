import React from "react";
import Typography from "@material-ui/core/Typography";

// COMPONENTS
import Job from "./Job";

export default function Jobs({ jobs }) {
  return (
    <div className="jobs">
      <Typography variant="h1">Entry Level Sofware Jobs</Typography>

      {jobs.map(job => (
        <Job job={job} />
      ))}
    </div>
  );
}
