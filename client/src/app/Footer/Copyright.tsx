import methodsImg from '../../assets/images/footer/methods.png'
const Copyright = () => {
  return (
    <div className="bg-gray-800 py-4 px-16">
      <div className="container flex items-center justify-between">
        <p className="text-white">&copy; CEMA - All Rights Reserved</p>
        <div>
          <img src={methodsImg} alt="methods" className="h-5" />
        </div>
      </div>
    </div>
  )
}

export default Copyright
