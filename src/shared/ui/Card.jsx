


export const Card = ( { img, title, tech, description, link } ) => {
  return ( 
    <div className="flex flex-col gap-5 pt-[14px] pb-[25px] px-[14px] bg-white shadow-xl shadow-blue-light-gray/20 hover:hover:shadow-blue-light/40 border border-[#F1F5F9] rounded-[10px] m565:w-[230px]">
      <a href={link} target="_blank" className="p-0">
        <div className="w-[365px] h-[254px] shadow-lg shadow-blue-light-gray/20 hover:shadow-blue-light/40 rounded-3xl m905:w-[300px] m905:h-[208px] m565:w-[200px] m565:h-[138px]">
          <img src={img} alt="img" className="rounded-3xl" />
        </div>
      </a>
      
      <div className="flex flex-col gap-4 px-1 m565:gap-2">
        <a href={link} target="_blank" className="p-0">
          <h3 className="text-xl text-blue-base font-bold hover:underline m565:text-lg">{title}</h3>
        </a>
        <p className="text-sm text-blue-light-gray font-normal m565:text-xs">{tech}</p>
        <div className="flex justify-between items-center mt-3 m565:flex-col m565:justify-normal m565:items-start m565:mt-0 m565:gap-5">
          <p className="text-base font-medium text-blue-base m565:text-sm ">{description}</p>
          <div className="">
            <a href={link} target="_blank" className="py-4 px-5 text-sm font-bold text-white uppercase bg-blue-light hover:bg-white hover:border-[2px] hover:border-blue-light hover:text-blue-light rounded-xl m565:text-xs m565:px-[67px] m565:py-3 ">Перейти</a>
          </div>
        </div>
      </div>
    </div>
   );
};