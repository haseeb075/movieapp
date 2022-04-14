import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/user.png";
import "./Header.scss";
import { CustomSelect } from "../Select/CustomSelect";

const options = [
  { label: "React", value: "react" },
  { label: "ReactNative", value: "react-native" },
  { label: "JS", value: "js" },
];

const onChangeInput = (value) => {
  return(
    console.log("onChangeInputValue",value)

  )
}


export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <CustomSelect label="Choose Movies" options={options} defaultValue={options[3]} onChange={onChangeInput} />
      <div className="user-image">
        <img src={Logo} alt="user" />
      </div>
    </div>
  );
}
