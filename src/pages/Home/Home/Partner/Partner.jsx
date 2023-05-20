import part1 from '../../../../assets/partner/part1.jpg'
import part2 from '../../../../assets/partner/part2.jpg'
import part3 from '../../../../assets/partner/part3.jpg'
import part4 from '../../../../assets/partner/part5.jpg'


const Partner = () => {
    return (
        <div className=' mt-20 mb-5'>
            <p className="text-center font-semibold text-3xl mb-5 ">We have many Partner in worldwide</p>
            <div className='grid lg:grid-cols-4 gap-5 shadow-lg  '>

                <div className="card card-side bg-base-100">
                    <figure><img className=' h-[100px]  w-[150px] ml-2' src={part1} alt="Movie" /></figure>
                 
                </div>
            

            
       

                <div className="card card-side bg-base-100">
                    <figure><img className=' h-[100px]  w-[150px] ml-2' src={part2} alt="Movie" /></figure>
                 
                </div>
            

       
        

                <div className="card card-side bg-base-100">
                    <figure><img className=' h-[100px]  w-[150px] ml-2' src={part3} alt="Movie" /></figure>
                 
                </div>
            

        
         

                <div className="card card-side bg-base-100">
                    <figure><img className=' h-[100px]  w-[150px] ml-2' src={part4} alt="Movie" /></figure>
                 
                </div>
            
                </div>
         
        </div>
    );
};

export default Partner;