import React from "react";
import Typography from "@material-ui/core/Typography";

// PAGINATION
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

// COMPONENTS
import Job from "./Job";

export default function Jobs({ jobs }) {
  const numJobs = jobs.length;
  const numPages = Math.ceil(numJobs / 50);
  const [activeStep, setActiveStep] = React.useState(0);
  const jobsOnPage = jobs.slice(activeStep * 50, activeStep * 50 + 50);

  // step == 0, show 0-49
  // step == 1, show 50 - 99

  // PAGINATION FUNCTIONS
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  console.log("job is ", jobs[0]);

  return (
    <div className="jobs">
      {/* TITLE */}
      <Typography variant="h4" component="h1">
        Entry Level Sofware Jobs
      </Typography>

      {/* TOTAL JOBS */}
      <Typography variant="h6" component="h1">
        Found {numJobs} Jobs
      </Typography>

      {/* JOBS MAP */}
      {jobsOnPage.map(job => (
        <Job job={job} />
      ))}

      <div>
        Page {activeStep + 1} of {numPages}
      </div>

      <MobileStepper
        variant="progress"
        steps={numPages}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  );
}
