import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DonorProfile = () => {
useEffect(()=>{
  axios
  .get("https://storytelling-back-end.herokuapp.com/api/users/logged", {headers: {authorization:localStorage.getItem("token")}})
  .then(res=>{
console.log(res)
  })
}, []
 ) 
return ( 
  <div>hello</div>
)  
}

export  default DonorProfile