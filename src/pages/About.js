// packages
import React from 'react'

import '../_styles/about.css'

// components
import Header from '../_templates/Header'
import Footer from '../_templates/Footer'

// assets
import un_sdg_04 from '../_assets/UN_sustainable_development_goals/E_WEB_04.png'
import un_sdg_07 from '../_assets/UN_sustainable_development_goals/E_WEB_07.png'
import un_sdg_09 from '../_assets/UN_sustainable_development_goals/E_WEB_09.png'
import un_sdg_11 from '../_assets/UN_sustainable_development_goals/E_WEB_11.png'
import un_sdg_12 from '../_assets/UN_sustainable_development_goals/E_WEB_12.png'
import un_sdg_13 from '../_assets/UN_sustainable_development_goals/E_WEB_13.png'
import un_sdg_17 from '../_assets/UN_sustainable_development_goals/E_WEB_17.png'
import shell_logo from '../_assets/icons/shell.png'
import team_seier_image from '../_assets/photos/team_seier.jpeg'

export default function About() {
	return (
		<>
			<Header />
			<section>
				<div className="grid">
					<div className="two-thirds">
						<h2>The DNV GL Fuel Fighter team</h2>
						<p>DNV GL Fuel Fighter is a technical student organization at NTNU working with the goal of making the world’s most energy efficient electric car. For 13 years we have been competing in the world’s leading student competition on energy efficiency, the Shell Eco Marathon. With several accomplishments through the years, we are always competing for the first place in the Urban Concept battery electric class, as well as challenging the communication, innovation and design awards. The last two years we have also started developing an autonomous system for the car, for competing in the Shell Eco Marathon Autonomous competition.</p>
						<p>The team consists of more than 40 students from multiple fields of study at NTNU. We have students from 1st to 5th year, and exchange students from countries like Spain, Germany and France. Being a part of the team gives you valuable teamwork experience, and it is a great opportunity to get to try theory in practice. We design and produce everything on our car ourselves, except for the battery and motors. This includes working with PCB design, 3D modelling, composite work, CFD analysis and much more. The students run every aspect of the organization, from financials, marketing and sponsorships to general organizational work. Every year we also have master and bachelor students writing their thesis on the car.</p>
					</div>
				</div>
				<img className="image-full_width" src={team_seier_image} alt="the team is celebrating"/>
			</section>
			<section className="bg-grey">
				<div className="grid">
					<div className="two-thirds">
						<h2>UN Sustainable Development Goals</h2>
						<p>Our motto is “inspire for a sustainable future”. We want to show that working on a project can be done with an environmental mindset, and that the electric car is the future. With more focus on energy efficiency, electric cars can increase their range a lot more than what current models can achieve. To help stop the climate changes within 2030, we focus our work around seven of UN’s 17 sustainable development goals.</p>
					</div>
				</div>
				<div id="about-un_goals" className="grid">
					<a href="https://www.theexplorer.no/goals/quality-education/"><img alt="UN Sustainable Development Goal 4" src={un_sdg_04} /></a>
					<a href="https://www.theexplorer.no/goals/affordable-and-clean-energy/"><img alt="UN Sustainable Development Goal 7" src={un_sdg_07} /></a>
					<a href="https://www.theexplorer.no/goals/industry-innovation-and-infrastructure/"><img alt="UN Sustainable Development Goal 9" src={un_sdg_09} /></a>
					<a href="https://www.theexplorer.no/goals/sustainable-cities-and-communities/"><img alt="UN Sustainable Development Goal 11" src={un_sdg_11} /></a>
					<a href="https://www.theexplorer.no/goals/responsible-consumption-and-production/"><img alt="UN Sustainable Development Goal 12" src={un_sdg_12} /></a>
					<a href="https://www.theexplorer.no/goals/climate-action/"><img alt="UN Sustainable Development Goal 13" src={un_sdg_13} /></a>
					<a href="https://www.theexplorer.no/goals/partnerships-for-the-goals/"><img alt="UN Sustainable Development Goal 17" src={un_sdg_17} /></a>
				</div>
			</section>
			<section>
				<div className="grid">
					<div className="two-thirds">
						<h2>Shell Eco Marathon</h2>
						<img width={150} alt="Shell" src={shell_logo} />
						<p>The Shell Eco Marathon is the world’s leading student engineering competition on energy efficiency. More than 200 teams from all around the world compete to make the most energy efficient car possible. The cars are divided into two classes: prototype and urban concept. Each of these classes contain three subclasses based on their source of power: Hydrogen, Battery Electric and Internal Combustion. The prototype cars are designed mainly with the aerodynamics in mind. DNV GL Fuel Fighter has only made one prototype car, that only competed in 2014 getting a 7th place finish. We feel it is more relevant for the future to design an urban concept car, that should simulate a future city car. This means that the car needs windshield wipers, indicators, horn etc. For every lap around the track the urban concept cars must stop, to simulate city driving. In the Urban Concept Battery Electric class the ranking is based on number of kilometers driven on 1 kWh (km/kWh). The Norwegian record, set by us in 2019, is 181 km/kWh.</p>
						<p><a target="_blank" rel="noopener noreferrer" className="read-more" href="https://www.makethefuture.shell/en-gb/shell-eco-marathon">Visit Shell Eco Marathon</a></p>
					</div>
				</div>
			</section>
			<section className="bg-grey">
				<div className="grid">
					<div className="two-thirds">
						<h2>Questions and answers</h2>

						<div className="about-qna">
							<p>Will i get any credits by attending?</p>
							<p>The short answer is yes! DNV GL Fuel Fighter is a subject you can attend and you will get 7.5 credits. To make sure your specific study accepts this subject you should talk to your supervisor.</p>
						</div>

						<div className="about-qna">
							<p>Do I need any prior knowledge to be able to apply to the team?</p>
							<p>While it is not required to have any spesific prior knowledge it helps alot if you have any knowledge or is about to gain knowledge relevant for your desired position.</p>
						</div>

						<div className="about-qna">
							<p>How many hours a week do you work?</p>
							<p>The amount of work depends on your part and the stage in the project. A general rule of thump is 15 hours a week, but we also have dedicated people working up to 40+ hours. When you get into the project and have fun, you don’t care about hours. With real commitment to the team you will have an amazing year and get the most out of the experience.</p>
						</div>

						<div className="about-qna">
							<p>Do you only compete in efficiency?</p>
							<p>No, there is several off-track awards we can win. The ones we work towards is the Communication Award (marketing), the Vehicle Design Award (we got 1st place in 2019) and the Innovation Award.<br/><br/>In addition to this we are working on making the car autonomous to compete in the Shell Eco Marathon Autonomous challenge. The future city car is not only super-efficient, but also self-driving!</p>
						</div>

						<div className="about-qna">
							<p>How fast do you drive?</p>
							<p>The goal of Shell Eco Marathon is to drive as efficient as possible. Driving fast is not efficient. The driving strategy we have used the past years is based on something called coasting. The principle is to accelerate up to a given speed and let the car roll as far as possible before accelerating again. With this tactic, almost no electrical energy is used during the rolling. Since our car is light and aerodynamic, we can roll several hundred meters.</p>
						</div>

						<div className="about-qna">
							<p>Why compete in the Urban Concept Battery Electric class?</p>
							<p>The reason we are competing in the Urban Concept class is because we feel it can be the future of city car transportation. Cars these days are big and not suited for the cities of the future. As a power source, we believe battery electric is the way to go, and it has already started. Cars like Tesla have become super popular the last few years, but there is still a lot to improve on efficiency and range.</p>
						</div>

						<div className="about-qna">
							<p>This project sounds amazing, how can I be a part of it?</p>
							<p>Visit our <a href="https://www.fuelfighter.no/join">join</a> page and apply!</p>
						</div>

						<div className="about-qna">
							<p>Do you still have a question?</p>
							<p>Contact our team leader at <a href="mailto:leder@fuelfighter.no" >leder@fuelfighter.no</a></p>
						</div>

					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}