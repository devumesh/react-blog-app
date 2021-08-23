import {Link} from 'react-router-dom';

const Navbar = () => {
   return (
   <>
      <header className="flex justify-between items-center border-b-2 px-2 py-4">
         <div className="px-5">
            <h1 className="text-3xl font-extrabold text-purple-500">Blog Application</h1>
         </div>
         <nav className="flex gap-5 px-5 font-bold">
            <div>
               <Link to="/" className="focus:outline-none">Home</Link>
            </div>
            <div>
               <Link to="/create" className="bg-gradient-to-r from-purple-400 to-pink-500 px-3 py-2 rounded text-white focus:outline-none">New Blog</Link>
            </div>
         </nav>
      </header>
   </>);
}

export default Navbar;