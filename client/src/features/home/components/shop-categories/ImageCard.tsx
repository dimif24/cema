const ImageCard = ({
  image,
  title,
  link,
}: {
  image: string
  title: string
  link: string
}) => {
  return (
    <div className="relative rounded-sm overflow-hidden group">
      <img src={image} alt={title} className="w-full" />
      <a
        href={link}
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
      >
        {title}
      </a>
    </div>
  )
}

export default ImageCard
