import { Footer, Header } from "../../shared";
import { About, Description, Hero, Projects } from "../../widjets";


export const MainPage = () => {
  return ( 
    <div className="">
      <Header/>
      <main>
        <Hero/>
        <Description/>
        <About/>
        <Projects/>
      </main>
      <Footer/>
    </div>
   );
}
 