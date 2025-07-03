import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "Redux/Slices/AuthSlice";

export default function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signInDetails, setSignInDetails] = useState({
        email: '',
        password: ''
    });

    function handleOnFormChange(e){
        const {name, value} = e.target;
        setSignInDetails({
            ...signInDetails,
            [name]: value
        });
    }

    function resetForm(){
        setSignInDetails({
            email: '',
            password: ''
        });
    }

    async function onFormSubmit(e){
        e.preventDefault();
        const response = await dispatch(signin(signInDetails));
        if(response?.payload?.data){
            navigate("/");
        }
        resetForm();
    }

    return (
        <div className="h-[100vh] flex flex-col items-center justify-center">
            <div>
                <h1 className="text-white text-5xl">Login to your account</h1>
            </div>
            <div className="mt-4">
                <p className="text-white">
                    Do not have an account ? 
                    <Link to="/signup">
                        <button className="btn btn-success rounded-md px-2 mx-5 hover:bg-green-400">
                            Sign Up
                        </button>
                    </Link>
                </p>
            </div>
            <div className="w-full">
                <form onSubmit={onFormSubmit} className="flex flex-col justify-center items-center w-3/4 mx-auto" autoComplete="off">
                    <div className="my-5 w-1/3 text-black">
                        <input
                            autoComplete="off"
                            type="email"
                            placeholder="email..."
                            className="px-8 py-3 bg-white w-full"
                            name="email"
                            value={signInDetails.email}
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
                            value={signInDetails.password}
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
    );
}