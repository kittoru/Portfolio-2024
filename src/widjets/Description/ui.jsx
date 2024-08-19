
import Fun from '../../shared/assets/works.gif';

export const Description = () => {
  return ( 
    <section className="container mt-24 flex justify-between items-center m650:justify-center m650:mt-16">
      <div className="m650:hidden">
        <img src={Fun} alt="img" className='w-[500px] max-sm:w-[300px]'/>
      </div>
      <div className="text-lg text-blue-base font-medium w-[635px] indent-5 m905:w-[500px] m905:text-base m805:w-[450px] m650:w-full">
        <p className="">  Разрабатывать что-то весело, особенно, когда ты этого ещё не умеешь :)</p>
        <p className="">На своём недолгом пути начинающего frontend-разработчика я уже успела поверстать обычные странички html+css. Это было весело, но разрабатывать собственные SPA и приложения на React оказалось намного круче!</p>
      </div>
    </section>
  );
};