import CircularCarousel from "./CircularCarousel";
import Menu from "./Menu";



const slides = [
  {
  img:"https://tse3.mm.bing.net/th?id=OIP.w8UT2mw4R1XlAsAcayB-IAHaE8&pid=Api&P=0&h=220",
  title:"Lord Buddha"
  },
  {
  img:"https://kailashjourneys.com/wp-content/uploads/2017/03/chardham_yatra_2014.jpg",
  title:"Shiva Temple"
  },
  {
  img:"https://tse2.mm.bing.net/th?id=OIP.SGH0GaVV_5djzEgJTVjnwwHaEK&pid=Api&P=0&h=220",
  title:"Jagannath Yatra"
  },
  {
  img:"https://i.ytimg.com/vi/1qLM6Bh7adk/maxresdefault.jpg",
  title:"Kedarnath Temple"
  },
  {
  img:"https://tse2.mm.bing.net/th?id=OIP.b0EusVfFss3CCaJuzrH0FAHaFY&pid=Api&P=0&h=220",
  title:"Vrindavan Chandrodaya Mandir"
  },
  
  
  
  
];

function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Menu />

      <div className="grow pt-10  space-y-32 px-20">

        <div className="w-full h-28 flex-col justify-start items-center  lg:gap-6 flex">
          <h1 className="text-stone-800 text-3xl lg:text-6xl font-bold  leading-10 whitespace-nowrap ">
            Featured Products
          </h1>
          <h2 className="w-full text-center text-stone-800 text-sm sm:text-lg lg:text-2xl font-normal leading-loose">
            Explore and discover a variety of products
          </h2>
        </div>

        <CircularCarousel slides={slides} />

      </div>
    </div>
  );
}

export default App;
