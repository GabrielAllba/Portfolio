import classes from './AwardItem.module.css'
import Gradient from "rgt";
import Link from "next/link";
import { Gradient as ReactGradient } from "react-gradient";
import Badge from "components/ui/Badge/Badge";


function AwardItem(props){
     const gradients = [
       ["#FF8C8C", "#FFDCA8"],
       ["#FFDCA8", "#FF8C8C"],
     ];

    return (
      <div className={classes.award_container}>
        <div className={classes.award_item}>
          <ReactGradient
            property="background"
            gradients={gradients}
            duration={3000}
            angle="60deg"
            className={classes.image_container}
          >
            <img className={classes.image} src={props.image}></img>
          </ReactGradient>
        </div>
        <div className={classes.award_description}>
          <p className={classes.nomargin + ' ' + classes.information}>{props.information}</p>
          <h3 className={classes.nomargin + ' ' +classes.title}>{props.title}</h3>
          <div className={classes.desc_container}>
            <p className={classes.description_detail}>{props.description}</p>
          </div>
          <div className={classes.badge_container}>
            {props.tools.map((tool) => {
              return (
                <div style={{ display: "flex", marginRight: ".5rem", marginTop: '.5rem' }}>
                  <Badge>{tool}</Badge>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default AwardItem