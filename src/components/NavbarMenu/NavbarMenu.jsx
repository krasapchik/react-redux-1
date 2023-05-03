import { Link } from "react-router-dom"
import  classes from './NavbarMenu.module.css'
import { ClientPage, MenuPage } from "../../pages"
const routes = [
    {
        path: "/menu",
        Label:"Menu",
        id: 1
    },
    {
        path: "/about",
        Label:"About",
        id: 2
    },
  
    {
        path: "/news",
        Label:"News",
        id: 3
    },
 
]

const NavbarMenu = () => {
  return (
    
    <div className={classes.app}>
        <ClientPage/>
        {routes.map((el) =>(
          <div className={classes.ppp}>
    <Link className={classes.navbar} to= {el.path} key={`${el.id}-${el.Label}`}>

{el.Label}
</Link>
          </div>
      
        ))}
     

    </div>
    
  )
}

export default NavbarMenu