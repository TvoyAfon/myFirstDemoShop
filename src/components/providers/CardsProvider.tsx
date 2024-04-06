import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react"
import { IProducts } from "../Services/Services"

export type SetState<T> = Dispatch<SetStateAction<T>>;

interface ICardsContext {
   cards:IProducts[],
   setCards:SetState<IProducts[]>,
   count :number,
   setCount:SetState<number>,
   countCart:number,
  setCountCart:SetState<number>;
}

export const CardsContext = createContext<ICardsContext> ({}  as ICardsContext)

 const CardsProvider = ({children}:PropsWithChildren) =>{  
 const [cards,setCards] = useState<IProducts[]>([])
 const [count,setCount] = useState<number>(0)
 const [countCart,setCountCart] = useState<number>(0)
 
   return( 
            <CardsContext.Provider value={
              {cards,setCards,count,setCount,countCart,setCountCart}}>
                 {children}
            </CardsContext.Provider>
   )
 }

 export default CardsProvider