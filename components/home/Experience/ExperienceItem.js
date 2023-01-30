import classes from './ExperienceItem.module.css'
import Gradient from "rgt";
import Badge from 'components/ui/Badge/Badge';
import { useState } from 'react';

function ExperienceItem(props){
  const [showDescription, setShowDescription] = useState(false);
  
  const showDescriptionHandler = () => {
    setShowDescription(!showDescription)
    
  }
    return (
      <div className={classes.experience_wrapper}>
        <div className={classes.date}>
          <div className={classes.date_content}>{props.date}</div>
        </div>
        <div className={classes.line}>
          <div className={classes.circle}></div>
          <div className={classes.inner_line}></div>
        </div>
        <div className={classes.card}>
          <div className={classes.card_content}>
            <div>
              <h3 className={classes.child_heading}>
                <Gradient
                  dir="left-to-right"
                  from={`${props.color[0]}`}
                  to={`${props.color[1]}`}
                >
                  {props.title}
                </Gradient>
              </h3>
            </div>
            <div>
              <ul className={classes.skills}>
                {props.skills.map((skill) => {
                  return (
                    <li className={classes.skill_item} key={skill}>
                      <Badge key={skill}>{skill}</Badge>
                    </li>
                  );
                })}
              </ul>
            </div>

            {!showDescription && (
              <p
                className={classes.showdescription + " " + classes.description}
                onClick={showDescriptionHandler}
              >
                Show Description
              </p>
            )}
            {showDescription && (
              <div>
                <p
                  className={
                    classes.showdescription + " " + classes.description
                  }
                  onClick={showDescriptionHandler}
                >
                  Close Description
                </p>
                <div className={classes.description}>
                  {props.description}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

export default ExperienceItem