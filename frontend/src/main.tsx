import React from 'react'
import ReactDOM from "react-dom/client"
//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import { Authprovider } from './context/authcontex.tsx'
import {Toaster} from "react-hot-toast"
import axios from 'axios'
axios.defaults.baseURL="http://localhost:5000/api/v1"
axios.defaults.withCredentials=true;
const theme=createTheme({
  typography: {fontFamily: "Roboto, sans-serif", allVariants:{color:"white"}},})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Authprovider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Toaster position='top-center'></Toaster>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Authprovider>
  </React.StrictMode>,
)
