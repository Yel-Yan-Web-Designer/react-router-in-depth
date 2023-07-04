import { Outlet , NavLink } from "react-router-dom";
import FooterLayout from "./FooterLayout";

const RootLayout = () => {
  return (
    <div className="root-container">
        <nav>
            <h1>Testing Router</h1>
            
            <div className="nav-btn">
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="help">Help</NavLink>
            </div>
        </nav>
        <main>
            <Outlet/>
        </main>
        <FooterLayout/>
    </div>
  )
}

export default RootLayout;

/*
Diffreence between Link & NavLink is
- Navlink has active class both work behave like "a" link tag 
*/