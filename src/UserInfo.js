import React, { useState } from "react";
import axios from "axios";
import JobForm from "./JobForm";
const UserInfo = (props) => {
  const [isSaved, setIsSaved] = useState(false);
  const formSubmission = (info) => {
    // console.log(info);
    axios
      .post(
        "http://dct-application-form.herokuapp.com/users/application-form",
        info
      )
      .then((response) => {
        const result = response.data;
        console.log(result);
        setIsSaved(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const toggleIsSaved = () => {
    setIsSaved(false);
  };
  return (
    <div>
      <h2>Apply for Job</h2>
      <JobForm
        formSubmission={formSubmission}
        isSaved={isSaved}
        toggleIsSaved={toggleIsSaved}
      />
    </div>
  );
};
export default UserInfo;
