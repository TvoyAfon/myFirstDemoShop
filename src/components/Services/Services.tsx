import { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './Cards'

 export interface IProducts{
  id:number,
  title:string,
  description:string,
  image:string,
  price:string,

}
export default function Services (){
   const [products,setProducts] = useState<IProducts[]>([])
   const [loading,setLoading] = useState<boolean>(false)
   const [errorMessage, setErrorMessage] = useState<string>('');

   useEffect(() =>{
         setLoading(true);

         (async () => {
          try {
            const { data, status } = await axios.get('https://fakestoreapi.com/products?limit=20');

            if (status !== 200) {
              setErrorMessage('ERROR');
              return;
            }

            setProducts(data);
            setErrorMessage('');
          } catch (error) {
            setErrorMessage('ERROR');
          }
         })()

         setLoading(false);
   },[])
      
    return (

      <div className="bg-gray-300 ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className=" tracking-tight font-thin text-3xl flex justify-center text-gray-900">ONLINE SHOP</h2>
        <h3 className='font-thin flex justify-center text-3xl'>Buy our clothes from the brand <span className='px-4 text-5xl'>TRVL</span> and start travelling with us</h3>
        {
          errorMessage
          && <span className='text-red-500 text-3xl flex justify-center'>{ errorMessage }</span>
        }
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {loading ? <div className='text-3xl  '>Loading...</div> :products.map((product) => (
          <Cards key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>

    )
}