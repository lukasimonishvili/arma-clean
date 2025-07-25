import Styled from "styled-components";
import echoImage from "./assets/img/echo.webp";
import langData from "./assets/lang.json";

const StyledBanner = Styled.div`
    width: 100%;
    padding: 70px 0;
    background-color: rgba(157, 204, 255, .2);
`;

const StyledContainer = Styled.div`
    width: 1670px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

     @media screen and (max-width: 1730px) {
      width: 100%;
      padding: 0 30px;
    }

    @media screen and (max-width: 1200px) {
      flex-direction: column;
    }
`;

const StyledCover = Styled.div`
    width: 800px;
    height: 527px;
    background-image: url(${echoImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;

    @media screen and (max-width: 1200px) {
      margin-bottom: 50px;
    }

    @media screen and (max-width: 860px) {
      width: 100%;
      height: 400px;
    }
`;

const StyledTexts = Styled.div`
    max-width: 688px;

    & > h2 {
        font-size: 44px;
        font-weight: 600;
        color: #2F327D;
        margin-bottom: 14px;
        line-height: 66px;
    }

    & > p {
        font-weight: 400;
        font-size: 24px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #696984;
    }

    @media screen and (max-width: 1200px) {
      text-align: center;
    }

    @media screen and (max-width: 860px) {
      & > h2 {
        font-size: 32px;
        line-height: 44px;
      }

      & p {
        font-size: 16px;
      }
    }
`;

const Profies = (props) => {
  return (
    <StyledBanner>
      <StyledContainer>
        <StyledCover />
        <StyledTexts>
          <h2>{langData.ProfiesTitle[props.lang]}</h2>
          <p>{langData.ProfiesDescription[props.lang]}</p>
        </StyledTexts>
      </StyledContainer>
    </StyledBanner>
  );
};

export default Profies;
