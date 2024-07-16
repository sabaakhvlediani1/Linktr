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

  const getValuesByName = (name) => {
    return data?.data?.cardItemInputs
      .filter(input => input.name === name)
      .map(input => input.value) || [];
  };

  return {
    data,
    firstName: getValuesByName("Firstname"),
    lastName: getValuesByName("Lastname"),
    position: getValuesByName("Position"),
    instagram: getValuesByName("Instagram"),
    facebook: getValuesByName("Facebook"),
    twitter: getValuesByName("Twitter"),
    whatsapp: getValuesByName("Whatsapp"),
    viber: getValuesByName("Viber"),
    email: getValuesByName("Email"),
    linkedin: getValuesByName("Linkedin"),
    tiktok: getValuesByName("Tiktok"),
    skype: getValuesByName("Skype"),
    github: getValuesByName("Github"),
    pinterest: getValuesByName("Pinterest"),
    spotify: getValuesByName("Spotify"),
  };
};
