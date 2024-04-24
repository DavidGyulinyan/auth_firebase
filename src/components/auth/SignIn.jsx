import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signin-container">
      <form onSubmit={signIn}>
        <h1>Log in</h1>
        <input
          type="email"
          placeholder="enter the email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter the password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">sing in</button>
      </form>
    </div>
  );
};

export default SignIn;
