import { useState } from "react"

function CandidateDashboard(){

const [profile]=useState({
name:"Naitik",
email:"r6260583170@gmail.com"
})

const [appliedJobs]=useState([

"Frontend Developer",

"UI Designer"

])

return(

<div>

<h1>
Candidate Dashboard
</h1>

<h2>
Profile
</h2>

<p>
Name: {profile.name}
</p>

<p>
Email: {profile.email}
</p>

<h2>
Applied Jobs
</h2>

{

appliedJobs.length>0

?

(

<ul>

{

appliedJobs.map((job,index)=>(

<li key={index}>
{job}
</li>

))

}

</ul>

)

:

(

<p>
No applications yet
</p>

)

}

</div>

)

}

export default CandidateDashboard