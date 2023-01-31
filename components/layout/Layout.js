import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main style={{position: 'relative'}} className={classes.main}>{props.children}</main>
    </>
    
  );
}

export default Layout;
