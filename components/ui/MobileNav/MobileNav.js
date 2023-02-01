import { Container } from '@mui/system';
import classes from './MobileNav.module.css'
import { HiOutlineHome } from "react-icons/hi";
import Badge from '../Badge/Badge';
import NavItem from './NavItem';

function MobileNav(props){
    return (
      <Container maxWidth="sm" style={{position: 'relative'}}>
        <div className={classes.container}>
          <NavItem link='/' name='Home'></NavItem>
          <NavItem link='/' name='About'></NavItem>
          <NavItem link='/' name='Skills'></NavItem>
          <NavItem link='/' name='Experience'></NavItem>
          <NavItem link='/' name='Work'></NavItem>
          <NavItem link='/' name='Awards'></NavItem>
          <NavItem link='/' name='Blog'></NavItem>
        </div>
      </Container>
    );
}

export default MobileNav