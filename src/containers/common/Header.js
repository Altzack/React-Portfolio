import styled from 'styled-components/macro';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from 'antd';
import { BiCodeAlt } from 'react-icons/bi';
import { DesktopOnly, MobileOnly } from './responsiveComponents';
import 'antd/dist/antd.css';
import '../../App.css';

const AppHeaderContainer = styled.div`
  padding: 8px 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  min-height: 60px;
  position: fixed;
  width: 100vw;
  font-family: Rubik;
  z-index: 99;
  /*background-color: #ff294a;*/
  color: #fff;
  background-color: rgb(24, 26, 27);
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  width: 33%;
  color: #fff;
`;

const HeaderContentContainer = styled.div`
  font-family: Rubik;
  font-weight: 500;
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  height: 44px;
`;

const StyledTitle = styled.h1`
  color: #fff;
  margin-bottom: 0;
  letter-spacing: 3px;
  font-family: Rubik;
`;

const LogoLink = styled(Link)`
  justify-self: center;
  align-self: center;
  color: #364966;
  font-size: 15px;
`;

export default function Header() {
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };

  return (
    <AppHeaderContainer>
      <DesktopOnly>
        <HeaderContentContainer>
          <HeaderSection
            style={{
              justifyContent: 'flex-start',
              fontSize: 30,
              marginLeft: 10,
              fontWeight: 600,
              color: '#1890ff',
            }}
          >
            <BiCodeAlt />
          </HeaderSection>
          <HeaderSection style={{ justifyContent: 'center' }}>
            <LogoLink to="/">
              <StyledTitle />
            </LogoLink>
          </HeaderSection>
          <HeaderSection
            style={{
              justifyContent: 'space-evenly',
              width: '100%',
              fontSize: 16,
            }}
          >
            <a href="#aboutme">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </HeaderSection>
        </HeaderContentContainer>
      </DesktopOnly>
      <MobileOnly>
        <HeaderContentContainer>
          <HeaderSection
            style={{
              justifyContent: 'flex-start',
              fontSize: 25,
              marginLeft: 10,
              fontWeight: 600,
              color: '#1890ff',
            }}
          >
            {/* <Button
              style={{
                borderColor: 'transparent',
                backgroundColor: 'transparent',
                color: '#364966',
              }}
              ype="text"
              onClick={showDrawer}
            >
              <MenuOutlined />
            </Button> */}
            <BiCodeAlt />
          </HeaderSection>
          <HeaderSection style={{ justifyContent: 'center' }}>
            <LogoLink to="/">
              <StyledTitle />
            </LogoLink>
          </HeaderSection>
          <HeaderSection
            style={{ justifyContent: 'space-evenly', width: '100%' }}
          >
            <a href="#aboutme">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </HeaderSection>
        </HeaderContentContainer>
        <Drawer
          placement="left"
          closable="true"
          onClose={onClose}
          visible={visible}
          key="AppHeader-left-drawer"
        >
          <Link
            onClick={onClose}
            style={{ textDecoration: 'none', color: '#000' }}
            to="/"
          >
            <h3>About</h3>
          </Link>
          <Link
            onClick={onClose}
            style={{ textDecoration: 'none', color: '#000' }}
            to="/"
          >
            <h3>Blah</h3>
          </Link>
        </Drawer>
      </MobileOnly>
    </AppHeaderContainer>
  );
}
