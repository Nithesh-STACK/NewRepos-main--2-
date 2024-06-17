import React from 'react';

import './App.css';
// import {HubConnectionBuilder, LogLevel} from "@microsoft/signalr";
import ServiceCall from './servicebuspostcall';

function App() {
 

  // const [conn,setConn]=useState();
  // const [messages,setMessage]=useState([]);

//   const joinChat=async(username,chatRoom)=>{
//    try{
//   const conn =new HubConnectionBuilder().withUrl("https://localhost:44302/chat").configureLogging(LogLevel.Information).build();
//    conn.on("JoinSpecificChatRoom",(msg,username)=>{
//     console.log(msg,username);
    
//   });
//   conn.on("ReceiveSpecificMsg",(username,msg)=>{
//     console.log(username);
//   setMessage(messages=>
//   [...messages,{username,msg}]
// )
//   })
//   await conn.start();
//   await conn.invoke("JoinSpecificChatRoom",{username,chatRoom});
//   setConn(conn);
//    }
//    catch(e){

//    }
//   }


  // const onDrop = useCallback((acceptedFiles) => {
  //   acceptedFiles.forEach((file) => {
  //     console.log(file);
  //     // const reader = new FileReader()

  //     // reader.onabort = () => console.log('file reading was aborted')
  //     // reader.onerror = () => console.log('file reading has failed')
  //     // reader.onload = () => {
  //     // // Do whatever you want with the file contents
  //     //   const binaryStr = reader.result
  //     //   console.log(binaryStr)
  //     // }
  //     // reader.readAsArrayBuffer(file)
  //   })
    
  // }, [])
  // const {acceptedFiles,getRootProps, getInputProps,isDragActive} = useDropzone({onDrop})
//  const downloadBtn=async()=>{
//   try{
//   const conn =new HubConnectionBuilder().withUrl("https://localhost:44302/upload").configureLogging(LogLevel.Information).build();
//    conn.on("DownloadFile",(msg)=>{
//  setMessage(msg)    
//   });
//   await conn.start();
//   await conn.invoke("DownloadFile");
//   setConn(conn);
//    }
//    catch(e){
// console.log(e);
//    }

//  }
//  const uploadBtn=async()=>{
//   try{
//     const conn =new HubConnectionBuilder().withUrl("https://localhost:44302/upload").configureLogging(LogLevel.Information).build();
//      conn.on("UploadFile",(msg)=>{
//    setMessage(msg)    
//     });
//     await conn.start();
//     await conn.invoke("UploadFile");
//     setConn(conn);
//      }
//      catch(e){
//   console.log(e);
//      }
//  }
//  const deleteBtn=async()=>{
//   try{
//     const conn =new HubConnectionBuilder().withUrl("https://localhost:44302/upload").configureLogging(LogLevel.Information).build();
//      conn.on("DeleteFile",(msg)=>{
//    setMessage(msg)    
//     });
//     await conn.start();
//     await conn.invoke("DeleteFile");
//     setConn(conn);
//      }
//      catch(e){
//   console.log(e);
//      }
//  }
  return (
    <div className="App">
      <ServiceCall></ServiceCall>
{/* <button title='Download' onClick={downloadBtn}>Download</button>
<button title='Upload' onClick={uploadBtn}>Upload</button>
<button title='Delete' onClick={deleteBtn}>Delete</button> */}

{/* <p>{messages}</p>



  <div {...getRootProps()} className='upload-container'>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p className='drag-text'>Drop the files here ...</p> :
          <p className='drag-text'>Drag 'n' drop some files here, or click to select files</p>
      }
    
    </div>
    <p>Files:</p>
    {acceptedFiles.map((file) => (
    <div className='file-container'>
      {file.path} - {file.size} bytes
    </div>
  ))}
     */}
   
  
  
  </div>


  
  );
}

export default App;
