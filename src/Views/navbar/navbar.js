import React, { useState } from 'react';
import { Left, NavbarContainer, Img, WhiteText, Middle, Right, MiddleLeft, MiddleRight, Lists, ListElement, BlackTextLink, InputSearch, FaSearchContainer, SearchContainer, IconContainer } from './style';
import Logo from '../../Assets/logo.png';
import { FaSearch } from 'react-icons/fa';
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function Navbar() {

  const [count, setCount] = useState(0);

  const list = [
    {
      title: 'home',
      active: true,
      href: '/'
    },
    {
      title: 'shop',
      active: false,
      href: '#shop'
    },
    {
      title: 'contact',
      active: false,
      href: '#contact'
    },
    {
      title: 'about',
      active: false,
      href: '#about'
    }
  ]

  return (
    <NavbarContainer>
        <Left>
            <Img src={Logo} />
            <WhiteText>
                Casbah
            </WhiteText>
        </Left>
        <Middle>
            <MiddleLeft>
                <Lists>
                    {
                        list.map((item, key) => {
                            return (
                                <ListElement key={key}>
                                    <BlackTextLink href={item.href} active={item.active}>
                                        {item.title}
                                    </BlackTextLink>
                                </ListElement>
                            )
                        })
                    }
                </Lists>
            </MiddleLeft>
            <MiddleRight>
                <SearchContainer>
                    <InputSearch placeholder='Search' />
                    <FaSearchContainer>
                        <FaSearch size={20} />
                    </FaSearchContainer>
                </SearchContainer>
            </MiddleRight>
        </Middle>
        <Right>
            <IconContainer>
                <AiOutlineStar size={30} />
            </IconContainer>
            <IconContainer>
                <IoNotificationsOutline size={30} />
            </IconContainer>
            <IconContainer>
                <FaUserCircle color={'gray'} size={30} />
            </IconContainer>
        </Right>
    </NavbarContainer>
  );
}

export default Navbar;