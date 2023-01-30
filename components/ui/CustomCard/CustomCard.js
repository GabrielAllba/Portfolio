import classes from "./CustomCard.module.css";


function CustomCard(props) {
  return (
    <div className={classes.card}>
        {props.children}
    </div>
  );
}

export default CustomCard;
