import React from "react";
import "../Template/assets/css/main.css";

import inv from "./inv.png";
import burger from "./burger.png";
import take from "./take.png";

export const TemplateHome = () => {
  return (
    <div id="page-wrapper">
      <section id="banner">
        <div className="inner">
          <h2>About ME </h2>
          <p>
          Hey there! My name is Josh Sorensen. I'm a software developer based out of Salt Lake City, Utah with a passion for solving problems and constantly improving. When I'm not behind a keyboard, you can find me enjoying the great outdoors, building PCs or working out.
          </p>
        </div>
      </section>

      <section id="banner" className="inner">
        <div class="inner">
          <h2 class="major">My Skills</h2>
          <p>
            I am proficient in React, JavaScript, Node, Express and MongoDB. I
            have a proven ability to deliver robust, effective solutions in
            collaborative settings under strict and often tight time
            constraints. I am passionate about tackling complex problems and
            finding elegant solutions. I thrive on the challenge of constantly
            improving my skills and staying up-to-date with the latest
            technologies.
          </p>
          <section class="features"></section>
        </div>
      </section>

      <section id="banner" className="banner2 my-work">
        <h2 className="my-work">My Work</h2>
      </section>

      <section id="wrapper">
        <section id="one" class="wrapper spotlight style1">
          <div className="inner">
            <div class="content">
              <h2 class="major">Quickcipe</h2>
              <p>
                Quickcipe is a sleek and user-friendly recipe sharing
                application that streamlines the recipe creation process,
                removing unnecessary fluff and delivering concise and
                easy-to-follow instructions. With Quickcipe, users can create
                and share recipes with ease, searching for recipes by
                ingredients, keywords, or categories, and even saving their
                favorite recipes for later use.
              </p>
              <div>
                Quickcipie was built with Node, MongoDB, Mongoose, Express and
                React.
              </div>

              <a
                href="https://quickcipe.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={burger}
                  className="rpg-img"
                  alt="burger"
                  href="https://quickcipe.herokuapp.com/"
                />
              </a>

              <a
                href="https://github.com/jxsoren/quickcipe"
                class="special"
                target="_blank"
                id="view-repo-3"
                rel="noopener noreferrer"
              >
                View Repository
              </a>
              <a
                href="https://quickcipe.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="special"
              >
                View Live
              </a>
            </div>
          </div>
        </section>

        <section id="two" class="wrapper alt spotlight style2">
          <div class="inner" id="hot-take-hq-inner">
            <a href="#" class="image">
              <img src="images/pic02.jpg" alt="" />
            </a>
            <div class="content">
              <h2 class="major">Hot Take HQ</h2>
              <p>
                Hot Take HQ is an engaging and interactive web application that
                lets users express their unique opinions on a variety of topics,
                from sports to politics to entertainment. With secure user
                authentication, users can post their 'hot takes' and see how
                they stack up against the opinions of others. Through the
                platform's agree/disagree feature, users can engage in lively
                debates and discussions, expanding their horizons and gaining
                new perspectives.
              </p>
              <div>
                Hot Take HQ was built with React, Express, Node, MongoDB, and
                Mongoose.
              </div>

              <a
                href="https://hot-take-app.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={take}
                  className="rpg-img"
                  alt="take-app"
                  href="https://hot-take-app.herokuapp.com/"
                />
              </a>

              <a
                href="https://github.com/jxsoren/hot-take-app"
                target="_blank"
                rel="noopener noreferrer"
                class="special"
              >
                View Repository
              </a>

              <a
                href="https://hot-take-app.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="special"
              >
                View Live
              </a>
            </div>
          </div>
        </section>

        <section id="three" class="wrapper spotlight style3">
          <div class="inner">
            <a href="#">
              <img src="" alt="" />
            </a>
            <div class="content">
              <h2 class="major">Retro Terminal RPG</h2>
              <p>
                This project is a fully functional, text-based role-playing game
                based on the popular video game series, Bioshock. This game is
                designed to be run inside the terminal using Node.js and
                JavaScript, and features a variety of gameplay mechanics,
                including combat, inventory management, and character
                progression.
              </p>
              <p className="retro-terminal">Retro Terminal RPG was built with Javascript and Node.</p>
            </div>
            <div className="rpg-img-container">
              <img src={inv} className="rpg-img" alt="inv" />
            </div>
            <a
              href="https://github.com/jxsoren/terminal-rpg"
              className="special"
              target="_blank"
              id="view-repo-3"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          </div>
        </section>
      </section>

      <section id="footer">
        <div className="inner">
          <ul className="contact">
            <div id="email-contact">
              <li className="icon solid fa-envelope">jxsoren@gmail.com</li>
            </div>

            <li className="icon solid linkedinIcon">
              <a
                href="https://www.linkedin.com/in/josh-sorensen/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUuQb6Cw_6s7F68QCQ8n3T8i2qp0Z-uvJL_Q&usqp=CAU"
                  alt="linkedin"
                  className="linkedin"
                />
              </a>

              <div className="link-text">
                <a
                  href="https://www.linkedin.com/in/josh-sorensen/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  josh-sorensen
                </a>
              </div>
            </li>

            <li className="icon solid githubIcon">
              <a
                href="https://github.com/jxsoren"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="github"
                  className="github"
                  src="data:image/png;base64,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"
                />
              </a>
              <div className="link-text">
                <a
                  href="https://github.com/jxsoren"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  jxsoren
                </a>
              </div>
            </li>
          </ul> 
        </div>
      </section>
    </div>
  );
};
