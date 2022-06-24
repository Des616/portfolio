
import './App.css';
import React from 'react';
import { FaGithub, FaHtml5, FaReact, FaUnity, FaJs, FaCss3, FaArrowsAltV } from 'react-icons/fa';
import { AiFillMail, AiFillLinkedin, } from 'react-icons/ai';
import { SiCplusplus, SiCsharp } from 'react-icons/si';
import curtainImg from './curtain1.png';
//force the page to the top to make sure you dont get stuck below the curtain
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
function App() {
  //maybe use this for alternate curtain implementation
  //const [curtainIsUp, setCurtainIsUp] = React.useState(false);

  return (
    <div className="App">


      <NavBar />
      <WelcomeSection />
      <Curtain />

      <div id="projects">
        <h3 id="Projects-title">Some of my Projects</h3>
        <div className="testContainer">
          <ClickableComponent techs={["Unity  ", <FaUnity />, " C#  ", <SiCsharp />]} desc="Front end designer and developer for the indie game Knights, developed in Unity and released in June 2021." img="https://img.itch.zone/aW1hZ2UvOTk3NDcwLzU5ODYxNDYucG5n/original/D%2FLmtB.png" imgAlt="Knights Preview" title="Knights" link="https://abomination-games-studio.itch.io/knights" />
          <ClickableComponent techs={["Html  ", <FaHtml5 />, "CSS  ", <FaCss3 />]} desc="I created a google clone using just html and css" img="https://gyazo.com/bc10aa6d7e2b4e2915772e2efc5dc157.png" imgAlt="Google Clone Preview" title="Google Clone" link="https://htmlpreview.github.io/?https://github.com/Des616/GoogleClone/blob/main/index.html" />
          <ClickableComponent techs={["React  ", <FaReact />, " CSS  ", <FaCss3 />, " JavaScript ", <FaJs />]} desc="Created this pomodoro countdown using React.js. I used this project to learn about the useEffect hook as well as intervals" img="https://i.gyazo.com/04043872fce099543c4dd37099045e2a.png" imgAlt="Pomodoro Preview" title="Pomodoro Timer" link="https://codepen.io/des616/full/wvyYovL" />


        </div>
        <div className="testContainer">
          <ClickableComponent techs={["Html  ", <FaHtml5 />, "CSS  ", <FaCss3 />]} desc="Just a simple survey form made from different html elements" img="https://i.gyazo.com/c7a3fe00a122ede9e49e823d924653a3.png" imgAlt="survery form preview" title="Survey Form" link="https://htmlpreview.github.io/?https://github.com/Des616/SurveyForm/blob/main/index.html" />
          <ClickableComponent techs={["Javascript  ", <FaJs />]} desc="Creates an infinite randomized forest using javascript and the p5js library" img="https://i.gyazo.com/6284215f825c1c007a26ef73f5ca33e3.png" imgAlt="Infinite Forest Preview" title="Infinite Forest Generator" link="https://forest-things.glitch.me" />
          <ClickableComponent techs={["React  ", <FaReact />, " CSS  ", <FaCss3 />, " HTML ", <FaHtml5 />, " JavaScript ", <FaJs />]} desc="Created this portfolio from scratch using React.js" img="https://i.gyazo.com/12774fae1913e10601fd7a1ecd6d2405.png" imgAlt="Portfolio Preview" title="Portfolio" link="#welcome-section" />
        </div>


      </div>
      <ContactMe />




    </div>
  );
}

function NavBar() {
  return (
    <nav>
      <div id="navbar">
        <a href="#contact-me" className="nav-link">Contact me</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#welcome-section" className="nav-link">Welcome</a>
      </div>
    </nav>
  );
}
//project links in the project section
function ClickableComponent(props) {
  const [isExpanded, setIsExpanded] = React.useState(false);


  function expandPreview() {
    setIsExpanded(!isExpanded);
  }




  return (

    <div id="projectBox" >
      <a href={props.link} target="_blank" rel="noreferrer" className="picLink">
        <img src={props.img} className="grid-image" alt={props.imgAlt} />
      </a>
      <h2 className="projectTitle" >{props.title}</h2>
      <div className={!isExpanded ? "testWrapper shrunkenBox" : "testWrapper expandedBox"} >
        <h4 className="subTitle">Technologies Used:</h4>
        <p className="projectDesc">{props.techs}</p>

        <h4 className="subTitle">Description:</h4>
        <p className="projectDesc">{props.desc}</p>
      </div>

      <button className="expandRetractButton" onClick={expandPreview} ><FaArrowsAltV /></button>

    </div>

  );
}


function WelcomeSection() {
  return (
    <div id="welcome-section">
      <h1>Nate</h1>
      <h3> Front End Web and Game developer</h3>

      <div id="skills-wrapper" >
        <span id="skills"><FaUnity /> <FaReact /> <FaHtml5 /> <FaGithub /> <FaJs /> <FaCss3 /> <SiCplusplus /> <SiCsharp /></span>
      </div>

    </div>
  );
}
function ContactMe() {
  return (
    <div id="contact-me">
      <div id="contact-links" >
        <h3>Lets get in touch!</h3>
        <a href="https://github.com/Des616" className="contact-link" id="profile-link" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
        <a href="mailto: npentico16@gmail.com" className="contact-link" id="email-link"><AiFillMail />npentico16@gmail.com</a>
        <a href="https://www.linkedin.com/in/nathaniel-pentico-6b2275216/" className="contact-link" id="linkedIn-link"><AiFillLinkedin />LinkedIn</a>
      </div>
    </div>
  );
}
function Curtain() {
  const [yOffSet, setyOffset] = React.useState(0);
  const [isMoving, setIsMoving] = React.useState(false);
  const [intervalId, setIntervalId] = React.useState(null);


  // stop moving curatin when its high enough to be out of frame
  React.useEffect(() => {
    if (yOffSet < -1 * window.innerHeight) {
      setIsMoving(false);
      clearInterval(intervalId);
      setIntervalId(null);

    }
  }, [yOffSet, intervalId]);

  function handleCurtainClick() {
    //show side scroll bar
    document.body.style.overflowY = "visible";
    if (!isMoving) {
      setIsMoving(true);
      raiseCurtain();

    }

  }
  //uses interval to raise the curtain
  function raiseCurtain() {
    if (intervalId === null) {
      const id = setInterval(() => {
        setyOffset((yOffSet) => yOffSet - 3);
      }, 1);
      setIntervalId(id);
    }
  }



  return (
    <div id="curtainBoxes">
      <div id="boxShape" className="curtain" onClick={handleCurtainClick} style={{ top: `${yOffSet}px` }}>
        <img src={curtainImg} className="curtainPic" alt="cImg" />

      </div>
      <div id="boxShape2" className="curtain" onClick={handleCurtainClick} style={{ top: `${yOffSet}px` }} >
        <img src={curtainImg} className="curtainPic" alt="cImg" />
      </div>
      <h3 className="curtainText" style={{ top: `${yOffSet}px` }} onClick={handleCurtainClick}>Welcome</h3>
    </div >

  )
}

export default App;
