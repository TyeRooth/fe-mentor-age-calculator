import styled from "styled-components";

const StyledFooter = styled.footer`
font-size: 11px;
text-align: center;
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
