import { useState, useEffect } from "react";
import { fetchData } from "../api/Api";

export const useCardItemInputs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };
    getData();
  }, []);

  const getValueByName = (name) => {
    return data?.data?.cardItemInputs.find(input => input.name === name)?.value;
  };

  return {
    data,
    firstName: getValueByName("Firstname"),
    lastName: getValueByName("Lastname"),
    position: getValueByName("Position"),
    instagram: getValueByName("Instagram"),
    facebook: getValueByName("Facebook"),
    twitter: getValueByName("Twitter"),
    whatsapp: getValueByName("Whatsapp"),
    viber: getValueByName("Viber"),
    email: getValueByName("Email"),
    linkedin: getValueByName("Linkedin"),
    tiktok: getValueByName("Tiktok"),
    skype: getValueByName("Skype"),
    github: getValueByName("Github"),
    pinterest: getValueByName("Pinterest"),
    spotify: getValueByName("Spotify"),
  };
};
