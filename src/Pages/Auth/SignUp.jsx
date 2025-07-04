import Layout from "Layouts/Layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "Redux/Slices/AuthSlice";


export default function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authState = useSelector((state)=>state.auth);

    const [signUpDetails, setSignUpDetails] = useState({
            username: '',
            email: '',
            password: ''
        });
    
    function handleOnFormChange(e){
        const {name, value} = e.target;
        setSignUpDetails({
            ...signUpDetails,
            [name]: value
        });
    }

    function resetForm(){
        setSignUpDetails({
            username: '',
            email: '',
            password: ''
        });
    }

    async function onFormSubmit(e){
        e.preventDefault();
        const response = await dispatch(signup(signUpDetails));
        if(response?.payload?.data){
            navigate("/signin");
        }
        resetForm();
    }

    useEffect(()=>{
        if(authState.isLoggedIn){
            navigate("/dashboard");
        }
    }, []);

    return (
        <Layout>
            <div className="h-[100vh] flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-white text-5xl">Create a new account</h1>
                </div>
                <div className="mt-4">
                    <p className="text-white">
                        Already have an account ? 
                        <Link to="/signin">
                            <button className="btn btn-success rounded-md px-2 mx-5 hover:bg-green-400">
                                Sign In
                            </button>
                        </Link>
                    </p>
                </div>
                <div className="w-full">
                    <form onSubmit={onFormSubmit} className="flex flex-col justify-center items-center w-3/4 mx-auto" autoComplete="off">
                        <div className="my-5 w-1/3 text-black">
                            <input
                                autoComplete="off"
                                type="text"
                                placeholder="username..."
                                className="px-8 py-3 bg-white w-full"
                                name="username"
                                value={signUpDetails.username}
                                onChange={handleOnFormChange}
                            />
                        </div>
                        <div className="my-5 w-1/3 text-black">
                            <input
                                autoComplete="off"
                                type="email"
                                placeholder="email..."
                                className="px-8 py-3 bg-white w-full"
                                name="email"
                                value={signUpDetails.email}
                                onChange={handleOnFormChange}
                            />
                        </div>
                        <div className="my-5 w-1/3 text-black">
                            <input
                                autoComplete="off"
                                type="password"
                                placeholder="password..."
                                className="px-8 py-3 bg-white w-full"
                                name="password"
                                value={signUpDetails.password}
                                onChange={handleOnFormChange}
                            />
                        </div>
                        <div className="my-5 w-1/3">
                            <button className="btn btn-success rounded-md px-2 py-1 w-full hover:bg-green-400" type="submit">
                                Submit
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </Layout>     
    );
}