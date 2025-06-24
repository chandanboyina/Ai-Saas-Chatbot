import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import { useauth } from "../context/authcontex";
import { red } from "@mui/material/colors";
import ChatItem from "../components/chatitem";
import { IoMdSend } from "react-icons/io";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { deleteuserchats, getuserchats, sendchatrequest } from "../helper/apicommunicators";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"

type message = {
  role: "user" | "assistant";
  content: string;
};

const Chat = () => {
  const navigate=useNavigate()
  const inputref = useRef<HTMLTextAreaElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const auth = useauth();
  const [chatmessages, setChatMessages] = useState<message[]>([]);

  const handlesubmit = async () => {
    const content = inputref.current?.value as string;
    if (inputref && inputref.current) {
      inputref.current.value = "";
    }
    const newMessage: message = { role: "user", content };
    setChatMessages((prev) => [...prev, newMessage]);
    const chatdata = await sendchatrequest(content);
    setChatMessages([...chatdata.chats]);
  };
  const handledeletechats=async ()=>{
    try {
    
      await deleteuserchats()
      setChatMessages([])
      toast.success("chats Deleted Successfully!", {id:"deleteChats"})
    } catch (error) {
      console.log(error)
      toast.error("Deletion of Charts failed!", {id:"deleteChats"})

      
    }
  }

  useLayoutEffect(() => {
    if(auth?.isLoggedIn && auth.user){
      toast.loading("chats are Loading...", {id:"loadchats"})
      getuserchats().then((data)=>{
        setChatMessages([...data.chats])
        toast.success("chats loaded successfully!", {id:"loadchats"})
      }).catch(err=>{
        console.log(err),
        toast.error("Loading chats failed!", {id:"loadchats"})

    });
      
    }
    //messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [auth]);

  useEffect(()=>{
    if(!auth?.user){
      navigate("/login")
      return
    }
  }, [auth])

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "100%",
            bgcolor: "#1E1E1E",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
            my: 2,
            p: 2,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "skyblue",
              color: "white",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name?.[0]}
            {auth?.user?.name?.[1]}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
            Hello! How can I help you!
          </Typography>
          <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>
            Ask anything related to knowledge, business, advice, education, etc.
          </Typography>
          <Button onClick={handledeletechats}
            sx={{
              width: "200px",
              my: "auto",
              color: "white",
              fontWeight: "700",
              borderRadius: 5,
              mx: "auto",
              bgcolor: red[300],
              ":hover": { bgcolor: red.A400 },
            }}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>

      {/* Chat Area */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          px: 3,
          py: 2,
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Typography sx={{ fontSize: "30px", color: "white", mb: 1, mx: "auto" }}>
          Model-GPT 4.0 Turbo
        </Typography>

        {/* Chat Messages Box */}
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            overflowX: "hidden",
            borderRadius: 5,
            px: 1,
            pr: 2,
          }}
        >
          {chatmessages.map((chat, index) => (
            <ChatItem content={chat.content} role={chat.role} key={index} />
          ))}
          <div ref={messagesEndRef} />
        </Box>

        {/* Input Box */}
        <Box
          sx={{
            width: "100%",
            borderRadius: "30px",
            backgroundColor: "#1E1E1E",
            display: "flex",
            alignItems: "center",
            mt: 2,
            px: 2,
            py: 1,
          }}
        >
          <textarea
            ref={inputref}
            rows={1}
            placeholder="Type your text..."
            onInput={(e) => {
              e.currentTarget.style.height = "auto";
              e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
            }}
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "10px",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "18px",
              resize: "none",
              overflow: "hidden",
              lineHeight: "1.4em",
              fontFamily: "inherit",
            }}
          ></textarea>
          <IconButton onClick={handlesubmit} sx={{ color: "white", ml: 1 }}>
            <IoMdSend />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
