import React, { useEffect, useState } from "react";
import { fetchQRs } from "../api/Api";

const AddContacts = () => {
  const [data, setData] = useState(null);
  

  useEffect(() => {
    const getData = async () => {
      const result = await fetchQRs();
      setData(result);
    };
    getData();
  }, []);

  const vCardData=data?.data?.vCard;

  const handleAddContact = () => {
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contact.vcf';
    a.click();
    URL.revokeObjectURL(url);

  };

  return (
    <a onClick={handleAddContact} target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer",margin: "0 10px" }}>
      <i
        className="fas fa-address-book"
        style={{ color: "#fff", fontSize: "34px" }}
      ></i>
    </a>
  );
};

export default AddContacts;
