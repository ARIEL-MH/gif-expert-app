
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  //   const [counter, setCounter] = useState(10);
  // setCounter(counter+1) ciclo infinito
  const {images, isLoading} = useFetchGifs(category)


  return (
    <>
      <h1>{category}</h1>
      {/* <h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>+1</button> */}

      {
        isLoading && (<h2>Cargando...</h2>)
      }

      <div className="card-grid">
        {
          images.map((img) => (
            <GifItem key={img.id} { ...img } />
            // {...img}
          ))
        }
      </div>
    </>
  );
};
