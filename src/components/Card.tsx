interface CardProps {
    discount: string,
    productName: string,
    currentPrice: number,
    image: string,
    originalPrice: number,
    savings: string,
}

const Card = (card: CardProps) => {
  return (
      <div className="product-card">
        <div className="discount-badge">{card.discount}</div>
        <div className="product-image">
          <img src={card.image} alt="Galaxy S22 Ultra" />
        </div>
        <div className="product-info">
          <h3 className="product-name">{card.productName}</h3>
          <div className="product-price">
            <span className="current-price">{card.currentPrice}</span>
            <span className="original-price">{card.originalPrice}</span>
          </div>
          <div className="product-savings">{card.discount}</div>
        </div>
      </div>
  )
}

export default Card