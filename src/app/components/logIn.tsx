import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

export default function LogIn () {
    const {register , handleSubmit} = useForm()
    const [usuario, setUsuario] = useState({
      email: '',
      password: ''
    })

    useEffect(() => {
    console.log(usuario)
    }, [usuario])
    
  return (
    <>
    <form className="form__inicio max-w-sm mx-auto grid mt-10  " onSubmit={handleSubmit(data => {setUsuario(data)})}>
        <div className="mb-5 ">
          <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white "  >Email</label>
          <input 
          type="email" 
          id="email" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ejemplo@gmail.com" required 
          {...register('email')}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Password</label>
          <input 
          type="password" 
          id="password" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='***********' required 
          {...register('password')}
          />
        </div>
        
        <button type="submit" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 "  >Ingregar</button>
      </form>   
    </>
  )
}
