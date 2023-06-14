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
import { Input, Select, SelectProps } from "antd";

interface IHeaderprops {
  address: string;
  phone: string;
}
function Header({ address, phone }: IHeaderprops) {
  const countries: SelectProps['options'] = [
    {
      value: 'pt-br', 
      label: 'Brazil'
    },
    {
      value: 'english',
      label: 'United Kingdom'
    },
    {
      value: 'english-us',
      label: 'United States'
    }
  ];
  return (
    <header>
      <img src={logo} alt="logo" />
      <div className="header-location">
        <CiLocationOn id="locationicon" />
        <p>
          <span id="deliver">Deliver to</span> <br />{" "}
          <span id="address">{address}</span>
        </p>
      </div>
      <div className="header-search">
        <Input className="search" prefix={<AiOutlineSearch color='#a3a3a3'/>} placeholder='Search'/>
      </div>
      <div className="header-country">
        <Select className='Select' options={countries} placeholder='Select a country'/>        
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
