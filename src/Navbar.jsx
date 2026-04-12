import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: linear-gradient(170deg, #1bc059, #0d47a1);
  
`;

const Title = styled.div`
  font-size: 3rem;
  color: #fff;
  font-weight: 600;
  font-wamily: Montserrat, sans-serif;
  text-transform: uppercase;
  margin-left: 20px;
  &:hover {
    color: black;
    cursor : pointer ;
  }
`;

const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartIcon = styled.img`
  height: 48px;
  margin-right: 20px;
  margin-top: 10px;
`;

const CartCount = styled.span`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: 5px;
  font-size: 12px;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;
class Navbar extends Component {
  render() {
    return (
      <Nav>
        <Title>Movie-App</Title>
        <CartIconContainer>
          <CartIcon
            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            alt="cart-icon"
          />
          <CartCount color="skyblue" show={true}>
            3
          </CartCount>
        </CartIconContainer>
      </Nav>
    );
  }
}

export default Navbar;
