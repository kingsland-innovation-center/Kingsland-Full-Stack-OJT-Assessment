import React, { useState } from 'react';
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

const menuItem = require('./sidebarItems.json');

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);
  const authenticatedUser = true; //for dev only
  const menuItems = menuItem.find((item) => {
    return item.authenticated === authenticatedUser;
  });

  return (
    <ProSidebar
      collapsedWidth='60px'
      image={false}
      collapsed={!isOpen}
      toggled={true}
      breakPoint='xs'
      overflow='hidden'
      width='230px'
      color='red'
      style={{
        padding: '0px',
      }}
    >
      <SidebarHeader>
        <div
          style={{
            whiteSpace: 'nowrap',
            display: 'flex',
            flexDirection: 'column',
            // alignItems: `${isOpen ? 'flex-end' : 'flex-start'}`,
            alignItems: 'flex-end',
          }}
        >
          <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
        </div>
      </SidebarHeader>
      {isOpen ? (
        <>
          <SidebarContent
            style={{
              paddingLeft: '10px',
            }}
          >
            <Menu>
              {menuItems.menuItem.map((item) => {
                if (!item.subitem.length) {
                  console.log(item.path);
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
                  <MenuItem>
                    <Link to={item.path}>{item.title}</Link>
                  </MenuItem>
                </Menu>
              );
            })}
          </SidebarFooter>
        </>
      ) : (
        <div></div>
      )}
    </ProSidebar>
  );
};

export default Sidebar;
