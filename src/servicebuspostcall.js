import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import * as signalR from "@microsoft/signalr";

const ServiceCall=()=>{
  const [connId,setConn]=useState('');
const RegisterUser=async()=>{
    //SIGNAL R IMPLEMENTATION
    const connection = new signalR.HubConnectionBuilder()       
    .withUrl('https://signalrnotification20240618165829.azurewebsites.net/notificationHub',
       {
         skipNegotiation: true,
       transport: signalR.HttpTransportType.WebSockets
       }
 )       
   .build();

   connection.on("RegisterUser",(message)=> {
    setConn(message);
    alert(message);
});


connection.on("ReceiveNotification",(message)=> {
   console.log("Message received: " + message);
   alert(message);
});





await connection.start()
// Replace 'user123' with the unique user ID

await connection.invoke("RegisterUser", "user123");
}

const ProcessIdInvokeCall=()=>{

    //SERVICE BUS IMPLEMENTATION
    const newUuid = uuid()
// let headers =
// {"Authorization":"SharedAccessSignature sr=https%3A%2F%2FRASServiceBus.servicebus.windows.net%2Frasqueue&sig=kDzOj04Wt5NI5HbgDKdEa4KiY38UsetkxVDFovUb27E%3D&se=1719216470&skn=queuepolicy"};
// let data={

//         "id" : newUuid,
//         "functionality" :"Download",
//         "data" : 123
    
// }
fetch('https://RASServiceBus.servicebus.windows.net/rasqueue/messages', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':"SharedAccessSignature sr=https%3A%2F%2FRASServiceBus.servicebus.windows.net%2Frasqueue&sig=kDzOj04Wt5NI5HbgDKdEa4KiY38UsetkxVDFovUb27E%3D&se=1719216470&skn=queuepolicy"

    },
    body: JSON.stringify({
        "id" : newUuid,
        "connectionId":connId
    })
  })
}
// let url="https://RASServiceBus.servicebus.windows.net/rasqueue/messages";
// let res=(url,data,{headers:headers}).then((data)=>{
// console.log("success",data);
// }).catch((e)=>{
// console.log(e);
// })
// console.log(res);
// }
return  <div className="container">
<div className="register-container"><p>Register User:</p>
<button className="register-btn" onClick={RegisterUser}>Register</button></div>
<div className="process-container">
<p>ProcessId Initiate</p>
<button className="process-btn" onClick={ProcessIdInvokeCall}>SendProcessId</button>
</div>

</div>
}
export default ServiceCall;
