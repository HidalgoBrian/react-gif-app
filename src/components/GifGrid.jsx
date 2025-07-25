import GifItem from "./GifItem";
import useFetchGifs from "../Hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );



  return (
    <>
      <section className="section-card">
        <h3>{category}</h3>
        {
            isLoading && ( <h2>Cargando...</h2> )
        }

        <div className="card-grid">
          { 
            images.map( ( image ) => (
              <GifItem 
              key={image.id}
              title={image.title}
              url={image.url}
              />
            ))
          }
        </div>
      </section>
    </>
  )
}

