import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const JobTitleInfo = (props) => {
  const { developer, Jobheader } = props;
  // console.log(props);
  const [id, setId] = useState("");
  useEffect(() => {
    if (id) {
      axios
        .get(
          `http://dct-application-form.herokuapp.com/users/application-form/${id}`
        )
        .then((response) => {
          const result = response.data;
          alert(`${result.name} Profile
--------------------------------------------------------------
            Contact Number --> ${result.phone}
            Email --> ${result.email}
            Skills --> ${result.skills}
            Experience --> ${result.experience}
----------------------------------------------------------------`);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }, [id]);
  const handleShortlist = (id) => {
    axios
      .put(
        `http://dct-application-form.herokuapp.com/users/application-form/update/${id}`,
        {
          status: "shortlisted",
        }
      )
      //   .then((response) => {
      //     const result = response.data;
      //     console.log(result);
      //   })
      .catch((err) => {
        alert(err.message);
      });
  };
  const handleReject = (id) => {
    axios
      .put(
        `http://dct-application-form.herokuapp.com/users/application-form/update/${id}`,
        {
          status: "rejected",
        }
      )
      //   .then((response) => {
      //     const result = response.data;
      //     // console.log(result);
      //   })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <br />
      <h1>{Jobheader}s</h1>
      <p>List of candidates applied for {Jobheader} job</p>
      <Table className="table  table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Technical Skills</th>
            <th>Experience</th>
            <th>Applied Date</th>
            <th>View Details</th>
            <th>Update Application Status</th>
          </tr>
        </thead>
        <tbody>
          {developer.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.skills}</td>
                <td>{user.experience}</td>
                <td>
                  {user.createdAt
                    .slice(0, user.createdAt.indexOf("T"))
                    .split("-")
                    .join("/")}
                </td>
                <td>
                  <Button
                    variant="info"
                    size="sm"
                    onClick={() => {
                      setId(user._id);
                    }}
                  >
                    View Details
                  </Button>
                </td>
                <td>
                  {user.status === "applied" ? (
                    <div>
                      <Button
                        variant="success"
                        onClick={() => {
                          handleShortlist(user._id);
                        }}
                      >
                        Shortlist
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                          handleReject(user._id);
                        }}
                      >
                        Reject
                      </Button>
                    </div>
                  ) : user.status === "shortlisted" ? (
                    <Button variant="success">Shortlisted</Button>
                  ) : (
                    user.status === "rejected" && (
                      <Button variant="danger">Rejected</Button>
                    )
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default JobTitleInfo;
