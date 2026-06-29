import { useState } from "react"

function Login() {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleLogin = async () => {

const res = await fetch(
"http://localhost:5000/login",
{
method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({
email,
password
})

}
)

const data = await res.json()

alert(data.message)

}

return (

<div>

<h1>Login</h1>

<input
placeholder="Email : xyz@gmail.com"
value={email}
onChange={(e)=>
setEmail(e.target.value)
}
/>

<br /><br />

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>
setPassword(e.target.value)
}
/>

<br /><br />

<button
onClick={handleLogin}
>
Login
</button>

</div>

)

}

export default Login