import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin.js";
import styles from '../styles/styles.module.scss';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { login, loading, error } = useLogin();

    const onSubmit = async data => {
        await login(data.email, data.password);
        reset({ email: '', password: '' })
    };

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <h3> <i>Quick Contact</i> </h3>
            <input 
                type="Email" 
                {...register("Email", { required: 'required field' })}
                placeholder="Email"
                autoComplete="off"
            />
            <p>{ errors.email?.message }</p>
            <input 
                type="Password" 
                {...register("Password", { required: 'required field' })}
                placeholder="Password"
            />
            <p>{ errors.password?.message }</p>
            <button 
                className={styles.submit} type="submit"
                disabled={loading}
            > 
                Log In 
            </button>
            {error && <div>{ error }</div>}
        </form>
    );
}

export default Login;
