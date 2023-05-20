import faci1 from '../../../../assets/facilities/ecom.png'
import faci2 from '../../../../assets/facilities/house.png'
import faci3 from '../../../../assets/facilities/clock.png'
import faci4 from '../../../../assets/facilities/ribon.png'

const Facility = () => {
    return (
        <div className='grid lg:grid-cols-4 gap-5  border-2 border-black'>
            <div className="card card-side bg-base-100">
                <figure><img className=' h-[50px]  w-[50px] ml-2' src={faci1} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">FREE SHIPPING</h2>
                    <p> <small>Free Shipping On All Order</small> </p>
                  
                </div>
            </div>
            <div className="card card-side bg-base-100 ">
                <figure><img className='  h-[50px]  w-[50px]' src={faci2} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">FREE RETURN</h2>
                    <p> <small>Money Back Guarantee</small> </p>
                  
                </div>
            </div>
            <div className="card card-side bg-base-100 ">
                <figure><img className='  h-[50px]  w-[50px]' src={faci3} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">24/7 SUPPORT</h2>
                    <p> <small>We Support Online 24 Hrs</small> </p>
                  
                </div>
            </div>
            <div className="card card-side bg-base-100 ">
                <figure><img className='  h-[50px]  w-[50px]' src={faci4} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">GIFT CARD </h2>
                    <p> <small>All Over Over $50</small> </p>
                  
                </div>
            </div>
           
        </div>
    );
};

export default Facility;