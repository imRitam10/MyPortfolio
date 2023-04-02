import { Typography } from "@mui/material";
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<div>
				<Typography variant="h5">About Me</Typography>
				<Typography style={{ textAlign: "justify" }}>
					Hello, World! 🙋‍♂️ I'm Ritam, an electronics and communication
					engineering student. I'm always eager to learn new things
					and expand my horizons. If you've any exciting projects in
					mind or want to chat, reach out on{" "}
					<b style={{ color: "rgb(149, 128, 255)" }}>
						imritambhadra10@gmail.com
					</b>
				</Typography>
			</div>
			<div>
				<Typography variant="h6">Social Media</Typography>
				<a href="https://github.com/ritambhadra" target="black">
					<BsGithub />
				</a>
				<a href="https://instagram.com/ritambhadra.me/" target="black">
					<BsInstagram />
				</a>
				<a
					href="https://www.linkedin.com/in/ritambhadra/"
					target="black"
				>
					<BsLinkedin />
				</a>
			</div>
		</div>
	);
};

export default Footer;
