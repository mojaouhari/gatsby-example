import * as React from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";

import styled from "styled-components";

const HeaderContainer = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  max-width: 960;
  padding: 1.2rem 1.0875rem;
`;

const Navbar = styled.div.attrs(() => ({
  className: "d-flex justify-content-between flex-wrap",
}))``;

const Link = styled(GatsbyLink)`
  padding: 8px 8px 8px 0px;
  color: white;
  text-decoration: none;
  :hover {
    color: white;
    text-decoration: none;
  }
`;

const Header = ({ siteTitle }) => {
  return (
    <HeaderContainer>
      <h2>
        <Link to="/">{siteTitle}</Link>
      </h2>
      <Navbar>
        <Link to="/aboutme">About me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/weather">Weather</Link>
      </Navbar>
    </HeaderContainer>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
