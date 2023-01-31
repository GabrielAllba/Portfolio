import classes from './WorkItem.module.css'
import {Gradient} from 'react-gradient'
import Link from 'next/link'
function WorkItem(props){
    
    const gradients = [
      ["#A7FFEF", "#A8C6FF"],
      ["#A8C6FF", "#A7FFEF"],
    ];
  
    return (
      <div className={classes.work_item_container}>
        <h3 className={classes.title}>{props.title}</h3>
        <p className={classes.sub_title}>{props.subtitle}</p>
        <Link href={props.link}>
          <Gradient
            property="background"
            gradients={gradients}
            duration={3000}
            angle="60deg"
            className={classes.image_container}
          >
            <img
              className={classes.image_content}
              src={props.image}
              style={{width: '100%'}}
            ></img>
          </Gradient>
        </Link>
      </div>
    );
}

export default WorkItem