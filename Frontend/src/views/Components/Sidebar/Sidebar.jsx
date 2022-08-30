import React, { useState, useContext, useEffect } from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import Hamburger from 'hamburger-react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import { sidebarContext } from './SidebarContext';
import Cookies from 'js-cookie';

const menuItem = require('./sidebarItems.json');

const Sidebar = (props) => {
  const [isOpen, setOpen] = useState(false);
  const sidebar = useContext(sidebarContext);
  const userName = Cookies.get('user_name');

  const authenticatedUser = sidebar.isUserAuthenticated;
  const menuItems = menuItem.find((item) => {
    return item.authenticated === authenticatedUser;
  });

  const handleLogout = () => {
    Cookies.remove('user_name');
  };

  const imgUrl =
    'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png';

  return (
    <ProSidebar
      image={false}
      collapsed={!isOpen}
      toggled={true}
      breakPoint='xs'
      overflow='hidden'
      width='230px'
      style={{
        padding: '0px',
      }}
    >
      <div
        style={{
          whiteSpace: 'nowrap',
          display: 'flex',
          flexDirection: 'column',
          // alignItems: `${isOpen ? 'flex-end' : 'flex-start'}`,
          alignItems: 'flex-end',
          borderBottom: '2px solid rgba(17, 17, 17, 0.2)',
        }}
      >
        <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
      </div>

      {isOpen ? (
        <>
          {authenticatedUser ? (
            <SidebarHeader style={{ padding: '10px' }}>
              <Row style={{ alignItems: 'center', display: 'flex' }}>
                <Col
                  style={{
                    marginLeft: '10px',
                    height: 'auto',
                    maxWidth: '30%',
                  }}
                >
                  <Card.Img
                    src={imgUrl}
                    style={{
                      borderRadius: '50%',
                      border: '1px solid rgba(17, 17, 17, 0.2)',
                    }}
                  />
                </Col>
                <Col style={{ justifyContent: 'flex-start' }}>
                  <Card.Text>{userName}</Card.Text>
                </Col>
              </Row>
            </SidebarHeader>
          ) : (
            <></>
          )}

          <SidebarContent
            style={{
              paddingLeft: '10px',
            }}
          >
            <Menu>
              {menuItems.menuItem.map((item) => {
                if (!item.subitem.length) {
                  return (
                    <MenuItem>
                      <Link to={item.path}>{item.title}</Link>
                    </MenuItem>
                  );
                } else {
                  return (
                    <SubMenu title={item.title}>
                      {item.subitem.map((subItem) => {
                        return (
                          <MenuItem>
                            <Link to={subItem.path}>{subItem.title}</Link>
                          </MenuItem>
                        );
                      })}
                    </SubMenu>
                  );
                }
              })}
            </Menu>
          </SidebarContent>
          <SidebarFooter style={{ textAlign: 'left', paddingLeft: '10px' }}>
            {menuItems.footer.map((item) => {
              return (
                <Menu>
                  <MenuItem
                    onClick={() => {
                      if (item.title === 'Logout') {
                        handleLogout();
                      }
                    }}
                  >
                    <Link to={item.path}>{item.title}</Link>
                  </MenuItem>
                </Menu>
              );
            })}
          </SidebarFooter>
        </>
      ) : (
        async () => {
          await (<div></div>);
        }
      )}
    </ProSidebar>
  );
};

export default Sidebar;
