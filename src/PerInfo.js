import React from "react";
import { useState, useEffect } from "react";

const PerInfo = ({ setInfoPerDoc, setPicSrcDoc, reset, setReset }) => {
  const [infoPer, setInfoPer] = useState({
    cvName: "",
    cvLastName: "",
    cvProf: "",
    address: "",
    tel: "",
    mail: "",
    desc: "",
  });
  const [picSrc, setPicSrc] = useState();
  const [workable, setWorkable] = useState(false);

  const handleImg = (e) => {
    const file = e.target.files[0];
    setPicSrc(URL.createObjectURL(file));
  };
  useEffect(() => {
    if (reset === true) {
      setInfoPer({
        ...infoPer,
        cvName: "",
        cvLastName: "",
        cvProf: "",
        address: "",
        tel: "",
        mail: "",
        desc: "",
      });
      setWorkable(false);
      setReset(false);
    }
  }, [reset]);
  return (
    <div>
      <h3>Προσωπικές Πληροφορίες</h3>
      <form className="per-info-form">
        <input
          type="text"
          placeholder="Όνομα"
          value={infoPer.cvName}
          disabled={workable}
          onChange={(e) => setInfoPer({ ...infoPer, cvName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Επώνυμο"
          value={infoPer.cvLastName}
          disabled={workable}
          onChange={(e) =>
            setInfoPer({ ...infoPer, cvLastName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Ειδικότητα"
          value={infoPer.cvProf}
          disabled={workable}
          onChange={(e) => setInfoPer({ ...infoPer, cvProf: e.target.value })}
        />
        <input
          type="file"
          placeholder=" Φωτογραφία"
          accept="image/png,image/jpeg"
          disabled={workable}
          onChange={handleImg}
        />
        <input
          type="text"
          placeholder="Διεύθυνση"
          value={infoPer.address}
          disabled={workable}
          onChange={(e) => setInfoPer({ ...infoPer, address: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Τηλέφωνο"
          value={infoPer.tel}
          disabled={workable}
          onChange={(e) => setInfoPer({ ...infoPer, tel: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={infoPer.mail}
          disabled={workable}
          onChange={(e) => setInfoPer({ ...infoPer, mail: e.target.value })}
        />
        <textarea
          type="text"
          placeholder="Περιγραφή"
          value={infoPer.desc}
          disabled={workable}
          onChange={(e) => setInfoPer({ ...infoPer, desc: e.target.value })}
        ></textarea>
        <button
          className="submit-btn"
          onClick={(e) => {
            e.preventDefault();
            setInfoPerDoc({
              ...infoPer,
              cvNameDoc: infoPer.cvName,
              cvLastName: infoPer.cvLastName,
              cvProfDoc: infoPer.cvProf,
              addressDoc: infoPer.address,
              telDoc: infoPer.tel,
              mailDoc: infoPer.mail,
              descDoc: infoPer.desc,
            });

            setPicSrcDoc(picSrc);
            setWorkable(true);
          }}
        >
          Υποβολή
        </button>
        <button
          className="edit-btn"
          onClick={(e) => {
            e.preventDefault();
            setWorkable(false);
          }}
        >
          Επεξεργασία
        </button>
      </form>
    </div>
  );
};
export default PerInfo;
