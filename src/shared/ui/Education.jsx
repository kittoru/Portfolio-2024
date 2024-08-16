import './Education.css';
import './Animation.css';
import Study from '../assets/marker.png'

export const Education = () => {
  return ( 
    <ul className='pl-8 flex flex-col gap-3 font-medium education__list'>
      <li>
        <img src={Study} alt="marker" className='w-[12px] h-[12px]' />
        <p>РГЭУ(РИНХ), ФКТИБ, 09.03.04 «ПРОГРАММНАЯ ИНЖЕНЕРИЯ», 2019-2024 г;</p>
      </li>
      <li>
        <img src={Study} alt="marker" className='w-[12px] h-[12px]' />
        <p>Социальная сеть "Интернет".</p>
      </li>
    </ul>
   );
};