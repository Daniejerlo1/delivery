import React from "react";
import { Menu, MenuProps } from "antd";
import { RiArrowDownSLine } from 'react-icons/ri'
import { group } from "console";
import './nav.scss'

function Nav() {
  const navItems: MenuProps["items"] = [
    {
      key: 'todays',
      label: "Today's deals",
    },
    {
      key: 'offers',
      label: "Offers",
    },
    {
      key: 'giftcards',
      label: "Gift Cards",
    },
    {
      key: 'premiumfruits',
      label: <span>Premium Fruits <RiArrowDownSLine color='#0D988C'/></span>,
      children: [
        {
          key: 'premiumfruits-first',
          label: 'a'
        },
        {
          key: 'premiumfruits-second',
          label: 'b'
        }
      ]
    },
    {
      key: 'homeandkitchen',
      label: <span>Home &amp; Kitchen <RiArrowDownSLine color='#0D988C'/></span>,
    },
    {
      key: 'fashion',
      label: <span>Fashion <RiArrowDownSLine color='#0D988C'/></span>,
    },
    {
      key: 'electronics',
      label: <span>Electronics <RiArrowDownSLine color='#0D988C'/></span>,
    },
    {
      key: 'healthandpersonalcare',
      label: <span>Health &amp; Personal Care <RiArrowDownSLine color='#0D988C'/></span>,
    },
  ];
  return <Menu className='Menu' mode='horizontal' items={navItems} />;
}

export default Nav;
