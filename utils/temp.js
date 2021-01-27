const request = require('request');

//we will be using this to create an api that returns our temp
const forecast =(address,longitude,latitude,callback)=>{
    
    const url ='https://api.openweathermap.org/data/2.5/weather?q='+address+'&appid=05e736b7b94cc6a66c4077442a313969'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('unable to connect to the internet',undefined)
        }else if(body.error){
            callback('incorrect location',undefined)
        }else{
            callback(undefined,{
                maxtemp:body.main.temp_max,
                mintemp:body.main.temp_min,
                Location:response.body.name
            })
        }
    })
}//work
module.exports=forecast;