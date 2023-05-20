import Image from 'next/image'

const PropertyCard = ({ data }) => {
  const {
    imageAlt,
    beds,
    baths,
    title,
    priceInCents,
    formattedPrice,
    reviewCount,
    rating
  } = data.property

  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-lg">
      <Image
        src="/images/house.jpg"
        alt={imageAlt}
        height={500}
        width={500}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="p-6">
        <h4>{title}</h4>
        <p>
          beds: {beds} & baths: {baths}
        </p>
        <p>{formattedPrice} / wk</p>
        <p>
          {rating}/5 stars (based on {reviewCount} reviews)
        </p>
      </div>
    </div>
  )
}
export default PropertyCard
