import { Box } from "@mui/material";
import TypingAnimation from "../components/typer/typing";

const Home=()=>{
    return (
        <Box width={"100%"} height={"100%"}>
            <Box sx={{display:"flex", width:"100%", flexDirection:"column",alignItems:"center", mx:"auto", mt:3}}>
                <Box>
                    <TypingAnimation />
                </Box>
                <Box  sx={{width:"100%", display:"flex", flexDirection:{md:"row",xs:"column"}, gap:5, my:10}}>
                    
                    <img className="image-inverted flip"  src="openai.png" alt="robo"
                    style={{width:"200px", margin:"auto"}}></img>
                </Box>
                <Box></Box>
            </Box>
            <footer/>
        </Box>
    );
}
export default Home; 