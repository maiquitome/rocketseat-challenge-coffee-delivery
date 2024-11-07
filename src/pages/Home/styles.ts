import styled from "styled-components";
import heroBackground from "../../assets/hero-background.png";
import { TITLE_XL, TEXT_L, TEXT_M } from "../../styles/variables";

export const Background = styled.div`
  /* background: url(${heroBackground}) center / 90rem 34rem no-repeat; */
  background: url(${heroBackground}) center / auto auto no-repeat;
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
    width: 29.75rem;
  }
`;

export const TextContainer = styled.div`
  max-width: 36.75rem;
  h1 {
    font: ${TITLE_XL};
    padding-bottom: 1rem;
    color: ${(props) => props.theme["base-900"]};
  }
  p {
    font: ${TEXT_L};
    padding-bottom: 4.125rem;
    color: ${(props) => props.theme["base-800"]};
  }
`;

export const HeroItems = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  grid-auto-rows: 1fr;
  grid-column-gap: 1.875rem;
  grid-row-gap: 1.25rem;
  max-width: 35.4375rem;
  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    span {
      font: ${TEXT_M};
      color: ${(props) => props.theme["base-700"]};
    }
    svg {
      min-width: 2rem;
      padding: 0.5rem;
      border-radius: 50%;
    }
  }
`;
