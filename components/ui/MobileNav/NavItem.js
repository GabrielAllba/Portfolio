import classes from './NavItem.module.css'
import Badge from '../Badge/Badge';
import Link from 'next/link'

function NavItem(props){
    return (
      <Link href={props.link} className={classes.button_container}>
        <Badge>
          <div className={classes.badge}>
            <p className={classes.icon_name}>{props.name}</p>
          </div>
        </Badge>
      </Link>
    );
}

export default NavItem