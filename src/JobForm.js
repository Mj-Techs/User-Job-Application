import React, { useState, useEffect } from "react";
import validator from "validator";
import { Form, Row, Col, Button } from "react-bootstrap";
// import { v4 as uuidv4 } from "uuid";
const JobForm = (props) => {
  const { formSubmission, isSaved, toggleIsSaved } = props;
  const domain = [
    "Front-End Developer",
    "Node.js Developer",
    "MEAN Stack Developer",
    "FULL Stack Developer",
  ];
  //   const [id, setId] = useState(uuidv4());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [experience, setExperience] = useState("");
  const [technicalSkill, setTechnicalSkill] = useState("");
  const [formErrors, setFormErrors] = useState({}); //state variable will keep track of the formErrors.
  const errors = {}; //local variable to track the errors.
  useEffect(() => {
    if (isSaved) {
      setName("");
      setEmail("");
      setPhoneNumber("");
      setSelectedOption("");
      setExperience("");
      setTechnicalSkill("");
      toggleIsSaved();
    }
  }, [toggleIsSaved, isSaved]);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleJobChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };
  const handleSkillChange = (e) => {
    setTechnicalSkill(e.target.value);
  };
  const runValidation = () => {
    //check name validation
    if (name.trim().length === 0) {
      errors.name = "name cannot be blank ";
    }
    //email validation
    if (email.trim().length === 0) {
      errors.email = "email cannot be blank";
    } else if (!validator.isEmail(email)) {
      errors.email = "Invalid email formate";
    }
    //phone validation
    if (phoneNumber.trim().length === 0) {
      errors.phoneNumber = "phone Number cannot be blank";
    } else if (validator.isAlpha(phoneNumber, "en-US")) {
      errors.phoneNumber = "Contact Number cannot contain character ";
    } else if (phoneNumber.length < 10 || phoneNumber.length > 13) {
      errors.phoneNumber = "Invalid Number";
    }

    //Experience Validation
    if (experience.trim().length === 0) {
      errors.experience = "Experience field cannot be blank";
    }
    //Technical Skill validation
    if (technicalSkill.trim().length === 0) {
      errors.technicalSkill = "Technical Skill field cannot be blank";
    }
    // Job validation
    if (selectedOption.trim().length === 0) {
      errors.selctedOption = "Job field cannot be blank";
    }
  };
  const handleSubmitChange = (e) => {
    e.preventDefault();
    runValidation();
    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      const formData = {
        name: name,
        email: email,
        phone: phoneNumber,
        jobTitle: selectedOption,
        experience: experience,
        skills: technicalSkill,
      };
      formSubmission(formData);
    } else {
      setFormErrors(errors);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        fontFamily: "sans-serif",
        height: "500px",
        width: "900px",
      }}
    >
      <Form onSubmit={handleSubmitChange}>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Fullname
          </Form.Label>
          <Col sm="10">
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="form-control"
              id="inputdefault"
            />
            {formErrors.name && <span>{formErrors.name}</span>} <hr />
          </Col>
          <br />
          <Form.Label column sm="2">
            Email address
          </Form.Label>
          <Col sm="10">
            <input
              type="text"
              placeholder="example@gmail.com"
              value={email}
              onChange={handleEmailChange}
              className="form-control"
              id="inputdefault"
            />
            {formErrors.email && <span>{formErrors.email}</span>}
            <hr />
          </Col>

          <br />
          <Form.Label column sm="2">
            Contact Number
          </Form.Label>
          <Col sm="10">
            <input
              type="text"
              placeholder="+91 9988554344"
              value={phoneNumber}
              onChange={handlePhoneChange}
              className="form-control"
              id="inputdefault"
            />
            {formErrors.phoneNumber && <span>{formErrors.phoneNumber}</span>}
            <hr />
          </Col>

          <br />
          <Form.Label column sm="2">
            Applying for job
          </Form.Label>
          <Col sm="10">
            <select
              value={selectedOption}
              onChange={handleJobChange}
              className="form-control"
              id="inputdefault"
            >
              <option value="">----Select----</option>
              {domain.map((ele, i) => {
                return (
                  <option key={i} value={ele}>
                    {ele}
                  </option>
                );
              })}
            </select>
            {formErrors.selctedOption && (
              <span>{formErrors.selctedOption}</span>
            )}
            <hr />
          </Col>
          <br />
          <Form.Label column sm="2">
            Experience
          </Form.Label>
          <Col sm="10">
            <input
              type="text"
              placeholder="Experience(2 years 3 months)"
              value={experience}
              onChange={handleExperienceChange}
              className="form-control"
              id="inputdefault"
            />
            {formErrors.experience && <span>{formErrors.experience}</span>}
            <hr />
          </Col>
          <br />
          <Form.Label column sm="2">
            Technical Skills
          </Form.Label>
          <Col sm="10">
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Technical Skills"
              value={technicalSkill}
              onChange={handleSkillChange}
            />
            {formErrors.technicalSkill && (
              <span>{formErrors.technicalSkill}</span>
            )}
            <hr />
          </Col>
          <br />
          <Col sm="10">
            <Button type="submit">Send Application</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
export default JobForm;
