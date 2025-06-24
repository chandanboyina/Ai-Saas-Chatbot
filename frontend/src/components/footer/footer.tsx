import { Link } from "react-router-dom";

const footer=()=>{
    return (
        <footer>
            <div style={{width:"100%", padding:20, minHeight:"20vh", maxHeight:"30vh", margin:50}}>
                <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
        © 2024 Globe-GPT. All rights reserved.<p style={{ fontSize: "25px"}}>Created By <span style={{ fontSize: "25px"}} ><a href="https://github.com/chandanboyina/Ai-Chatbot" target="_blank" style={{fontSize: '25px', color:'#39a3ff', textDecoration: 'none'}}> Lakshay Dhoundiyal</a></span></p> 
          <span>
            <Link
              style={{ color: "white", fontSize: '30px' }}
              className="nav-link"
          
              to={"https://github.com/chandanboyina/Ai-Chatbot"}
            >
             
            </Link>
          </span>
        </p>
            </div>
        </footer>
    )
}
export default footer