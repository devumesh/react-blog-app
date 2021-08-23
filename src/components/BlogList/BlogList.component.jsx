import { Link } from "react-router-dom";

const BlogList = (props) => {
   const {blogs} = props;
   return ( 
      <>
         {blogs.map((blog) => {
            return (
               <div className="my-5" key={blog.id}>
                  <Link to={`/blog/${blog.id}`}>
                     <h1 className="text-2xl font-semibold text-indigo-600 py-2">{blog.title}</h1>
                     <p className="">{blog.description}</p>
                  </Link>
                  {/* <button className="bg-red-400 text-white px-4 py-1 font-semibold rounded my-2" onClick={() => handleDelete(blog.id)}>Delete</button> */}
               </div>
            )
         })}
      </>
    );
}
 
export default BlogList;