import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const StyledNavigation = styled.nav`
  position: fixed;
  bottom: -1.5rem;
  width: 100%;
  min-height: 105px;
  margin-bottom: 1rem;
  background-image: url("/Rectangle.svg");
  background-size: cover;
  z-index: 1;
  @media screen and (min-width: 600px) {
    background-image: url("/Desktop_NavImage.svg");
    margin-top: -6rem;
  }
`;

const StyledUnorderedList = styled.ul`
  display: flex;
  gap: 0.2rem;
  justify-content: center;
  list-style: none;
  height: 6rem;
  margin-bottom: 1vh;
  @media screen and (min-width: 1024px) {
    margin-top: 0.6rem;
  }
`;

const StyledListItem = styled.li`
  display: flex;
  @media screen and (min-width: 600px) {
    margin-bottom: 1.75vh;
    padding-left: 1.2rem;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 3rem;
    padding-top: 0.5rem;
    margin-bottom: 2vh;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

const StyledImage = styled(Image)`
  @media screen and (min-width: 600px) {
    transform: scale(1.3);
  }
  @media screen and (min-width: 1024px) {
    transform: scale(1.2);
  }
`;

const StyledCreateLink = styled(Link)`
  background-color: #fafafa;
  border-radius: 100%;
  padding: 0.2rem 0.3rem 0;
  align-self: flex-start;
  border: 0.1px solid lightgray;

  transition: transform 0.25s;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 601px) {
    transform: scale(1.4);
  }
  @media screen and (min-width: 1024px) {
    transform: scale(1.4);
  }
`;

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledUnorderedList>
        <StyledListItem>
          <StyledLink href="/">
            <StyledImage
              src={"/home.svg"}
              width={60}
              height={60}
              alt="plant icon"
            />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledCreateLink href="/create">
            <Image
              src={"/add_circle.svg"}
              width={60}
              height={60}
              alt="plant icon"
            />
          </StyledCreateLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href="/favourites">
            <StyledImage
              src={"/white_plant.svg"}
              width={60}
              height={60}
              alt="plant icon"
            />
          </StyledLink>
        </StyledListItem>
      </StyledUnorderedList>
    </StyledNavigation>
  );
}
