import { useEffect, useState } from "react"

function Jobs(){

const [jobs,setJobs]=useState([])
const [search,setSearch]=useState("")

useEffect(()=>{

fetch("http://localhost:5000/jobs")

.then((res)=>res.json())

.then((data)=>{

setJobs(data)

})

},[])

const filteredJobs=

jobs.filter((job)=>

job.title
.toLowerCase()
.includes(search.toLowerCase())

)

return(

<div>

<h1>
Available Jobs
</h1>

<input

type="text"

placeholder="Search jobs"

value={search}

onChange={(e)=>

setSearch(e.target.value)

}

/>

{

filteredJobs.map((job,index)=>(

<div key={index}>

<h2>
{job.title}
</h2>

<p>
{job.location}
</p>

</div>

))

}

</div>

)

}

export default Jobs