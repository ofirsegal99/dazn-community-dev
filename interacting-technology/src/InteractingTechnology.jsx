import React from 'react'
import "./styles/root.css"
import useStore from "dazn/store";
function InteractingTechnology() {
  const { currentUser } = useStore() 
  return (
    <div style={{width:"100%",height:"93.5vh",display:'flex',justifyContent:"center",alignItems:"center",background:"#3D4549",flexDirection:"column"}}>
     <h1 style={{fontSize:"64px"}}> Interacting Technology Community Component</h1>
     <h2>userId from DAZN App : {currentUser.userId}</h2>
     <h2>lang from DAZN App : {currentUser.lang}</h2>
     <h2>dir from DAZN App : {currentUser.dir}</h2>
      </div>
  )
}

export default InteractingTechnology