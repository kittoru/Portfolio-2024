import { arrSkills } from "../model/constants";
import { Pill } from "./Pill";
import './Animation.css';


export const Skills = () => {
  const list = arrSkills.map((index) => {
    return <li key={index}><Pill text={index} /></li>;
  })

  return ( 
    <ul className="flex gap-4 flex-wrap skills__list">
      {list}
    </ul>
   );
};