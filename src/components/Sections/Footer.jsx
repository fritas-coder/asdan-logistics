import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import client from "../../contentful";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    client
      .getAssets({
        "fields.title": "logo",
      })
      .then((assets) => {
        if (assets.items.length > 0) {
          const logo = assets.items[0];
          setLogoUrl(logo.fields.file.url);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper
            className="flexSpaceCenter"
            style={{ padding: "30px 0" }}
          >
            <Link
              className="flexCenter animate pointer"
              to="home"
              smooth={true}
              offset={-80}
            >
              {logoUrl && (
                <img src={logoUrl} alt="logo" style={{ height: "75px" }} />
              )}
              <h1
                className="font15 extraBold whiteColor"
                style={{ marginLeft: "15px" }}
              >
                Asdan Travel & Logistics
              </h1>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} -{" "}
              <span className="purpleColor font13">Fanatic</span> All Right
              Reserved
            </StyleP>

            <Link
              className="whiteColor animate pointer font13"
              to="home"
              smooth={true}
              offset={-80}
            >
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
