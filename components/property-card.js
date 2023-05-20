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
        <p className="text-gray-600 text-sm uppercase font-semibold tracking-wide">
          beds: {beds} & baths: {baths}
        </p>
        <h4 className="font-semibold text-lg leading-tight truncate">
          {title}
        </h4>
        <p className="mt-1">
          {formattedPrice}
          <span className="text-gray-600 text-sm">/ wk</span>
        </p>
        <p className="mt-4 text-teal-600 font-semibold flex items-center">
          {new Array(5).fill(null).map((temp, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={
                i < rating ? 'text-teal-600 h-4 w-4' : 'text-gray-400 h-4 w-4'
              }
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          ))}
          <span className="text-gray-600 text-sm ml-2">
            {reviewCount} reviews
          </span>
        </p>
      </div>
    </div>
  )
}
export default PropertyCard
