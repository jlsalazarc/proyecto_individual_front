export function ProductCard(product){
  return (
    product.map(product => (
      <>
        <div className="destinosCard-container">
            <div className="destinosCard-container_img">
                    {/*<img key={._id} 
                        src={destinos.url} 
                        alt={destinos.title} 
                        width="240" height="192"/>*/}
                      <h3>{product.nombre} </h3>
            </div>
        </div>
      </>
    ))
  )

}
