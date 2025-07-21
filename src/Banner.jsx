import Styled from "styled-components";
import bannerImage from "./assets/img/cover.png";
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
      flex-direction: column-reverse;
    }
`;

const StyledCover = Styled.div`
    width: 800px;
    height: 527px;
    background-image: url(${bannerImage});
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

    & > button {
        border: 1px solid #49BBBD;
        border-radius: 12px;
        padding: 20px 40px;
        background-color: #49BBBD;
        color: #ffffff;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        margin-top: 25px;

        &:last-child {
            margin-left: 15px;
            background-color: #ffffff;
            color: #49BBBD;
        }
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

      & > button {
        display: block;
        margin: 25px auto;

        &:last-child {
          margin: 25px auto;
        }
      }
    }
`;

const Banner = (props) => {
  const callPhone = () => {
    window.open("https://wa.me/34614672972", "_blank");
  };

  return (
    <StyledBanner>
      <StyledContainer>
        <StyledTexts>
          <h2>{langData.HeaderTitle[props.lang]}</h2>
          <p>{langData.HeaderDescription[props.lang]}</p>
          <button onClick={callPhone}>
            {langData.BookCleaningButton[props.lang]}
          </button>
          <button onClick={callPhone}>+34614672972</button>
        </StyledTexts>
        <StyledCover />
      </StyledContainer>
    </StyledBanner>
  );
};

export default Banner;
