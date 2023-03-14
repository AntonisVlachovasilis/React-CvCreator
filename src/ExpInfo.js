import React from "react";
import { useState, useEffect } from "react";

const ExpInfo = (
  setDutyDoc,
  setCompanyDoc,
  setTownDoc,
  setStDateDoc,
  setEndDateDoc,
  reset,
  setReset
) => {
  const [duty, setDuty] = useState("");
  const [company, setCompany] = useState("");
  const [town, setTown] = useState("");
  const [stDate, setStDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [workable, setWorkable] = useState(false);

  useEffect(() => {
    if (reset === true) {
      setDuty("");
      setCompany("");
      setTown("");
      setStDate("");
      setEndDate("");
      setWorkable(false);
      setReset(false);
    }
  }, [reset]);

  return (
    <div>
      <h3>Εργασιακή Εμπειρία</h3>
      <form className="exp-info-form">
        <input
          type="text"
          placeholder="Θέση"
          value={duty}
          disabled={workable}
          onChange={(e) => setDuty(e.target.value)}
        />
        <input
          type="text"
          placeholder="Εταιρεία"
          value={company}
          disabled={workable}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="Πόλη"
          value={town}
          disabled={workable}
          onChange={(e) => setTown(e.target.value)}
        />
        <input
          type="month"
          placeholder="Από"
          value={stDate}
          disabled={workable}
          onChange={(e) => setStDate(e.target.value)}
        />
        <input
          type="month"
          placeholder="Έως"
          value={endDate}
          disabled={workable}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button
          className="submit-btn"
          onClick={(e) => {
            e.preventDefault();
            setDutyDoc(duty);
            setCompanyDoc(company);
            setTownDoc(town);
            setStDateDoc(stDate);
            setEndDateDoc(endDate);
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
export default ExpInfo;
