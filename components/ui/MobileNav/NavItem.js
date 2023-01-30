import classes from './NavItem.module.css'
import Badge from '../Badge/Badge';

function NavItem(props){
    return (
      <a href={props.link} className={classes.button_container}>
        <Badge>
          <div className={classes.badge}>
            <p className={classes.icon_name}>{props.name}</p>
          </div>
        </Badge>
      </a>
    );
}

export default NavItem