import { useParams } from "react-router-dom"


export default function Dynamic() {

    const {product} = useParams()
    
  return (
    <>
    <h1>this is Dynamic Page</h1>
    <h2>The product name is  {product}</h2>
    </>
  )
}
