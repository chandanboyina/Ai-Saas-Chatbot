import AppBar from "@mui/material/AppBar"
import { Toolbar } from "@mui/material";
import Logo from "./shared/logo"
import { useauth } from "../context/authcontex";
import NavLink from "./shared/navlink";
const Header=()=>{
    const auth=useauth()
    return (
        <AppBar sx={{bgcolor:"transparent", position:"static", boxShadow:"none"}}>
            <Toolbar sx={{display:"flex"}}>
                <Logo />
                <div>
                    {auth?.isLoggedIn ? (<>
                    <NavLink to="/Chat" bg="white" text="Chat" textColor="black" />
                    <NavLink to="/" bg="white" text="Logout" textColor="black" onClick={auth.logout}/>
                    </>
                    ) : (
                    <>
                    <NavLink to="/Login" bg="white" text="Login" textColor="black" />
                    <NavLink to="/Signup" bg="white" text="SignUp" textColor="black"/>
                    </>)}
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default Header;