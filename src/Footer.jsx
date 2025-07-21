import Styled from "styled-components";
import WhiteLogoImage from "./assets/img/arma-clean-logo-only-white.svg";

const StyledFooter = Styled.footer`
    width: 100%;
    background-color: #252641;
    padding-top: 74px;
    padding-bottom: 40px;
`;

const StyledContainer = Styled.div`
    width: 600px;
    margin: 0 auto;

    & > a {
        display: block;
        text-align: center;
        color: #fff;
        font-weight: 600;
        font-size: 22px;
        line-height: 33px;
        letter-spacing: 0.04em;
        margin-top: 20px;
    }

    @media screen and (max-width: 660px) {
      width: 100%;
      padding: 0 30px;
    }

    @media screen and (max-width: 450px) {
      & > a {
        font-size: 16px;
      }
    }
`;

const StyledLogoWrapper = Styled.div`
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;

    & > img {
        width: 115px;
    }

    & > div {
        width: 2px;
        height: 83px;
        background-color: #626381;
    }

    & > span {
        color: #fff;
        font-weight: 600;
        font-size: 22px;
        line-height: 33px;
        letter-spacing: 0.04em;
    }

    @media screen and (max-width: 450px) {
      & > img {
        width: 70px
      }
    }

    & > span {
      font-size: 16px;
      line-height: 26px;
    }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledLogoWrapper>
          <img src={WhiteLogoImage} alt="" />
          <div />
          <span>Arma-Clean</span>
        </StyledLogoWrapper>
        <a href="mailto:armacleanservice@gmail.com">
          armacleanservice@gmail.com
        </a>
        <a href="https://wa.me/34614672972" target="_blank">
          +34614672972
        </a>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
