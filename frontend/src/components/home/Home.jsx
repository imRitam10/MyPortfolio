import React, { useEffect } from "react";
import "./Home.css";
import TimeLine from "../TimeLine/TimeLine";
import { Typography } from "@mui/material";
import {
	SiJava,
	SiReact,
	SiJavascript,
	SiMongodb,
	SiNodedotjs,
	SiExpress,
	SiCss3,
	SiHtml5,
	SiGit,
	SiGithub,
} from "react-icons/si";
import { MouseOutlined } from "@mui/icons-material";

const Home = ({ timelines, skills }) => {
	useEffect(() => {
		return window.addEventListener("scroll", () => {
			const skillsBox = document.getElementById("homeskillsBox");

			if (window.scrollY > 1300)
				skillsBox.style.animationName = "homeskillsBoxAnimationOn";
			else skillsBox.style.animationName = "homeskillsBoxAnimationOff";
		});
	}, []);
	return (
		<div className="main">
			<div class="well" id="well">
				<div id="intro" class="panel">
					<div class="intro-content">
						<div class="row">
							<h3>Hello, World.</h3>
							<h1>I'm Ritam Bhadra.</h1>
							<p class="intro-position">
								<span>ENGINEER</span>
								<span>THINKER</span>
								<span>WANDERER</span>
							</p>
						</div>
					</div>
					<div class="stars"></div>
					<div class="twinkling"></div>
				</div>
				<div className="homeScrollBtn">
					<MouseOutlined />
				</div>
				<div className="homeContainer">
					<Typography variant="h3">TIMELINE</Typography>
					<TimeLine timelines={timelines} />
				</div>

				<div className="homeSkills">
					<Typography variant="h3">SKILLS</Typography>

					<div className="homeCubeSkills">
						<div className="homeCubeSkillsFaces homeCubeSkillsFace1">
							<img src={skills.image1.url} alt="Face1" />
						</div>

						<div className="homeCubeSkillsFaces homeCubeSkillsFace2">
							<img src={skills.image2.url} alt="Face2" />
						</div>

						<div className="homeCubeSkillsFaces homeCubeSkillsFace3">
							<img src={skills.image3.url} alt="Face3" />
						</div>

						<div className="homeCubeSkillsFaces homeCubeSkillsFace4">
							<img src={skills.image4.url} alt="Face4" />
						</div>

						<div className="homeCubeSkillsFaces homeCubeSkillsFace5">
							<img src={skills.image5.url} alt="Face5" />
						</div>

						<div className="homeCubeSkillsFaces homeCubeSkillsFace6">
							<img src={skills.image6.url} alt="Face6" />
						</div>
					</div>

					<div className="cubeShadow"></div>

					<div className="homeskillsBox" id="homeskillsBox">
						<SiJava />
						<SiHtml5 />
						<SiCss3 />
						<SiJavascript />
						<SiMongodb />
						<SiExpress />
						<SiReact />
						<SiNodedotjs />
						<SiGit />
						<SiGithub />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
