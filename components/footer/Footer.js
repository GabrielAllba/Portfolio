import Badge from 'components/ui/Badge/Badge';
import classes from './Footer.module.css'
import Gradient from 'rgt'
import Link from 'next/link'
import Image from 'next/image'

function Footer(){
    return (
      <footer
        style={{
          textAlign: "center",
          paddingTop: "0rem",
          paddingBottom: "6rem",
          paddingLeft: "0",
        }}
      >
        
          
          <div className={classes.image_container}>
            
              <Image
                className={classes.image}
                src="/img/logo_profile.png"
                width={300}
                height={300}
                alt="image"
                quality="100"
              ></Image>
            
          </div>
        
        <p className={classes.footer_text}>Keep learning and leveling up.</p>
        <ul className={classes.navigation}>
          <Link className={classes.anchor} href="/">
            <li className={classes.list}>About</li>
          </Link>
          <Link className={classes.anchor} href="/">
            <li className={classes.list}>Skills</li>
          </Link>
          <Link className={classes.anchor} href="/">
            <li className={classes.list}>Experience</li>
          </Link>
          <Link className={classes.anchor} href="/">
            <li className={classes.list}>Work</li>
          </Link>
          <Link className={classes.anchor} href="/">
            <li className={classes.list}>Awards</li>
          </Link>
          <Link className={classes.anchor} href="/">
            <li className={classes.list}>Blog</li>
          </Link>
        </ul>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href="" className={classes.link}>
            <Badge>LinkedIn</Badge>
          </Link>
          <Link href="" className={classes.link}>
            <Badge>Github</Badge>
          </Link>
        </div>
        <p className={classes.footer_text}>2023 Gabriel Allba —— Indonesia</p>
      </footer>
    );
}

export default Footer