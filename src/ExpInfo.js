import React from "react";
import { useState, useEffect } from "react";

const ExpInfo = (setInfoExp, reset, setReset) => {
  const [expInfo, setExpInfo] = useState({
    duty: "",
    company: "",
    town: "",
    stDate: "",
    endDate: "",
  });

  const [workable, setWorkable] = useState(false);

  useEffect(() => {
    if (reset === true) {
      setExpInfo({
        ...expInfo,
        duty: "",
        company: "",
        town: "",
        stDate: "",
        endDate: "",
      });
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
          value={expInfo.duty}
          disabled={workable}
          onChange={(e) => setExpInfo({ ...expInfo, duty: e.target.value })}
        />
        <input
          type="text"
          placeholder="Εταιρεία"
          value={expInfo.company}
          disabled={workable}
          onChange={(e) => setExpInfo({ ...expInfo, company: e.target.value })}
        />
        <input
          type="text"
          placeholder="Πόλη"
          value={expInfo.town}
          disabled={workable}
          onChange={(e) => setExpInfo({ ...expInfo, town: e.target.value })}
        />
        <input
          type="month"
          placeholder="Από"
          value={expInfo.stDate}
          disabled={workable}
          onChange={(e) => setExpInfo({ ...expInfo, stDate: e.target.value })}
        />
        <input
          type="month"
          placeholder="Έως"
          value={expInfo.endDate}
          disabled={workable}
          onChange={(e) => setExpInfo({ ...expInfo, endDate: e.target.value })}
        />
        <button
          className="submit-btn"
          onClick={(e) => {
            e.preventDefault();
            setInfoExp({
              ...expInfo,
              dutyDoc: expInfo.duty,
              companyDoc: expInfo.company,
              townDoc: expInfo.town,
              stDateDoc: expInfo.stDate,
              endDateDoc: expInfo.endDate,
            });
            setWorkable(true);
          }}
        >
          Υποβολή
        </button>
        <button
          className="edit-btn"
          onClick={(e) => {
            e.preventDefault();
            if (workable === true) {
              setWorkable(false);
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
