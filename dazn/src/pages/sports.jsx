import React from 'react'

function sports(props) {
  return (
    <div className='DaznTitle'>
      <h1>DAZN Sports</h1>
      <h2>UserId : {props.Profile.userId}</h2>
      <h2>lang : {props.Profile.lang}</h2>
      <h2>dir : {props.Profile.dir}</h2>
    </div>
  )
}

export default sports