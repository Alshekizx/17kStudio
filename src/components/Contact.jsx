import React, { useState } from "react";
import "./Contact.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import firestore from "./firebase";
import useScrollToTop from "./scrollToTop";

export default function Contact() {
  useScrollToTop();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [website, setWebsite] = useState(false);
  const [mobileApp, setMobileApp] = useState(false);
  const [graphicDesign, setGraphicDesign] = useState(false);
  const [threeD, setThreeD] = useState(false);
  const [uiux, setUiux] = useState(false);
  const [logo, setLogo] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "website":
        setWebsite(checked);
        break;
      case "mobileApp":
        setMobileApp(checked);
        break;
      case "graphicDesign":
        setGraphicDesign(checked);
        break;
      case "threeD":
        setThreeD(checked);
        break;
      case "uiux":
        setUiux(checked);
        break;
      case "logo":
        setLogo(checked);
        break;
      default:
        break;
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addFormDataToFirestore({
        name,
        email,
        note,
        website,
        mobileApp,
        graphicDesign,
        threeD,
        uiux,
        logo,
      });
      setFormStatus("success");
      // Reset form fields
      setName("");
      setEmail("");
      setNote("");
      setWebsite(false);
      setMobileApp(false);
      setGraphicDesign(false);
      setThreeD(false);
      setUiux(false);
      setLogo(false);
    } catch (error) {
      console.error("Error submitting form data to Firestore:", error);
      setFormStatus("error");
    }
  };

  const addFormDataToFirestore = async (formData) => {
    // Add form data to Firestore under "PortfolioForm" collection
    await addDoc(collection(firestore, "PortfolioForm"), {
      ...formData,
      createdAt: serverTimestamp(),
    });
  };

  return (
    <div className="ContactDiv">
      <div className="ContactDiv2">
        <h2> Don't hesitate to reach out!</h2>
        <div className="ContactEmpty" />
      </div>
      <div className="ContactDivLine" />

      <div className="ContactContentDiv">
        <div className="ContactContent">
          <form onSubmit={handleSubmit} className="ContactContentForm">
            <div>
              <p>Name</p>
              <input
                className="inputName"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <br />
            <div>
              <p>Email</p>
              <input
                className="inputEmail"
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <br />
            <div>
              <p>Tell us about your project:</p>
              <textarea
                className="inputNote"
                value={note}
                onChange={handleNoteChange}
              />
            </div>
            <br />
            <div className="helpP">
              <p>What area do you need our help with?</p>
            </div>
            <div className="checkboxDiv">
              <div>
                <div>Website</div>
                <input
                  type="checkbox"
                  name="website"
                  checked={website}
                  onChange={handleCheckboxChange}
                />
              </div>

              <div>
                <div>MobileApp</div>
                <input
                  type="checkbox"
                  name="mobileApp"
                  checked={mobileApp}
                  onChange={handleCheckboxChange}
                />
              </div>

              <div>
                <div>GraphicDesign</div>
                <input
                  type="checkbox"
                  name="graphicDesign"
                  checked={graphicDesign}
                  onChange={handleCheckboxChange}
                />
              </div>
              <div>
                <div>3D</div>
                <input
                  type="checkbox"
                  name="threeD"
                  checked={threeD}
                  onChange={handleCheckboxChange}
                />
              </div>

              <div>
                <div>Uiux</div>
                <input
                  type="checkbox"
                  name="uiux"
                  checked={uiux}
                  onChange={handleCheckboxChange}
                />
              </div>

              <div>
                <div>Logo</div>
                <input
                  type="checkbox"
                  name="logo"
                  checked={logo}
                  onChange={handleCheckboxChange}
                />
              </div>
            </div>
            <br />
            {formStatus === "success" && (
              <div style={{ color: "green" }}>Form submitted successfully!</div>
            )}
            {formStatus === "error" && (
              <div style={{ color: "red" }}>Error submitting form data!</div>
            )}
            <button className="contactSubmitButton" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="ContactImageDiv" />
      </div>
    </div>
  );
}
