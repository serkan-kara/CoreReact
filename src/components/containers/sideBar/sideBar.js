import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import DashboardRoutes from '../../../routes/dashboardRoutes';
import Submenu from './submenu';
import { Data } from './data';

const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const SideBar = (props) => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <React.Fragment>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon>
                        {
                            Data.map((item, index) => {
                                return <Submenu item={item} key={index} />
                            })
                        }
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
            <DashboardRoutes />
        </React.Fragment>
    )
}

export default SideBar;