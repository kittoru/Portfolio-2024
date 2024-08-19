import { Logo } from "./Logo";
import './Header.css';
import { Link } from "react-scroll";


export const Header = () => {
  return ( 
    <header className="container mt-5 flex justify-between items-center" name='Header'>
      <Logo Link='header' />
      <nav className="">
        <ul className="flex gap-14 items-center text-xl font-regular m805:text-lg m805:gap-10 m565:text-sm m565:gap-3 mini:text-xs mini:gap-2 ">
          <li>
            <Link to="About"  className="header__link" offset={-100} smooth={true} duration={1000}>Обо мне</Link>
          </li>
          <li>
          <Link to="Projects"  className="header__link" offset={-100} smooth={true} duration={1000}>Проекты</Link>
          </li>
        </ul>
      </nav>
    </header>
   );
}
 