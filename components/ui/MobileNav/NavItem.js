import classes from './NavItem.module.css'
import Badge from '../Badge/Badge';
import Link from 'next/link'
import {
  AiOutlineTrophy,AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { BsPerson, BsCode } from "react-icons/bs";
function NavItem(props){
    return (
      <Link href={props.link} className={classes.button_container}>
        <Badge>
          <div className={classes.badge}>
            {props.name === "Home" && (
              <AiOutlineHome className={classes.icon}></AiOutlineHome>
            )}
            {props.name === "About" && (
              <BsPerson className={classes.icon}></BsPerson>
            )}
            {props.name === "Skills" && (
              <BsCode className={classes.icon}></BsCode>
            )}
            {props.name === "Experience" && (
              <MdWorkOutline className={classes.icon}></MdWorkOutline>
            )}
            {props.name === "Work" && (
              <AiOutlineFundProjectionScreen
                className={classes.icon}
              ></AiOutlineFundProjectionScreen>
            )}
            {props.name === "Awards" && (
              <AiOutlineTrophy className={classes.icon}></AiOutlineTrophy>
            )}
            {props.name === "Blog" && (
              <TfiWrite className={classes.icon}></TfiWrite>
            )}
            <p className={classes.icon_name}>{props.name}</p>
          </div>
        </Badge>
      </Link>
    );
}

export default NavItem