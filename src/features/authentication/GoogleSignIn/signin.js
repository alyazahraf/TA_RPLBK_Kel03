import React, { useEffect } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { set } from "date-fns";
import LoginForm from "../LoginForm";
import Login from "../../../pages/Login";

function SignIn() {
    const [value, setValue] = useState("");
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            localStorage.setItem("email", data.user.email);
        }).catch((error) => {
            alert(error.message);
        });
    };

    useEffect(() => {
        setValue(localStorage.getItem("email"));
    });

    return (
        <div className="signin">
            {value ? <Login /> :
                <button onClick={handleClick}>Sign In with Google</button>}
        </div>
    );
}

export default SignIn;