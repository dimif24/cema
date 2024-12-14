interface InfoCardProps {
  imageSrc: string
  title: string
  description: string
}

const InfoCard = ({ imageSrc, title, description }: InfoCardProps) => {
  return (
    <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
      <img src={imageSrc} alt={title} className="w-12 h-12 object-contain" />
      <div>
        <h4 className="font-medium capitalize text-lg">{title}</h4>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  )
}

export default InfoCard
