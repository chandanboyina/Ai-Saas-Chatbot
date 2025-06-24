import { TextField } from "@mui/material";

type Props={
    name:string;
    type:string;
    label:string;
}
const CustomizedInput=(props:Props)=>{
    return <TextField margin="normal" InputLabelProps={{style:{color:"white"}}} name={props.name} label={props.label} type={props.type} InputProps={{style:{width:"400px", borderRadius:10, fontSize:20, color:"white"}}}></TextField>

}

export default CustomizedInput

//alternate textfield code try after project completes
/*
<TextField
  margin="normal"
  name={props.name}
  label={props.label}
  type={props.type}
  sx={{
    width: "400px",
    borderRadius: "10px",
    input: {
      color: "white",
      fontSize: 20,
    },
    label: {
      color: "white",
    },
  }}
/>
*/