import Head from "next/head.js";
import styled from "styled-components";
import Header from "./Header";
import Navigation from "./Navigation";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  /* margin: 0.5rem; */
  gap: 0.5rem;
  min-height: 65vh;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  max-width: 760px;
  margin: 0 auto;
  padding: 50px;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Reuse</title>
      </Head>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Navigation />
    </>
  );
}
