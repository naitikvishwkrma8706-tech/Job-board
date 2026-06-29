import { useState } from "react"

function EmployerDashboard(){

const [title,setTitle]=useState("")
const [company,setCompany]=useState("")
const [location,setLocation]=useState("")

const postJob=async()=>{

const res=await fetch(
"http://localhost:5000/post-job",
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
title,
company,
location
})

}
)

const data=await res.json()

alert(data.message)

}

return(

<div>

<h1>Employer Dashboard</h1>

<input
placeholder="Job Title"
value={title}
onChange={(e)=>
setTitle(e.target.value)
}
/>

<br/><br/>

<input
placeholder="Company"
value={company}
onChange={(e)=>
setCompany(e.target.value)
}
/>

<br/><br/>

<input
placeholder="Location"
value={location}
onChange={(e)=>
setLocation(e.target.value)
}
/>

<br/><br/>

<button
onClick={postJob}
>
Post Job
</button>

</div>

)

}

export default EmployerDashboard