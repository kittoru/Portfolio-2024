import { NavLink, Outlet } from "react-router-dom";
import './style.css';
import { Title } from "../../shared";


export const About = () => {
  return ( 
    <section className="container mt-24" name='About'>
      <div className="flex flex-col gap-7">
        <Title text='Обо мне'/>
        <ul className="flex gap-5 text-lg font-normal">
          <li>
            <NavLink to={'/'} className={`base ${({isActive}) => {return isActive? 'active' : ''}}`}>Технологии</NavLink>
          </li>
          <li>
            <NavLink to={'/experience'} className={`base ${({isActive}) => {return isActive? 'active' : ''}}`}>Опыт работы</NavLink>
          </li>
          <li>
            <NavLink to={'/education'} className={`base ${({isActive}) => {return isActive? 'active' : ''}}`}>Образование</NavLink>
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <Outlet />
      </div>
    </section>
   );
};