
import { TypeAnimation } from "react-type-animation"

const typinganimation=()=>{
    return (
        <TypeAnimation
        sequence={[
            "Hello! welcome to the chatbot, Built with openAI",
            1000,
            "Login or SignUp to start your Conversation ",
            2000,
        ]}
            speed={50}
            style={{fontSize:"60px",color:"white",display:"inline-block",textShadow:"1px 1px 20px white"}}
            repeat={Infinity}>
        </TypeAnimation>
    )
}
export default typinganimation
