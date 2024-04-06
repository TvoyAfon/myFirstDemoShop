
import { useState } from "react"
import { IProducts } from "./Services"
import { useCards } from "../providers/useCards"

 const Cards:React.FC<{data:IProducts}> =({data}) =>{
  const {cards,setCards} = useCards()
  const {count,setCount} = useCards()
  const {countCart,setCountCart} = useCards()

    const [addItemCount,setAddItemCount] = useState<number>(0)
    
  const handleAddItem = () =>{
      data.id && setCards([...cards, {
          ...data,
          id: Date.now()
      }]);
      
      setAddItemCount(addItemCount+1)
      setCount((count+Number(data.price)))
      setCountCart(countCart+1)
  }
    return (
   <>
     <div key={data.id} className="group relative font-thin   ">
          <div className="aspect-h-1  aspect-w-1 w-full overflow-hidden p-4 rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
          <img
            src={data.image}
            alt='no img'
            className="h-full rounded-lg mix-blend-multiply w-full object-cover object-center lg:h-full lg:w-full"
          />
         </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-md p-2 text-gray-700">
                <span aria-hidden="true" className="absolute inset-0 border-2" />
                {data.title} 
              </h3>
            </div>
          <p className="text-sm p-2 font-medium text-gray-900">{data.price}$</p>
          </div>
              <span className="itemCount rounded-md  bg-slate-200 flex justify-center items-center p-1 text-blue-500">   
                {addItemCount} products to the Cart 
              </span> 
     </div>
        <button onClick={() => handleAddItem()}
              className="text-xl  font-thin  rounded-md  transition-all hover:text-red-500">
              +ADD ITEM 
        </button>
   </>
    )
}

export default Cards