import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItem from './sideNav_items';

const SideNavigation = (props) => {
    return (
        <div>
            <SideNav
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                onOpenNav={props.onOpenNav }
                navS tyle={{
                    background:'#242424',
                    maxWidth:'220px'
                }}
            >
                <SideNavItem {...props}/>
            </SideNav>
        </div>
    )
}
export default SideNavigation;