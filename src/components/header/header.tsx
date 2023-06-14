import React from "react";
import logo from "assets/logo.svg";
import bandeira from "assets/bandeira.svg";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlinePhone,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import "./header.scss";

interface IHeaderprops{
  address:string;
  phone:string;
}
function Header({address, phone}:IHeaderprops) {
  const countries: string[] = ["en", "pt-br", "us"];
  return (
    <header>
      <img src={logo} alt="logo" />
      <div className="header-location">
        <CiLocationOn id='locationicon'/>
        <p>
          <span id='deliver'>Deliver to</span> <br/> <span id='address'>{address}</span>
        </p>
      </div>
      <div className="header-search">
        <AiOutlineSearch color="" id='lupa'/>
        <input type="search" name="search" id="" placeholder="Search" />
      </div>
      <div className="header-country">
        <img src={bandeira} alt="bandeira" />
        <select name="countries" id="">
          {countries.map((country) => (
            <option value={country}>{country}</option>
          ))}
        </select>
      </div>
      <div className="header-login header-iconbox">
        <AiOutlineUser />
        <p>Sign Up/Sign In</p>
      </div>
      <div className="header-phone header-iconbox">
        <AiOutlinePhone />
        <p>{phone}</p>
      </div>
      <div className="header-cart header-iconbox">
        <AiOutlineShoppingCart />
        <p>Cart</p>
      </div>
    </header>
  );
}

export default Header;
