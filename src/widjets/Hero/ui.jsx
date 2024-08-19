
import Me from '../../shared/assets/me.gif';

export const Hero = () => {
  return ( 
    <section className="container mt-40 m905:mt-32 m650:mt-24 m565:mt-20">
      <div className="flex items-center justify-between m565:justify-center m565:flex-wrap m565:gap-8">
        <div className="flex flex-col gap-5">
          <p className="text-5xl font-bold text-blue-light max-md:text-4xl max-md:w-[550px] m905:text-3xl m805:w-[390px] m650:w-[311px] m650:text-2xl m565:w-[360px]">Привет, я Лиза и я люблю разрабатывать крутые вещи!</p>
          <p className="flex justify-end text-xl font-normal text-blue-light-gray max-md:text-lg m905:text-base m650:text-sm">даже, если иногда из-за них я плачу...</p>
        </div>
        <div className="">
          <img src={Me} alt="img" className='max-md:max-w-[350px] max-sm:max-w-[315px] m905:max-w-[215px] m565:max-w-[250px]'/>
        </div>
      </div>
    </section>
   );
};