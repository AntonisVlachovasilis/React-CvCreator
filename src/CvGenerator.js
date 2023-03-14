import React from "react";
import "./App.css";
import PerInfo from "./PerInfo";
import ExpInfo from "./ExpInfo";
import EduInfo from "./EduInfo";
import { useState } from "react";

const CvGenerator = () => {
  const [cvNameDoc, setcvNameDoc] = useState("");
  const [cvLastNameDoc, setcvLastNameDoc] = useState("");
  const [cvProfDoc, setCvProfDoc] = useState("");
  const [addressDoc, setAddressDoc] = useState("");
  const [telDoc, setTelDoc] = useState("");
  const [mailDoc, setMailDoc] = useState("");
  const [descDoc, setDescDoc] = useState("");
  const [picSrcDoc, setPicSrcDoc] = useState();

  const [dutyDoc, setDutyDoc] = useState("");
  const [companyDoc, setCompanyDoc] = useState("");
  const [townDoc, setTownDoc] = useState("");
  const [stDateDoc, setStDateDoc] = useState("");
  const [endDateDoc, setEndDateDoc] = useState("");

  const [schoolDoc, setSchoolDoc] = useState("");
  const [regionDoc, setRegionDoc] = useState("");
  const [degreeDoc, setDegreeDoc] = useState("");
  const [fieldDoc, setFieldDoc] = useState("");
  const [fromDoc, setFromDoc] = useState("");
  const [endTimeDoc, setEndDoc] = useState("");
  const [reset, setReset] = useState(false);
  return (
    <div className="app-body">
      <div className="navbar-container">
        <div className="cv-logo">Cv Creator</div>
      </div>
      <div className="forms-wrapper">
        <div className="form-container-wrapper">
          <div className="p-info-cont">
            <PerInfo
              setcvNameDoc={setcvNameDoc}
              setcvLastNameDoc={setcvLastNameDoc}
              setCvProfDoc={setCvProfDoc}
              setAddressDoc={setAddressDoc}
              setTelDoc={setTelDoc}
              setMailDoc={setMailDoc}
              setDescDoc={setDescDoc}
              setPicSrcDoc={setPicSrcDoc}
              reset={reset}
              setReset={setReset}
            />
          </div>
          <div className="exp-info">
            <ExpInfo
              setDutyDoc={setDutyDoc}
              setCompanyDoc={setCompanyDoc}
              setTownDoc={setTownDoc}
              setStDateDoc={setStDateDoc}
              setEndDateDoc={setEndDateDoc}
              reset={reset}
              setReset={setReset}
            />
          </div>
          <div className="edu-info">
            <h3>Εκπαίδευση</h3>
            <EduInfo
              setSchoolDoc={setSchoolDoc}
              setRegionDoc={setRegionDoc}
              setDegreeDoc={setDegreeDoc}
              setFieldDoc={setFieldDoc}
              setFromDoc={setFromDoc}
              setEndDoc={setEndDoc}
              reset={reset}
              setReset={setReset}
            />
          </div>
          <div className="btn-container">
            <button
              className="reset-btn"
              onClick={(e) => {
                e.preventDefault();
                setcvNameDoc("");
                setcvLastNameDoc("");
                setCvProfDoc("");
                setAddressDoc("");
                setTelDoc("");
                setMailDoc("");
                setDescDoc("");
                setDutyDoc("");
                setCompanyDoc("");
                setTownDoc("");
                setStDateDoc("");
                setEndDateDoc("");
                setSchoolDoc("");
                setRegionDoc("");
                setDegreeDoc("");
                setFieldDoc("");
                setFromDoc("");
                setEndDoc("");
                setPicSrcDoc();
                setReset(true);
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="final-wrapper">
          <div className="doc-heading">
            <div className="heading-container">
              {cvNameDoc} {cvLastNameDoc}
            </div>
            <div className="profession-container">{cvProfDoc}</div>
          </div>
          <div className="doc-container">
            <div className="skills-cont">
              <h2>Περιγραφή:</h2>
              <div className="desc-cont">{descDoc}</div>
              <h2>Εργασιακή Εμπειρία:</h2>
              <div className="exp-cont">
                <div className="time-duty-container">
                  <div className="total-time">
                    Από {stDateDoc} μέχρι {endDateDoc}
                  </div>
                  <div className="duty">{dutyDoc}</div>
                </div>
                <div className="company">
                  {companyDoc} , {townDoc}
                </div>
              </div>
              <h2>Εκπαίδευση:</h2>
              <div className="edu-cont">
                <div className="time-edu-container">
                  <div className="edu-time">
                    Από {fromDoc} μέχρι {endTimeDoc}
                  </div>
                  <div className="school">
                    {schoolDoc} , {regionDoc}
                  </div>
                </div>
                <div className="degreeDoc">Επίπεδο σπουδών: {degreeDoc}</div>
                <div className="fieldDoc">Αντικείμενο σπουδών: {fieldDoc}</div>
              </div>
            </div>
            <div className="per-container-wrapper">
              <div className="heading-pic">
                <img src={picSrcDoc} />
              </div>
              <div className="sp-container">
                <h2>Προσωπικές Πληροφορίες</h2>
                <div>Διεύθυνση:</div>
                <div className="address-container">{addressDoc}</div>
                Τηλέφωνο:
                <div className="phone-container">{telDoc}</div>
                Email:
                <div className="mail-container">{mailDoc}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvGenerator;
