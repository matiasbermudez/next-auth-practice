import Link from "next/link"
export const HeaderComponent = () => {
  return (
    <>
      <div className=" bg-white text-black">header 123123123123123</div>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/contactos'>Contactos</Link>
        </li>

      </ul>

    </>
  )
}
