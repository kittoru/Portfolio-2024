


export const Card = ( { img, title, tech, description, link } ) => {
  return ( 
    <div className="flex flex-col gap-5 pt-[14px] pb-[25px] px-[14px] bg-white shadow-xl shadow-blue-light-gray/20 hover:hover:shadow-blue-light/40 border border-[#F1F5F9] rounded-[10px]">
      <a href={link} target="_blank" className="p-0">
        <div className="w-[365px] h-[254px] shadow-lg shadow-blue-light-gray/20 hover:shadow-blue-light/40 rounded-3xl">
          <img src={img} alt="img" className="rounded-3xl" />
        </div>
      </a>
      
      <div className="flex flex-col gap-4 px-1">
        <a href={link} target="_blank" className="p-0">
          <h3 className="text-xl text-blue-base font-bold hover:underline">{title}</h3>
        </a>
        <p className="text-sm text-blue-light-gray font-normal ">{tech}</p>
        <div className="flex justify-between items-center">
          <p className="text-base font-medium text-blue-base">{description}</p>
          <div className="">
            <a href={link} target="_blank" className="py-4 px-5 text-sm font-bold text-white uppercase bg-blue-light hover:bg-white hover:border-[2px] hover:border-blue-light hover:text-blue-light rounded-xl">Перейти</a>
          </div>
        </div>
      </div>
    </div>
   );
};