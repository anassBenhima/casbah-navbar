import styled, { css } from 'styled-components';

export const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  background: white;
  display: flex;
`;

export const Left = styled.div`
  background: #e72263;
  display: flex;
  width: 15%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Img = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
`;

export const WhiteText = styled.h3`
    color: white;
    font-weight: lighter;
    font-size: 1.8rem;
`;

export const BlackTextLink = styled.a`
    color: black;
    text-decoration: none;
    text-transform: capitalize;
    ${
        props => props.active && css`
            font-weight: bold;
        `
    }
`;

export const Middle = styled.div`
  display: flex;
  width: 70%;
`;

export const MiddleLeft = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
`;

export const Lists = styled.ul`
    list-style-type: none;
    display: flex;
    width: 50%;
`;

export const ListElement = styled.li`
    margin-right: 10%;
`;

export const MiddleRight = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: left;
`;

export const SearchContainer = styled.div`
    background-color: #f0ecec;
    border-radius: 8px;
    width: 40%;
    height: 65%;
    position: relative;
`;

export const InputSearch = styled.input`
    background-color: transparent;
    width: 75%;
    height: 100%;
    border: none;
    outline: none;
    padding-left: 15px;
    color: black;
    font-weight: bold;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: black;
    }
    :-ms-input-placeholder {
        color: black;
    }
`;

export const FaSearchContainer = styled.div`
    position: absolute;
    top: 30%;
    right: 12px;
    cursor: pointer;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
`;

export const IconContainer = styled.div`
  margin-right: 30px;
  cursor: pointer;
`;