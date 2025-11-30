import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Login(){
    const navigate = useNavigate();
    const {loginHandler} = useContext(UserContext);

    const submitHandler = async ({email, password}) => {

    // After second exerise way with formData without real state management
        // e.preventDefault();
        // const formData = new FormData(e.target);

        // const email = formData.get('email');
        // const password = formData.get('password');

        //Validation

        if(!email || !password){
            return alert('All fields are required!');
        };

        try {
            //Login user
            await loginHandler(email, password);
            navigate('/'); 
            
        } catch (error) {
            alert(error.message);
        }
        
    };

    const {
        register,
        formAction,
    } = useForm(submitHandler, {
        email: '',
        password: ''
    }   
    )

    return (
        <section id="login-page"> 
             {/* controlled form submission */}
            <form id="login" action={formAction}> 
                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register('email')} placeholder="Your Email"/>

                    <label htmlFor="login-pass">Password</label>
                    <input type="current-password" id="login-password" {...register('password')} placeholder="Password"/>
                    <input type="submit" className="btn submit" value="Login"/>
                </div>
            </form>
        </section>
    );
}