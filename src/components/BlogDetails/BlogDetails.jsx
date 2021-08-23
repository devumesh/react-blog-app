import {useParams} from 'react-router-dom';
import useFetch from '../customhook/useFetch';
import { useHistory } from 'react-router';

const BlogDetails = () => {
   const history = useHistory();
   const {id} = useParams();
   const {data: blog, loading, error} = useFetch('http://localhost:8000/blogs/'+id);

   const handleDelete = () => {
      fetch('http://localhost:8000/blogs/'+id, {
         method: "DELETE"
      }).then(() => {
         console.log("Deleted successfully --> BlogDetail Component");
         history.push({pathname: '/', deleteUpdate: true});
      })
   } 

   return ( 
   <>
   <div>
      {loading && <div>Loading...</div>}
      {error && {error}}
      {blog && (
         <article>
            <h2 className="font-bold text-3xl py-3">{blog.title}</h2>
            <p className="text-purple-500 font-semibold">Written by {blog.author}</p>
            <p className="py-3">{blog.description}</p>
            <button onClick={handleDelete} className="bg-red-600 px-4 py-2 rounded text-white focus:outline-none font-bold">Delete</button>
         </article>
      )}
   </div>
   </> );
}
 
export default BlogDetails;