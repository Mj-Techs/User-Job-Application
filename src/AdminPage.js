import React, { useState } from "react";
import { Button } from "react-bootstrap";
import JobTitleInfo from "./JobTitleInfo";
const AdminPage = (props) => {
  const { data } = props;
  // console.log(data);
  const [developer, setDeveloper] = useState("");
  const [Jobheader, setJobHeader] = useState("");
  // console.log(Jobheader);
  const JobTitle = [
    "Front-End Developer",
    "Node.js Developer",
    "MEAN Stack Developer",
    "FULL Stack Developer",
  ];
  const handleClick = (index) => {
    // console.log(index);
    setJobHeader(JobTitle[index]);
    const result = data.filter((i) => {
      return i.jobTitle === JobTitle[index];
    });
    setDeveloper(result);
  };
  return (
    <div>
      <h1>Admin Dashboard</h1>
      {JobTitle.map((job, i) => {
        return (
          <Button
            key={i}
            onClick={() => handleClick(i)}
            variant="outline-primary"
          >
            {job}
          </Button>
        );
      })}

      {developer && (
        <JobTitleInfo developer={developer} Jobheader={Jobheader} />
      )}
    </div>
  );
};
export default AdminPage;
