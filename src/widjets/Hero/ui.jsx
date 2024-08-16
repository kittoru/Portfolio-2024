
import Me from '../../shared/assets/me.gif';

export const Hero = () => {
  return ( 
    <section className="container flex justify-between items-center mt-40">
      <div className="flex flex-col gap-5">
        <p className="text-5xl font-bold text-blue-light">Привет, я Лиза и я люблю разрабатывать крутые вещи!</p>
        <p className="ml-96 text-xl font-normal text-blue-light-gray">даже, если иногда из-за них я плачу...</p>
      </div>
      <div className="">
        <img src={Me} alt="img" />
      </div>
    </section>
   );
};