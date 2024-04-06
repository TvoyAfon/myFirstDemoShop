import { TOUR } from "./products.ts"
import { FcRating } from "react-icons/fc";

export default function Products (){
    return (
        <div className="tour bg-gray-300 font-thin ">
            <h1 className="tour_header flex justify-center text-4xl  p-2">Tours around the world</h1>
               {TOUR.map(data => <div key={data.id} className="tour_container gap-4 border-4 p-4 flex flex-col justify-center items-center">
                
                <div className="tour_title p-2 text-2xl rounded-md">{data.title}</div>
                <div className="tour_rating flex flex-row items-center gap-2 bg-green-400 p-2 rounded-lg ">{data.rating}/5.0 <FcRating className="icons_rating text-xl"/></div>
                <img src={data.image}  className="tour_image "/>
                <div className="tour_description">{data.description}</div>
                <div className="tour_price text-2xl w-full bg-red-300 rounded-lg p-2 "> PRICE: from {data.price} $</div>
                <button className="tour_button underline  text-2xl transition-all hover:text-red-600">Change a Tour</button>
      
                </div>
               
                )}  
        </div>
    )
}