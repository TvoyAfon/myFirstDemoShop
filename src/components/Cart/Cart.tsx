import { useCards } from "../providers/useCards"
import { MdDeleteForever } from "react-icons/md";

const Cart:React.FC  = () => {
  const {cards,count,setCards,setCount, setCountCart} = useCards() 

  const handleClearCart = () =>{
          setCards([])
          setCount(0)
  }
  const removeItem = (id:number) =>{
      const removedItem = cards.find(card => card.id === id)
      if (removedItem) {
          const updatedCards = cards.filter(card => card.id !== id)
              setCards(updatedCards)
              setCount(count - Number(removedItem.price));
              setCountCart(prev => prev - 1);
      }
  }

  const handleClearItem = (id:number) => {
    removeItem(id)
  }

    return ( 
         <div className="cart font-thin bg-gray-200 ">
            {cards.length !==0 ? 
               <>
          {cards.map(card => <div key={card.id} className="card  border-2 p-4 border-gray-300 relative  flex flex-col justify-center items-center">
                <div className="card_title text-xl ">{card.title}</div>
                <MdDeleteForever onClick={()=>handleClearItem(card.id)} className="cart_icon text-3xl cursor-pointer  "/>
                <img src={card.image} className="card_image h-28 w-28"/>
                <div className="card_description border-2 p-2 rounded-lg bg-gray-300">{card.description}</div>
                <div className="card_price text-2xl">Price: {card.price}$</div>
                </div>
                )}
                <div className="total_button flex flex-row p-4 gap-8 justify-center items-center">
                    <span className="total_price p-2 text-3xl">Total Price: {count.toFixed(2)}$</span>
                    <button 
                    className=" button_order text-2xl text-white h-full p-2 rounded-lg bg-black transition-all hover:opacity-70 ">
                        Place an order
                    </button>
                    <button 
                    onClick={()=>handleClearCart()}
                    className="clear_button text-lg h-full transition-all hover:text-red-500  ">Clear Cart</button>
                </div>
                
                </>
                : <div className="empty_cart flex justify-center text-red-400 text-2xl">Cart is empty</div>}
         </div>
    )
}

export default Cart
