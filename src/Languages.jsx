import Styled from "styled-components";
import translateImage from "./assets/img/translate.png";
import { useState } from "react";

const StyledLanguages = Styled.div`
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 100px;
    cursor: pointer;
    z-index: 10;

    & > img {
        width: 100%;
    }

    & > button {
        position: absolute;
        padding: 10px 12px;
        font-size: 12px;
        border: 1px solid #49BBBD;
        border-radius: 50%;
        background-color: #ffffff;
        cursor: pointer;
        transition: 0.4s;
        transform: scale(${(props) => (props.displaylangs ? 1 : 0)});
        z-index: 10;

        &:nth-child(2) {
            left: 0px;
            top: -30px;
        }

        &:nth-child(3) {
            left: -30px;
            top: 10px;
        }

        &:nth-child(4) {
            left: -30px;
            top: 55px;
        }

        &:nth-child(5) {
            left: 0px;
            top: 85px;
        }
    }

    & > div {
        position: fixed;
        top: 0;
        left: 0;
        background-color: transparent;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        cursor: default;
        display: ${(props) => (props.displaylangs ? "block" : "none")};
    }

    @media screen and (max-width: 860px) {
        width: 50px;
        right: 0;
        bottom: 20px;

        & > button {
            font-size: 8px;
            padding: 8px;

            &:nth-child(2) {
                left: 12px;
                top: -25px;
            }

            &:nth-child(3) {
                left: -20px;
                top: -15px;
                padding: 8px 10px;
            }

            &:nth-child(4) {
                left: -22px;
                top: 18px;
                padding: 8px 9px;
            }

            &:nth-child(5) {
                top: 42px;
            }
        }
    }
`;

const Languages = (props) => {
  const [showLang, setShowLang] = useState(false);

  const toggleShowLang = () => setShowLang(!showLang);

  return (
    <StyledLanguages onClick={toggleShowLang} displaylangs={showLang}>
      <img alt="Pick language" src={translateImage} />
      <button onClick={() => props.changeLanguage("ca")}>Ca</button>
      <button onClick={() => props.changeLanguage("es")}>Es</button>
      <button onClick={() => props.changeLanguage("en")}>En</button>
      <button onClick={() => props.changeLanguage("ru")}>Ru</button>
      <div onClick={toggleShowLang}></div>
    </StyledLanguages>
  );
};

export default Languages;
