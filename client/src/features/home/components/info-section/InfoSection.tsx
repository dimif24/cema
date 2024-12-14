import InfoCard from './InfoCard'
import deliveryVanIcon from '../../../../assets/icons/delivery-van.svg'
import moneyBackIcon from '../../../../assets/icons/money-back.svg'
import serviceHoursIcon from '../../../../assets/icons/service-hours.svg'

const InfoSection = () => {
  return (
    <div className="container py-16">
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
        <InfoCard
          imageSrc={deliveryVanIcon}
          title="Free Shipping"
          description="Order over $200"
        />
        <InfoCard
          imageSrc={moneyBackIcon}
          title="Money Returns"
          description="30 days money returns"
        />
        <InfoCard
          imageSrc={serviceHoursIcon}
          title="24/7 Support"
          description="Customer support"
        />
      </div>
    </div>
  )
}

export default InfoSection
