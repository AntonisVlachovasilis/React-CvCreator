import React from "react";
import { useState, useEffect } from "react";

const EduInfo = (
  setSchoolDoc,
  setRegionDoc,
  setDegreeDoc,
  setFieldDoc,
  setFromDoc,
  setEndDoc,
  reset,
  setReset
) => {
  const [school, setSchool] = useState("");
  const [region, setRegion] = useState("");
  const [degree, setDegree] = useState("");
  const [field, setField] = useState("");
  const [from, setFrom] = useState("");
  const [endTime, setEnd] = useState("");
  const [workable, setWorkable] = useState(false);

  useEffect(() => {
    if (reset === true) {
      setSchool("");
      setRegion("");
      setDegree("");
      setField("");
      setFrom("");
      setEnd("");
      setWorkable(false);
      setReset(false);
    }
  }, [reset]);

  return (
    <div>
      <form className="edu-info-form">
        <input
          type="text"
          placeholder="Εκπαιδευτικό Ίδρυμα"
          value={school}
          disabled={workable}
          onChange={(e) => setSchool(e.target.value)}
        />
        <input
          type="text"
          placeholder="Πόλη"
          value={region}
          disabled={workable}
          onChange={(e) => setRegion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Επίπεδο Πτυχίου"
          value={degree}
          disabled={workable}
          onChange={(e) => setDegree(e.target.value)}
        />
        <input
          type="text"
          placeholder="Αντικείμενο Σπουδών"
          value={field}
          disabled={workable}
          onChange={(e) => setField(e.target.value)}
        />
        <input
          type="month"
          placeholder="Από"
          value={from}
          disabled={workable}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          type="month"
          placeholder="Έως"
          value={endTime}
          disabled={workable}
          onChange={(e) => setEnd(e.target.value)}
        />
        <button
          className="submit-btn"
          disabled={workable}
          onClick={(e) => {
            setSchoolDoc(school);
            setRegionDoc(region);
            setDegreeDoc(degree);
            setFieldDoc(field);
            setFromDoc(from);
            setEndDoc(endTime);
            setWorkable(!workable);
          }}
        >
          Υποβολή
        </button>
        <button
          className="edit-btn"
          onClick={(e) => {
            e.preventDefault();
            if (workable === true) {
              setWorkable(!workable);
            }
          }}
        >
          Επεξεργασία
        </button>
      </form>
    </div>
  );
};
export default EduInfo;
