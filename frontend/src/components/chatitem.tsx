import { Avatar, Box, Typography } from "@mui/material";
import { useauth } from "../context/authcontex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold, coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
function extractcodefromstring(message:string){
  if(message.includes("```")){
    const blocks=message.split("```")
    return blocks
  }
}
function iscodeblock(str:string){
  if(
    str.includes("=") ||
    str.includes(";") ||
    str.includes("[") ||
    str.includes("]") ||
    str.includes("{") ||
    str.includes("}") ||
    str.includes("#") ||
    str.includes("//")
  ){
    return true

    }
    return false
}
const chatitem = ({ content, role }: { content: string; role: "user" | "assistant" }) => {
  const messageblocks=extractcodefromstring(content)
  const auth = useauth();
  const isUser = role === "user";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isUser ? "row-reverse" : "row",
        alignItems: "flex-start",
        px: 2,
        my: 1,
        gap: 2,
      }}
    >
      <Avatar sx={{ bgcolor: isUser ? "white" : "skyblue", color: isUser ? "black" : "white" }}>
        {isUser ? (
          <>
            {auth?.user?.name[0]}
            {auth?.user?.name?.split("")[1]}
          </>
        ) : (
          <img src="chatboticon.png" alt="AI" width={"30px"} />
        )}
      </Avatar>
      
      

      <Box
        sx={{
          p: 1.5,
          bgcolor: isUser ? "#1976d2" : "#1E1E1E",
          color: isUser ? "white" : "black",
          borderRadius: 3,
          maxWidth: "75%",
          boxShadow: 1,
          fontSize: "16px",
          whiteSpace: "pre-wrap", // wrap content neatly
          wordBreak: "break-word", // handle long links/words
          overflowWrap:"anywhere",
          overflow:"auto",
          boxSizing:"border-box"
        }}
      >
        <Box sx={{ width: "100%", borderRadius:"30px", }}>
    {!messageblocks && (
      <Typography sx={{ fontSize: "16px" }}>{content}</Typography>
    )}
    {messageblocks && messageblocks.length > 0 &&
      messageblocks.map((block, i) =>
        iscodeblock(block) ? (
          <SyntaxHighlighter
            key={i}
            style={coldarkDark}
            language="javascript"
            customStyle={{
              borderRadius: "10px",
              padding: "10px",
              fontSize: "14px",
              maxWidth: "100%",
              overflowX: "auto",
              wordWrap:"break-word",
              boxSizing:"border-box",
            }}
          >
            {block}
          </SyntaxHighlighter>
        ) : (
          <Typography key={i} sx={{ fontSize: "16px" }}>{block}</Typography>
        )
      )}
  </Box>
        
      </Box>
    </Box>
  );
};

export default chatitem;



//updated code
/*







*/
