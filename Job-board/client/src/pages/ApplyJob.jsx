import { useState } from "react"

function ApplyJob(){

const [name,setName]=useState("")
const [email,setEmail]=useState("")

const submitApplication=async()=>{

const res=await fetch(
"http://localhost:5000/apply",
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
email
})

}
)

const data=await res.json()

alert(data.message)

}

return(

<div id="apply">

<h1>Apply For Job</h1>

<input
placeholder="Enter Name"
value={name}
onChange={(e)=>
setName(e.target.value)
}
/>

<br/><br/>

<input
placeholder="Enter Email"
value={email}
onChange={(e)=>
setEmail(e.target.value)
}
/>

<br/><br/>

<input type="file"/>

<br/><br/>

<button
onClick={submitApplication}
>
Submit Application
</button>

</div>

)

}

export default ApplyJob