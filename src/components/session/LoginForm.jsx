
const LoginForm =()=> {
 return(
    <div class="Card">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required/>

        <label for="email"><b>Email</b></label>
        <input type="email" placeholder="Enter Email" name="email" required/>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>

        <button type="submit">Create Account</button>
    </div>
   )
}


export default LoginForm


  