import { ThemeProvider } from "next-themes"
import classes from './404.module.css'
import Link from "next/link";

export default function Custom404() {
    
  return (
    <ThemeProvider themes={["dark", "light"]} enableSystem={false}>
        <div className={classes.container}>
            <h1 className={classes.error}>404</h1>
            <h1 className={classes.error_message}>Page not found</h1>
            <Link href='/'>
                <h2 className={classes.error}>
                home
                </h2>
            </Link>
        </div>
    </ThemeProvider>
  )
  
  
}
