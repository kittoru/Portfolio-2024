import './Animation.css';
import Panic from '../assets/panic.jpg';

export const Work = () => {
  return ( 
    <div className="flex flex-col items-center justify-center gap-8 work__content">
      <p className="text-blue-light-gray text-base font-medium italic">Ой, а опыта-то нет</p>
      <img src={Panic} alt="panic" className='max-w-[282px]' />
    </div>
   );
}
