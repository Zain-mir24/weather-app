const request = require('request');
const geocode = require('./utils/geocode')
const forecast = require('./utils/temp')

const express= require('express');
const address = process.argv[2];

if(!address){
  console.log("please provide address");
}
else{
geocode(address, (error, {latitude,longitude,location}) => {

if(error){
   return console.log(error);
}

  forecast(address,latitude,longitude,(error,{maxtemp,mintemp})=>{

   if(error){
     return console.log(error);
   } 

 console.log('the maximum temperature is'+ maxtemp+'and the minimum temperature is'+mintemp)
  
  
 })
})
}

