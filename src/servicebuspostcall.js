import React from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";


const ServiceCall=()=>{
// const RegisterUser=()=>{
//     //SIGNAL R IMPLEMENTATION
// }

const ProcessIdInvokeCall=()=>{

    //SERVICE BUS IMPLEMENTATION
    const newUuid = uuid()
let headers =
{"Authorization":"SharedAccessSignature sr=https%3A%2F%2FRASServiceBus.servicebus.windows.net%2Frasqueue&sig=kDzOj04Wt5NI5HbgDKdEa4KiY38UsetkxVDFovUb27E%3D&se=1719216470&skn=queuepolicy"};
let data={

        "id" : newUuid,
        "functionality" :"Download",
        "data" : 123
    
}
let url="https://RASServiceBus.servicebus.windows.net/rasqueue/messages";
let res=axios.post(url,data,{headers:headers}).then((data)=>{
console.log("success",data);
}).catch((e)=>{
console.log(e);
})
console.log(res);
}
return  <div className="container">
<div className="register-container"><p>Register User:</p>
<button className="register-btn">Register</button></div>
<div className="process-container">
<p>ProcessId Initiate</p>
<button className="process-btn" onClick={ProcessIdInvokeCall}>SendProcessId</button>
</div>

</div>
}
export default ServiceCall;