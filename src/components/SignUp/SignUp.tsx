import { FormEvent, useEffect, useState } from 'react';
interface IUseState{
  name:string;
  age:string;
  email:string;
  password:string;
  confirmPassword:string;
  checkButton :boolean
}

export default function SignUp (){
   const [user,setUser] = useState<IUseState>({ 
       name:'',
       age:'',
       email:'',
       password:'',
       confirmPassword:'',
       checkButton:false,
    
   })
   
   useEffect(() => {
      const formData = localStorage.getItem('formData');
      if (formData) {
        setUser(JSON.parse(formData));
      }
    }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
  };
   
    /* Если пустая строка то ничего не выводим в консоль */
   const onSubmit = (event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        if (user.name!=='' &&
            user.age!=='' &&
            user.email!=='' &&              
            user.password!=='' &&
            user.confirmPassword!=='' &&
            user.checkButton!==false) {
            
            console.log(user)
            return;
        }

        localStorage.setItem('formData', JSON.stringify(user));
  }
 
    return(
        <section className=' bg-slate-300  '>
        <div className='w-full flex flex-col items-center justify-center px-8 py-8 mx-auto md:h-screen lg:py-0'>
          <div className=' bg-white rounded-lg  shadow md:mt-0 sm:max-w-md xxl:p-0'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-2xl text-center font-bold leading-tight tracking-tight text-gray-900'>Создание аккаунта</h1>
              <form className='space-y-7' onSubmit={onSubmit}>
                <div className='mb-4'>
                  <label htmlFor='username' className='block mb-2 text-sm font-medium text-gray-900 cursor-pointer'>
                    Имя пользователя *
                  </label>
                      <input
                        onChange={handleChange}  
                        name='name'
                        value={user.name}
                        type='text'
                        id='username'
                        className='bg-gray-50 border-none outline outline-1 outline-gray-300 text-gray-900 rounded-md w-full p-2.5 focus-visible:outline-2 focus-visible:outline-blue-500 placeholder:text-sm aria-[invalid="true"]:outline-red-500 aria-[invalid="true"]:outline-2'

                        placeholder='Ваше имя'
                      />
                      {user.name=='' ? <div className='text-red-500'>Имя не может быть пустым!</div>:''}
                    </div>
                    <div className='mb-4'>
                      <label htmlFor='age' className='p-2'>
                        Возраст
                      </label>
                      <input
                        onChange={handleChange}
                        value={user.age}
                        type='number'
                        id='age'
                        name='age'
                        className='input'
                        placeholder='От 18 до 65 лет'
                  />
                 {Number(user.age) > 65 || Number(user.age) <18 ? <div className='text-red-500'>Введите корректный возраст!</div> :''}
                </div>
                <div>
                  <label htmlFor='email' className='label'>
                    Адрес электронной почты *
                  </label>
                  <input
                   onChange={handleChange}
                   value={user.email}
                    type='email'
                    id='email'
                    name='email'
                    className='input'
                    placeholder='name@mail.com'
                  />
                </div>
                <div>
                  <label htmlFor='password' className='block mb-2  text-sm font-medium text-gray-900 cursor-pointer'>
                    Пароль *
                  </label>
                  <input
                    onChange={handleChange}
                    value={user.password}
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Не менее 6 символов'
                    className='input'
                  />
                   {user.password.length<6 ? <div className='text-red-500'>Длина пароля менее 6 символов!</div> : '' }
                </div>
                <div>
                  <label htmlFor='confirmPassword' className='  bg-gray-50 border-none outline outline-1 outline-gray-300 text-gray-900 rounded-md w-full p-2 focus-visible:outline-2 focus-visible:outline-blue-500 placeholder:text-sm aria-[invalid="true"]:outline-red-500 aria-[invalid="true"]:outline-2'>
                    Подтверди пароль *
                  </label>
                  <input
                    name='confirmPassword'
                    onChange={handleChange}
                    value={user.confirmPassword}
                    type='password'
                    id='confirmPassword'
                    placeholder='Не менее 6 символов'
                    className='input p-2.5 outline-none'
                  />
                  {user.confirmPassword.length<6 ? <div className='text-red-500'>Длина пароля менее 6 символов</div> : ''}
                </div>
                <div className=' bg-gray-50 border-none outline outline-1 outline-gray-300 text-gray-900 rounded-md w-full p-2.5 focus-visible:outline-2 focus-visible:outline-blue-500 placeholder:text-sm aria-[invalid="true"]:outline-red-500 aria-[invalid="true"]:outline-2'>
                  <input
                  onChange={e => setUser({...user,checkButton:e.target.checked})}
                    id='terms'
                    aria-describedby='terms'
                    type='checkbox'
                    className='w-4 h-4 border border-gray-300 bg-gray-50 accent-primary-500 focus:outline-2 focus:outline-primary-500 outline-none'
                  />
                  <label
                    htmlFor='terms'
                    className='font-light text-gray-500 text-sm ml-3 cursor-pointer select-none'
                  >
                    Я принимаю{' '}
                    <a
                      className='font-medium text-primary-500 hover:text-primary-700 focus:text-primary-700 transition-colors outline-none'
                      href='#'
                    >
                      Условия использования
                    </a>
                    {user.checkButton !== true ?  <div className='text-red-500'>Вы не приняли Условия использования!</div>:''}
                  </label>
                </div>
                <div className='flex gap-5 justify-center pt-2'>
                  <button disabled={user.password!==user.confirmPassword && true} style={{backgroundColor:user.password!==user.confirmPassword?'gray':'initial'}}
                    type='submit'
                    className='bg-blue-500 p-2 rounded-lg hover:bg-primary-700 focus:ring-primary-300 disabled:bg-primary-500'
                  >
                    Создать аккаунт
                  </button>
                  <button
                  onClick={()=>{
                    localStorage.removeItem('formData') 
                    setUser({name:'',age:'',email:'',password:'',confirmPassword:'',checkButton:false})
                  }}
                    type='button'
                    className='bg-red-300 rounded-md p-2  hover:bg-red-500 focus:ring-red-300 disabled:bg-red-500'
                  >
                    Очистить поля
                  </button>
                </div>
                {user.password !== user.confirmPassword ? <p className='text-red-500  flex justify-center'>Пароли не совпадают!</p> : ''}
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
  

    
