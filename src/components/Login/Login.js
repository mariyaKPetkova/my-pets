import { useNavigate } from 'react-router-dom';
import {useContext} from 'react'
import * as authService from '../../services/authService'
import {AuthContext} from '../../contexts/AuthContext.js'
const Login = () => {
    const {login} =useContext(AuthContext)
    const navigate = useNavigate()
    const onLogin = (e)=>{
        e.preventDefault();
 const formData = new FormData(e.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
    
    authService.login(email,password)
    .then((data)=>{
        console.log('then')
        //console.log(data);
        login(data)
        navigate('/dashboard')
       
    })
    .catch(err=>{
        console.log('catch')
        console.log(err);
    })
    }
   
    return(
        <section id="login-page" className="login">
            <form id="login-form" onSubmit={onLogin} method="POST">
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label htmlF
                        or="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                        or="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password"/>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login"/>
                </fieldset>
            </form>
        </section>
    )
}
export default Login