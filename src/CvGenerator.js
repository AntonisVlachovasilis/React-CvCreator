import React from "react";
import "./App.css";
import PerInfo from "./PerInfo";
import ExpInfo from "./ExpInfo";
import EduInfo from "./EduInfo";
import { useState } from "react";

const CvGenerator = () => {
  const [infoPerDoc, setInfoPerDoc] = useState({
    cvNameDoc: "",
    cvLastNameDoc: "",
    cvProfDoc: "",
    addressDoc: "",
    telDoc: "",
    mailDoc: "",
    descDoc: "",
  });
  const [picSrcDoc, setPicSrcDoc] = useState();

  const [infoExp, setInfoExp] = useState({
    dutyDoc: "",
    companyDoc: "",
    townDoc: "",
    stDateDoc: "",
    endDateDoc: "",
  });

  const [education, setEducation] = useState({
    schoolDoc: "",
    regionDoc: "",
    degreeDoc: "",
    fieldDoc: "",
    fromDoc: "",
    endTimeDoc: "",
  });
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
              setInfoPerDoc={setInfoPerDoc}
              setPicSrcDoc={setPicSrcDoc}
              reset={reset}
              setReset={setReset}
            />
          </div>
          <div className="exp-info">
            <ExpInfo
              setInfoExp={setInfoExp}
              reset={reset}
              setReset={setReset}
            />
          </div>
          <div className="edu-info">
            <h3>Εκπαίδευση</h3>
            <EduInfo
              setEducation={setEducation}
              reset={reset}
              setReset={setReset}
            />
          </div>
          <div className="btn-container">
            <button
              className="reset-btn"
              onClick={(e) => {
                e.preventDefault();
                setInfoPerDoc({
                  ...infoPerDoc,
                  cvNameDoc: "",
                  cvLastNameDoc: "",
                  cvProfDoc: "",
                  addressDoc: "",
                  telDoc: "",
                  mailDoc: "",
                  descDoc: "",
                });

                setInfoExp({
                  ...infoExp,
                  dutyDoc: "",
                  companyDoc: "",
                  townDoc: "",
                  stDateDoc: "",
                  endDateDoc: "",
                });

                setEducation({
                  ...education,
                  schoolDoc: "",
                  regionDoc: "",
                  degreeDoc: "",
                  fieldDoc: "",
                  fromDoc: "",
                  endTimeDoc: "",
                });
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
              {infoPerDoc.cvNameDoc} {infoPerDoc.cvLastNameDoc}
            </div>
            <div className="profession-container">{infoPerDoc.cvProfDoc}</div>
          </div>
          <div className="doc-container">
            <div className="skills-cont">
              <h2>Περιγραφή:</h2>
              <div className="desc-cont">{infoPerDoc.descDoc}</div>
              <h2>Εργασιακή Εμπειρία:</h2>
              <div className="exp-cont">
                <div className="time-duty-container">
                  <div className="total-time">
                    Από {infoExp.stDateDoc} μέχρι {infoExp.endDateDoc}
                  </div>
                  <div className="duty">{infoExp.dutyDoc}</div>
                </div>
                <div className="company">
                  {infoExp.companyDoc} , {infoExp.townDoc}
                </div>
              </div>
              <h2>Εκπαίδευση:</h2>
              <div className="edu-cont">
                <div className="time-edu-container">
                  <div className="edu-time">
                    Από {education.fromDoc} μέχρι {education.endTimeDoc}
                  </div>
                  <div className="school">
                    {education.schoolDoc} , {education.regionDoc}
                  </div>
                </div>
                <div className="degreeDoc">
                  Επίπεδο σπουδών: {education.degreeDoc}
                </div>
                <div className="fieldDoc">
                  Αντικείμενο σπουδών: {education.fieldDoc}
                </div>
              </div>
            </div>
            <div className="per-container-wrapper">
              <div className="heading-pic">
                <img src={picSrcDoc} />
              </div>
              <div className="sp-container">
                <h2>Προσωπικές Πληροφορίες</h2>
                <div>Διεύθυνση:</div>
                <div className="address-container">{infoPerDoc.addressDoc}</div>
                Τηλέφωνο:
                <div className="phone-container">{infoPerDoc.telDoc}</div>
                Email:
                <div className="mail-container">{infoPerDoc.mailDoc}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvGenerator;
