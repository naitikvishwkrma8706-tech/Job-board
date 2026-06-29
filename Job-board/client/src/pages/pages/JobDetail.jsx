function JobDetail() {

return(

<div>

<h1>
Job Detail
</h1>

<h2>
Frontend Developer
</h2>

<p>
Company: Google
</p>

<p>
Location: Ujjain
</p>

<p>
Salary: ₹8 LPA
</p>

<p>
Description:
Build responsive web applications using React.
</p>

<button
onClick={()=>
window.location.href="#apply"
}
>
Apply Now
</button>

</div>

)

}

export default JobDetail