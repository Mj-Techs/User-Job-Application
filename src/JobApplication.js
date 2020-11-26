import React, { useState, useEffect } from "react";
import axios from "axios";
import UserInfo from "./UserInfo";
import AdminPage from "./AdminPage";
// import { Container, Row } from "react-bootstrap";
const JobApplication = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://dct-application-form.herokuapp.com/users/application-forms")
      .then((response) => {
        const result = response.data;
        // console.log(result);
        setData(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);
  return (
    <div style={{ paddingLeft: "12rem" }}>
      <UserInfo /> <br />
      <AdminPage data={data} />
    </div>
  );
};
export default JobApplication;
