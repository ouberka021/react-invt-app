import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #282D4F;
`;
    
const Tabs = styled(NavLink)`
    color: #FFFCEF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {
    
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to="./" exact> <h2>INVO</h2></Tabs>
                <Tabs to="all" exact>All Users</Tabs>
                <Tabs to="add" exact>Add User</Tabs>
                <Tabs to="allitems" exact>All Items</Tabs>
                <Tabs to="additem" exact>Add Item</Tabs>
                
            </Toolbar>
        </Header>
    )
}

export default NavBar;