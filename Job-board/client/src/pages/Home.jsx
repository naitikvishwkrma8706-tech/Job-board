import { useState } from "react"
import Navbar from "../components/Navbar"
import JobCard from "../components/JobCard"

function Home() {

const [search,setSearch]=useState("")

return (

<>

<Navbar />

<h1>
Find Your Dream Job
</h1>

<input
type="text"
placeholder="Search jobs..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<button>
Search
</button>

<p>
Search functionality coming soon
</p>

<h2>
Featured Jobs
</h2>

{
"Frontend Developer"
.toLowerCase()
.includes(search.toLowerCase()) && (

<JobCard
title="Frontend Developer"
location="Ujjan"
/>

)
}

{
"Backend Developer"
.toLowerCase()
.includes(search.toLowerCase()) && (

<JobCard
title="Backend Developer"
location="Indore"
/>

)
}

{
"UI Designer"
.toLowerCase()
.includes(search.toLowerCase()) && (

<JobCard
title="UI Designer"
location="Bhopal"
/>

)
}

</>

)

}

export default Home