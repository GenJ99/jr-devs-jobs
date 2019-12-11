import React from "react";
import "./App.css";

// COMPONENTS
import Jobs from "./components/Jobs";

const JOB_API_URL = "http://localhost:3001/jobs";

const mockJobs = [
  { title: "SWE 1", company: "Google" },
  { title: "SWE 1", company: "Facbook" },
  { title: "SWE 1", company: "Apple" }
];

async function fetchJobs() {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  console.log({ json });
}

function App() {
  const [jobList, updateJobs] = React.useState([]);

  React.useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
