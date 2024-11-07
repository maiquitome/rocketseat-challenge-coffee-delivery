import styled from "styled-components";
import heroBackground from "../../assets/hero-background.png";
import { TITLE_XL, TEXT_L } from "../../styles/variables";

export const Background = styled.div`
  background: url(${heroBackground}) center / cover no-repeat;
  /* background-image: url(${heroBackground});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat; */
`;

export const Hero = styled.div`
  height: 34rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 22.5rem;
  }
`;

export const TextContainer = styled.div`
  max-width: 36.75rem;
  h1 {
    font: ${TITLE_XL};
    padding-bottom: 1rem;
  }
  p {
    font: ${TEXT_L};
    padding-bottom: 4.125rem;
  }
`;
