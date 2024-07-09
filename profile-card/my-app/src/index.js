import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";


const skillss = [
  { skill: "Pokémon Trainer", color: "#1E90FF" },
  { skill: "Pikachu", color: "#FFD700" },
  { skill: "Adventure", color: "#32CD32" },
  { skill: "Determination", color: "#FF4500" },
  { skill: "Friendship", color: "#FF69B4" },
  { skill: "Strategy", color: "#8A2BE2" },
  { skill: "Training", color: "#00CED1" },
  { skill: "Battle", color: "#DC143C" },
  { skill: "Courage", color: "#FF8C00" }
];



function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(){
  return(
    <img className="avatar" src="profile.jpeg" alt="Ash Ketchum"></img>
  )
}

function Intro(){
  return(
    <div>
      <h1>Ash Ketchum</h1>
      <p>
        Hi, I'm Ash Ketchum from Pallet Town, and 
        I've always dreamed of becoming a Pokémon Master. 
        With my trusty Pikachu by my side, 
        I've traveled across countless regions, battling and 
        befriending a wide variety of Pokémon. My journey is fueled by a passion for adventure,
        a love for my Pokémon, and an unyielding determination to be the very best!
      </p>
    </div>
  )
}

function SkillList(){

  const skills = skillss

  return(
  <div className="skill-list">
      {skills.map(skill => (
        <Skill skillObj = {skill} />
      ))}
  </div>
  )
}

function Skill({skillObj}){
  return(
    <div className="skill" style={{backgroundColor: skillObj.color}}>
      <span> {skillObj.skill} </span>
    </div>
  )
}



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
