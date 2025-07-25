import Styled from "styled-components";
import carpetImage from "./assets/img/carpet.jpg";
import mattressImager from "./assets/img/mattress.jpg";
import sofaImage from "./assets/img/sofa.jpg";
import stainImage from "./assets/img/stain.jpg";
import langData from "./assets/lang.json";

const StyledServices = Styled.div`
    width: 100%;
    padding: 80px 0;
`;

const StyledContainer = Styled.div`
  width: 1670px;
  margin: 0 auto;

  & > h2 {
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 30px;
    line-height: 45px;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 26px;
  }

    @media screen and (max-width: 1730px) {
      width: 100%;
      padding: 0 30px;
    }
`;

const StyledServiceList = Styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1730px) {
      flex-wrap: wrap;
      justify-content: center;
    }

    @media screen and (max-width: 868px) {
      flex-direction: column;
    }
`;

const StyledServiceListItem = Styled.div`
    width: 356px;
    height: 327px;
    border-radius: 20px;
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.image});

    &::after {
        content: "${(props) => props.text}";
        position: absolute;
        bottom: 43px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(255, 255, 255, 0.7);
        width: 236px;
        padding: 16px 0;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        color: rgba(0, 0, 0, 0.8);
        text-align: center;
        border-radius: 12px;
    }

    @media screen and (max-width: 1730px) {
      margin-left: 50px;

      &:first-child {
        margin-left: 0;
      }
    }

    @media screen and (max-width: 1633px) {

      &:last-child {
        margin-top: 40px;
      }
    }

     @media screen and (max-width: 1227px) {

      &:nth-child(3) {
        margin-top: 40px;
      }
    }

    @media screen and (max-width: 868px) {
      margin-left: 0 !important;
      margin-top: 40px;

      &:first-child {
        margin-top: 0;
      }
    }

    @media screen and (max-width: 460px) {
      width: 100%;
    }
`;

const Services = (props) => {
  return (
    <StyledServices>
      <StyledContainer>
        <h2>{langData.ServicesTitle[props.lang]}</h2>
        <StyledServiceList>
          <StyledServiceListItem
            image={sofaImage}
            text={langData.SofaCleaning[props.lang]}
          />
          <StyledServiceListItem
            image={mattressImager}
            text={langData.MattressSanitizations[props.lang]}
          />
          <StyledServiceListItem
            image={stainImage}
            text={langData.StainRemoving[props.lang]}
          />
          <StyledServiceListItem
            image={carpetImage}
            text={langData.CarpetWashing[props.lang]}
          />
        </StyledServiceList>
      </StyledContainer>
    </StyledServices>
  );
};

export default Services;
