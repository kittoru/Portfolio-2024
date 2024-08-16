

export const Pill = ( { text } ) => {
  return ( 
    <div className="px-5 py-1 border-[2px] border-blue-light-gray rounded-full cursor-default">
      <p className="text-base text-blue-light-gray font-medium">{text}</p>
    </div>
   );
};