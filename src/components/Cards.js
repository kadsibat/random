import React, { useEffect, useState } from "react";
import axios from "axios";
import email from "../assets/email.svg";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import "./Cards.css";
import Card from "@mui/material/Card";
import { Avatar, Button, Stack } from "@mui/material";

const Cards = () => {
  const [picture, setPicture] = useState("");
  const [name, setName] = useState({})
  const [emailRandom, setEmailRandom] = useState("");
  const [phoneRandom,setPhoneRandom] = useState("");
  const [locationRandom,setLocationRandom] = useState({});
  const [age, setAge] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    axios.get("https://randomuser.me/api/")
    .then((res) => {
      console.log(res);
    });
  }, []);

  const handleClick = () => {
    axios.get("https://randomuser.me/api/")
    .then((res) => {
        console.log(res);
        setPicture(res.data.results[0].picture.large);
        setName(res.data.results[0].name);
        setEmailRandom(res.data.results[0].email);
        setPhoneRandom(res.data.results[0].phone);
        setLocationRandom(res.data.results[0].location);
        setAge(res.data.results[0].dob);
        setDate(res.data.results[0].registered.date);
  }).catch((err)=>{
      console.log(err);
  })}
  console.log(name);
//   console.log(phoneRandom);
//   console.log(picture.large);
//   console.log(locationRandom);
  return (
    <div className="container">
      <Card
        sx={{
          minWidth: 275,
          margin: "2rem 25rem",
          padding: "20px",
          background: "radial-gradient(circle, rgba(63,193,251,1) 0%, rgba(123,140,143,0.9) 100%)",
          boxShadow:"5px 5px 0px 0px #289FED, 10px 10px 0px 0px #5FB8FF, 15px 15px 0px 0px #A1D8FF, 20px 20px 0px 0px #CAE6FF, 25px 25px 0px 0px #E1EEFF, -4px 5px 15px 5px rgba(0,0,0,0)"
        }}
      >
        <div className="resim">
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src={picture}
              sx={{ width: 95, height: 95 }}
            />
          </Stack>
          <img src={email} alt="" style={{ width: 35, height: 35,paddingLeft:30 }} />
          <img src={phone} alt="" style={{ width: 35, height:35,paddingLeft:30 }} />
          <img src={location} alt="" style={{ width: 35, height: 35,paddingLeft:30 }} />
          
        
        </div>
        <div className="yazi">
            <h3>{name.title} {name.first} {name.last} </h3> <br /> 
            <p >{emailRandom}</p>
            <p style={{paddingTop:2}}>{phoneRandom}</p>
            <p>{locationRandom.city}-{locationRandom.country}</p>
            <p>Age:{age.age}</p>
            <p>Register Date:{date}</p>
        </div>
        
      </Card>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{ 
            marginTop: "10px", 
            backgroundColor: "rgb(63,193,251)",
           }}
      >
        Random User
      </Button>
    </div>
  );
};

export default Cards;
