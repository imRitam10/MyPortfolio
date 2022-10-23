import React from "react";
import { ReactNavbar } from "overlay-navbar";
import { FaUserAlt } from "react-icons/fa";
import logo from "../images/logo.png";

const Header = () => {
	return (
		<ReactNavbar
			link1AnimationTime="1.2"
			link2AnimationTime="1.7"
			navColor1="white"
			navColor2="hsl(219, 48%, 8%)"
			burgerColor="hsl(250, 100%, 75%)"
			burgerColorHover="hsl(250, 100%, 75%)"
			logo={logo}
			logoUrl="/"
			logoWidth="250px"
			logoHoverColor="hsl(250, 100%, 75%)"
			nav2justifyContent="space-around"
			nav3justifyContent="space-around"
			link1Text="Home"
			link2Text="About"
			link3Text={false}
			link4Text={false}
			link1Url="/"
			link2Url="/about"
			link1ColorHover="white"
			link1Color="HSL(250, 100%, 75%)"
			link1Size="2rem"
			link1Padding="3vmax"
			profileIcon={true}
			profileIconUrl="/account"
			ProfileIconElement={FaUserAlt}
			profileIconColor="HSL(250, 100%, 75%)"
			profileIconColorHover="white"
		/>
	);
};

export default Header;
