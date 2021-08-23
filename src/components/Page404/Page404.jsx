import { Link } from "react-router-dom"

const Page404 = () => {
   return ( <>
      <div className="mx-auto">
         <h1 className="text-4xl font-bold text-center py-5">404 Page not found</h1>
         <p className="underline text-center text-blue-600"><Link to="/">Back to homepage</Link></p>
      </div>
   </> );
}
 
export default Page404;