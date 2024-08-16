import { Logo } from "./Logo";
import GitHub from '../assets/github.svg';
import Telegram from '../assets/tg.svg';
import Cats from '../assets/fire.gif'

export const Footer = () => {
  return ( 
    <footer className=" pt-14 pb-7">
      <div className="container flex flex-col gap-12">
        <div className="flex justify-between items-center">
          <Logo color='blue-light'/>
          <div className="flex flex-col items-center gap-6 ml-[116px] mr-auto">
            <div className="text-center text-sm italic font-medium text-blue-light-gray">
              <p>Вы наткнулись на привал котиков.</p>
              <p>Они приглашают 
              вас присесть и немного отдохнуть с ними.</p>
            </div>
            <img src={Cats} alt="cats" className="w-[180px]" />
          </div>
          <ul className="flex gap-5 items-center">
            <li>
              <a href="https://github.com/kittoru" target="_blank" className="p-0">
                <img src={GitHub} alt="github"/>
              </a>
            </li>
            <li>
              <a href='https://t.me/kittoruFromHell' target="_blank" className="p-0">
                <img src={Telegram} alt="telegram"/>
              </a>
            </li>
          </ul>
        </div>
        <p className="text-base text-blue-light-gray/80 font-light text-center">Portfolio 2024</p>
      </div>
    </footer>
   );
};