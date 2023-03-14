import React from "react";
import { useState, useEffect } from "react";

const PerInfo = ({
  setcvNameDoc,
  setcvLastNameDoc,
  setAddressDoc,
  setCvProfDoc,
  setTelDoc,
  setMailDoc,
  setDescDoc,
  setPicSrcDoc,
  reset,
  setReset,
}) => {
  const [cvName, setcvName] = useState("");
  const [cvLastName, setcvLastName] = useState("");
  const [cvProf, setCvProf] = useState("");
  const [address, setAddress] = useState("");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");
  const [desc, setDesc] = useState("");
  const [picSrc, setPicSrc] = useState();
  const [workable, setWorkable] = useState(false);

  const handleImg = (e) => {
    const file = e.target.files[0];
    setPicSrc(URL.createObjectURL(file));
  };
  useEffect(() => {
    if (reset === true) {
      setcvName("");
      setcvLastName("");
      setCvProf("");
      setAddress("");
      setTel("");
      setMail("");
      setDesc("");
      setPicSrc("");
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
          value={cvName}
          disabled={workable}
          onChange={(e) => setcvName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Επώνυμο"
          value={cvLastName}
          disabled={workable}
          onChange={(e) => setcvLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ειδικότητα"
          value={cvProf}
          disabled={workable}
          onChange={(e) => setCvProf(e.target.value)}
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
          value={address}
          disabled={workable}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Τηλέφωνο"
          value={tel}
          disabled={workable}
          onChange={(e) => setTel(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={mail}
          disabled={workable}
          onChange={(e) => setMail(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Περιγραφή"
          value={desc}
          disabled={workable}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button
          className="submit-btn"
          onClick={(e) => {
            e.preventDefault();
            setcvNameDoc(cvName);
            setcvLastNameDoc(cvLastName);
            setCvProfDoc(cvProf);
            setAddressDoc(address);
            setTelDoc(tel);
            setMailDoc(mail);
            setDescDoc(desc);
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
