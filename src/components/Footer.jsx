import styled from "styled-components";

const StyledFooter = styled.footer`
font-size: 11px;
text-align: center;
position: fixed;
left: 0;
bottom: 0;
width: 100%;
padding: 10px;
background-color: hsl(0, 0%, 86%);
`;

const Anchor = styled.a`
color: hsl(228, 45%, 44%);
`;

const Footer = () => {
  return (
    <StyledFooter>
      Challenge by{" "}
      <Anchor href="https://www.frontendmentor.io?ref=challenge">
        Frontend Mentor
      </Anchor>
      . Coded by <Anchor href="https://github.com/TyeRooth">Tye Rooth</Anchor>.
    </StyledFooter>
  );
};

export default Footer;
