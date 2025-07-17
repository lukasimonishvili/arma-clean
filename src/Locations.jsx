import Styled from "styled-components";
import bcnImage from "./assets/img/bcn.png";
import langData from "./assets/lang.json";

const StyledBanner = Styled.div`
    width: 100%;
    padding: 70px 0;
`;

const StyledContainer = Styled.div`
    width: 1670px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledCover = Styled.div`
    width: 800px;
    height: 527px;
    background-image: url(${bcnImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
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
`;

const Locations = (props) => {
  const callPhone = () => {
    window.location.href = "tel:+34614672972";
  };

  return (
    <StyledBanner>
      <StyledContainer>
        <StyledTexts>
          <h2>{langData.LocationsTitle[props.lang]}</h2>
          <p>{langData.LocationsDescription[props.lang]}</p>
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

export default Locations;
