import Hero from "./sections/Hero";
import Who from "./sections/Who";
import Featured from "./sections/Featured";
import Know from "./sections/Know";
import Services from "./sections/Services";
import Why from "./sections/Why";
import SuccessStories from "./sections/SuccessStories";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Who />
      <Featured />
      <Know />
      <Services />
      <Why />
      <SuccessStories />
      <Contact />
      {/* <Form /> */}
    </main>
  );
}
