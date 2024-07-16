import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserLink from "./components/UserLink";
import { useCardItemInputs } from "./customHooks/useCardItemInputs";
import AddContacts from "./components/AddContacts";
import { QR } from "./components/QR";

function App() {
  const {
    data,
    firstName,
    lastName,
    position,
    instagram,
    facebook,
    twitter,
    whatsapp,
    viber,
    email,
    linkedin,
    tiktok,
    skype,
    github,
    pinterest,
    spotify,
  } = useCardItemInputs();

  return (
    <div
      style={{
        background: "linear-gradient(to right, #0a0a0a 0%, #0a0a0a 100%)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container text-center my-5">
        {/* Profile image section */}
        <section>
          <img
            src={`https://storage.googleapis.com/addmeimages/${data?.data?.cardImage}`}
            alt="Profile"
            className="rounded-circle mb-4"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
            }}
          />
        </section>

        {/* Name section */}
        <section className="mb-4" style={{ color: "#fff" }}>
          <h2 className="mb-4">
            {firstName || "Loading..."} {lastName || "Loading..."}
          </h2>
          <h3 className="mb-4">{position || "Loading..."}</h3>
        </section>

        {/* Icons section */}
        <section className="my-4">
          <QR />
          <AddContacts />
        </section>

        {/* Links section */}
        <section className="d-grid gap-3 col-10 col-md-6 mx-auto">
          {instagram.map((link, index) => (
            <UserLink
              key={index}
              background={"linear-gradient(45deg, #D62976, #E1306C, #F77737, #FCAF45, #FCAF45)"}
              text={"Instagram"}
              link={link}
              icon={"fab fa-instagram"}
              color={"#fff"}
            />
          ))}
          {email.map((address, index) => (
            <UserLink
              key={index}
              background={"linear-gradient(to right, #ffffff 0%, #ffffff 100%)"}
              text={"Email"}
              link={address}
              icon={"fas fa-envelope"}
              color={"#000000"}
            />
          ))}
          <UserLink
            background={"linear-gradient(to right, #3b5999 0%, #3b5999 100%)"}
            text={"Facebook"}
            link={facebook}
            icon={"fab fa-facebook"}
            color={"#fff"}
          />
          <UserLink
            background={"linear-gradient(to right, #000000 0%, #000000 100%)"}
            text={"Twitter"}
            link={twitter}
            icon={"fab fa-twitter"}
            color={"#fff"}
          />
          <UserLink
            background={"linear-gradient(to right, #25D366 0%, #25D366 100%)"}
            text={"Whatsapp"}
            link={whatsapp}
            icon={"fab fa-whatsapp"}
            color={"#fff"}
          />
          <UserLink
            background={"linear-gradient(to right, #7360F2 0%, #7360F2 100%)"}
            text={"Viber"}
            link={viber}
            icon={"fab fa-viber"}
            color={"#fff"}
          />
          <UserLink
            background={"linear-gradient(to right, #0e76a8 0%, #0e76a8 100%)"}
            text={"Linkedin"}
            link={linkedin}
            icon={"fab fa-linkedin"}
            color={"#fff"}
          />
          <UserLink
            background={"linear-gradient(to right, #010101 0%, #010101 100%)"}
            text={"Tiktok"}
            link={tiktok}
            icon={"fab fa-tiktok"}
            color={"#fff"}
          />
          <UserLink
            background={"linear-gradient(to right, #0078D7 0%, #0078D7 100%)"}
            text={"Skype"}
            link={skype}
            icon={"fab fa-skype"}
            color={"#fff"}
          />
          <UserLink
            background={"linear-gradient(to right, #000000 0%, #000000 100%)"}
            text={"Github"}
            link={github}
            icon={"fab fa-github"}
            color={"#fff"}
          />
          <UserLink
            background={"linear-gradient(to right, #BD081C 0%, #BD081C 100%)"}
            text={"Pinterest"}
            link={pinterest}
            icon={"fab fa-pinterest"}
            color={"#fff"}
          />
          <UserLink
            background={"linear-gradient(to right, #1DB954 0%, #1DB954 100%)"}
            text={"Spotify"}
            link={spotify}
            icon={"fab fa-spotify"}
            color={"#fff"}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
