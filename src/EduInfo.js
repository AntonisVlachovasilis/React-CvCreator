import React from "react";
import { useState, useEffect } from "react";

const EduInfo = (setEducation, reset, setReset) => {
  const [educInfo, setEducInfo] = useState({
    school: "",
    region: "",
    degree: "",
    field: "",
    from: "",
    endTime: "",
  });

  const [workable, setWorkable] = useState(false);

  useEffect(() => {
    if (reset === true) {
      setEducInfo({
        ...educInfo,
        school: "",
        region: "",
        degree: "",
        field: "",
        from: "",
        endTime: "",
      });
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
          value={educInfo.school}
          disabled={workable}
          onChange={(e) => setEducInfo({ ...educInfo, school: e.target.value })}
        />
        <input
          type="text"
          placeholder="Πόλη"
          value={educInfo.region}
          disabled={workable}
          onChange={(e) => setEducInfo({ ...educInfo, region: e.target.value })}
        />
        <input
          type="text"
          placeholder="Επίπεδο Πτυχίου"
          value={educInfo.degree}
          disabled={workable}
          onChange={(e) => setEducInfo({ ...educInfo, degree: e.target.value })}
        />
        <input
          type="text"
          placeholder="Αντικείμενο Σπουδών"
          value={educInfo.field}
          disabled={workable}
          onChange={(e) => setEducInfo({ ...educInfo, field: e.target.value })}
        />
        <input
          type="month"
          placeholder="Από"
          value={educInfo.from}
          disabled={workable}
          onChange={(e) => setEducInfo({ ...educInfo, from: e.target.value })}
        />
        <input
          type="month"
          placeholder="Έως"
          value={educInfo.endTime}
          disabled={workable}
          onChange={(e) =>
            setEducInfo({ ...educInfo, endTime: e.target.value })
          }
        />
        <button
          className="submit-btn"
          disabled={workable}
          onClick={(e) => {
            setEducation({
              ...educInfo,
              schoolDoc: educInfo.school,
              regionDoc: educInfo.region,
              degreeDoc: educInfo.degree,
              fieldDoc: educInfo.field,
              fromDoc: educInfo.from,
              endTimeDoc: educInfo.endTime,
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
export default EduInfo;
