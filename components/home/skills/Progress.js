import classes from './Progress.module.css'

function ProgressSkill(props){
    return (
        <div style={{display: 'flex'}}>
            <div style={{display: 'flex', width: '90%'}}>
                <div className={classes.bar}></div>
                <div className={classes.bar}></div>
                <div className={classes.bar}></div>
                <div className={classes.bar}></div>
                <div className={classes.bar}></div>
                <div className={classes.bar}></div>
                <div className={classes.bar}></div>
                <div className={classes.bar}></div>
                <div className={classes.bar}></div>
                <div className={classes.bar}></div>
            </div>
            <p className={classes.skillclass}>beginner</p>
        </div>
    )
}

export default ProgressSkill