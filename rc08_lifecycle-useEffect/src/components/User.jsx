import React from "react";
import { useState } from "react";

const User = () => {
  const [user, setUser] = useState("");

  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <div>
      <h1>Name</h1>
      <img src="#" alt="" />
      <p>Email</p>
      <h5>DOB</h5>
      <button className="btn btn-danger">Get User</button>
    </div>
  );
};

export default User;
