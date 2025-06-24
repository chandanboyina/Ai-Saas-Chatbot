import {Link} from "react-router-dom"
import { Typography } from "@mui/material"
const logo=()=>{
    return <div style={{
        display:'flex', marginRight:"auto", alignItems:"center",gap:"10px"
    }}>
        <Link to="/"><img src="logo.png" alt="logo" width={"120px"} height={"120px"} className="image-inverted"></img>
            
        </Link>
        <Typography sx={{display:{md:"block", sm:"none", xs:"none"}, mr:"auto",fontWeight:"800", textShadow:"2px 1px 8px white"}}>
            <span style={{fontSize:"40px"}}>Globe-GPT</span>
        </Typography>
    </div>
}
export default logo