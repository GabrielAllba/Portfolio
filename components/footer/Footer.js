import Badge from 'components/ui/Badge/Badge';
import classes from './Footer.module.css'
import Gradient from 'rgt'
function Footer(){
    return (
      <footer
        style={{ textAlign: "center",paddingTop: '0rem', paddingBottom: "10rem", paddingLeft: "0" }}
      >
        <p
          style={{
            textAlign: "center",
            fontFamily: "Inter-Bold",
            letterSpacing: ".2rem",
          }}
        >
          <Gradient dir="left-to-right" from="#FFCC90" to="#FF9A9A">
            &#60;Riel&#62;
          </Gradient>
        </p>
        <p className={classes.footer_text}>Keep learning and leveling up.</p>
        <ul className={classes.navigation}>
          <a className={classes.anchor}>
            <li className={classes.list}>About</li>
          </a>
          <a className={classes.anchor}>
            <li className={classes.list}>Skills</li>
          </a>
          <a className={classes.anchor}>
            <li className={classes.list}>Experience</li>
          </a>
          <a className={classes.anchor}>
            <li className={classes.list}>Work</li>
          </a>
          <a className={classes.anchor}>
            <li className={classes.list}>Awards</li>
          </a>
          <a className={classes.anchor}>
            <li className={classes.list}>Blog</li>
          </a>
        </ul>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <a href='' className={classes.link}>
                <Badge>LinkedIn</Badge>
            </a>
            <a href='' className={classes.link}>
                <Badge>Github</Badge>
            </a>
           
        </div>
        <p className={classes.footer_text}>© 2023 Gabriel Allba —— Indonesia</p>
      </footer>
    );
}

export default Footer