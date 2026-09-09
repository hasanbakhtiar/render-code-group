

type productPropsType = {
  title: string,
  price: number,
  image: string,
  description: string
}

const ProductCard = ({ title, price, image, description }:productPropsType) => {
  return (
    <div className="col-12 col-sm-6 col-md-3">
      <div className="card" >
        <img src={image} width={300} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{price}</p>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>

  )
}

export default ProductCard