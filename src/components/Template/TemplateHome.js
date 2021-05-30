import React from 'react'
import '../Template/assets/css/main.css'

import inv from './inv.png'
import burger from './burger.png'
import take from './take.png'
import linkedin from './linkedin.png'


export const TemplateHome = () => {
    return(
        <div id="page-wrapper">
					<header id="header" class="alt">
						<h1><a href="index.html">Solid State</a></h1>
						<nav>
							
						</nav>
					</header>

					<nav id="menu">
						<div class="inner">
							<h2>Menu</h2>
							<ul class="links">

							</ul>
							<a href="#" class="close">Close</a>
						</div>
					</nav>


					<section id="banner">
						<div class="inner">
							<h2>About ME </h2>
							<p>Hey, there! My name is Josh. I'm a Full Stack Software Engineer and I'm currently 19 years old and living in one of the surrounding cities just outside of Salt Lake City, Utah. When I'm away from my keyboard, I'm often driving though canyons, hiking, finding spots witch amazing views, watching horror movies or attending baseball games.</p>
						</div>
					</section>

					<section id="four" class="wrapper alt style1">
								<div class="inner">
									<h2 class="major">My SKILLS</h2>
									<p>I am proficent in React, JavaScript, Node, Express and MongoDB.</p>
									<section class="features">
									
									</section>
								</div>
							</section>
					
					<section id="banner" className='banner2'>
								<h2 id="banner">My Work</h2>
					</section>

					<section id="wrapper">
							<section id="one" class="wrapper spotlight style1">
								<div className="inner">
									
									<div class="content">
										<h2 class="major">Quickcipe</h2>
										<p>Quickcipe is a user friendly recipe sharing app, that allows users to create and share recipes that are to the point and are without all of the extra fluff of traditional recipes. Quickcipe is a Full Stack web application. Quickcipe was built with Node, Javascript, MongoDB, Mongoose, Express, React and Sass.</p>
										<img src={burger} className="rpg-img" alt="burger" />
										<a href="https://github.com/jxsoren/quickcipe" class="special" target="_blank" id="view-repo-3" rel="noopener noreferrer">View Repository</a>
										<a href="#" target="_blank" rel="noopener noreferrer" class="special">View Live</a>
									</div>
								</div>
							</section>


							<section id="two" class="wrapper alt spotlight style2">
								<div class="inner">
									<a href="#" class="image"><img src="images/pic02.jpg" alt="" /></a>
									<div class="content">
										<h2 class="major">Hot Take HQ</h2>
										<p>Hot Take HQ is a user authenticated application that allows users to post "Hot Takes" (An opinion that is controversial and/or 'unpopular'). Users can also Agree or Disagree on posts that add up to a total. Hot Take HQ was built with Node, Javascript, React and CSS for styling.</p>

										<img src={take} className="rpg-img" alt="take-app" />

										<a 
											href="https://github.com/jxsoren/hot-take-app" 
											target="_blank" 
											rel="noopener noreferrer" 
											class="special"
										>View Repository</a>
										
										<a href="#" target="_blank" 
										rel="noopener noreferrer"class="special">View Live</a>
									</div>
								</div>
							</section>


							<section id="three" class="wrapper spotlight style3">
								<div class="inner">
									<a href="#" class="image"><img src="images/pic03.jpg" alt="" /></a>
									<div class="content">
										<h2 class="major">Node Rpg</h2>
										<p>A fully fuctioning Text-Based RPG based on 2K Games' Bioshock. This was made 100% in JavaScript and NodeJS. This was my first ever 'real' project in my software developing journey. </p>
										<img alt="" src="../images/circus.png"/>
									</div>
									<div className="rpg-img-container">
										<img src={inv} className="rpg-img" alt="inv" />
									</div>
										<a href="https://github.com/jxsoren/terminal-rpg" className="special" target="_blank" id="view-repo-3" rel="noopener noreferrer">View Repository</a>
								</div>
							</section>


							

					</section>


					<section id="footer">
						<div className="inner">
							<ul className="contact">
								<li className="icon solid fa-envelope">jxsoren@gmail.com</li>

								<li className="icon solid">
									<img  
										src={linkedin} 
										alt='linkedin'
										className="linkedin"
									/>
									<a
										href="https://www.linkedin.com/in/josh-sorensen/"
										rel="noopener noreferrer"
										target="_blank"
									>josh-sorensen</a>
								</li>

								<li className="icon solid">
									<img 
										alt="github"
										className="github"
										src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
									/>
									<a
										href="https://www.linkedin.com/in/josh-sorensen/"
										rel="noopener noreferrer"
										target="_blank"
									>jxsoren</a>
								</li>
							</ul>
						</div>
					</section>

			</div>
    )
}