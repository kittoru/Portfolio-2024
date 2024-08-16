
import Fun from '../../shared/assets/works.gif';

export const Description = () => {
  return ( 
    <section className="container mt-24 flex justify-between items-center">
      <div className="">
        <img src={Fun} alt="img" className='w-[500px]'/>
      </div>
      <div className="text-lg text-blue-base font-medium w-[635px] indent-5">
        <p className="">  Разрабатывать что-то весело, особенно, когда ты этого ещё не умеешь :)</p>
        <p className="">На своём недолгом пути начинающего frontend-разработчика я уже успела поверстать обычные странички html+css. Это было весело, но разрабатывать собственные SPA и приложения на React оказалось намного круче!</p>
      </div>
    </section>
  );
};