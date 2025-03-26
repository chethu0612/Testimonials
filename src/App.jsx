import reviews from "./data";
import Testimonial from "./components/Testimonial";


function App() {
  return (
    <>
      <div className="flex flex-col w-screen h-screen items-center justify-center bg-gray-200">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Our Testimonials</h1>
          <div className="bg-violet-400 h-1 w-1/5 mt-1 mx-auto"></div>

          {/* Displaying testimonials */}
          <Testimonial reviews={reviews} />
        </div>
      </div>
    </>
  );
}

export default App;
