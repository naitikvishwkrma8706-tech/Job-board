function JobCard(props){

return(

<div>

<h3>{props.title}</h3>

<p>{props.location}</p>

<button
onClick={()=>
window.location.href="#apply"
}
>

Apply

</button>

</div>

)

}

export default JobCard