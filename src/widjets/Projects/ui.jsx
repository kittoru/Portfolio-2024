import { arrProjects, Card, Title } from "../../shared";


export const Projects = () => {

  const list = arrProjects.map((item) => {
    return <li><Card key={item.id} id={item.id} img={item.img} title={item.title} tech={item.tech} description={item.descriprion} link={item.link}/></li>
  })

  return ( 
    <section className="container mt-16 mb-28 m565:mb-16" name='Projects'>
      <Title text='Проекты'/>
      <div className="flex justify-between items-center mt-5 text-xl text-blue-base">
        <p className="italic font-light m905:text-base">Это немного, но это честная работа</p>
        {/* <div className="flex gap-9 items-center">
          <p>фильтр</p>
          <p>сортировка</p>
        </div> */}
      </div>
      <ul className="mt-12 flex flex-wrap gap-x-[30px] xl:gap-x-[20px] gap-y-[40px] max-md:justify-center m565:gap-x-4 m565:gap-y-5 m805:mt-7">
        {list}
      </ul>
      
    </section>
  );
};