import { useState } from "react";
import { useHistory } from "react-router";

const CreateBlog = () => {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [author, setAuthor] = useState('Sundhar Pitchai');
   const [isPending, setPending] = useState(false);
   const history = useHistory();

   const handleSubmit = (e) =>{
      e.preventDefault();

      const blog = {title, description, author};
      setPending(true);

      fetch('http://localhost:8000/blogs', {
         method: "POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify(blog)
      }).then(() => {
         console.log("Blog Added --> CreateBlog Component");
         setPending(false);
         history.push({pathname: '/', addUpdate: true});
      }).catch((err) => console.log(err));
   };

   return (
      <>
         <div className="">
            <h1 className="font-bold text-3xl text-center py-4">Create Blog</h1>
            <form className="flex flex-col container mx-auto max-w-md" onSubmit={handleSubmit}>
               <label htmlFor="title" className="font-semibold">Title: </label>
               <input id="title" type="text" autocomplete="off" value={title} onChange={(e) => setTitle(e.target.value)} className="border-b-2 focus:outline-none my-3" required />
               <label htmlFor="description" className="font-semibold">Description: </label>
               <textarea 
                  id="description" 
                  type="text" 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  className="border-2 my-3 focus:outline-none"
                  required
               >
               </textarea>
               <label htmlFor="author" className="font-semibold">Author: </label>
               <select className="my-3 p-3 focus:outline-none" onChange={(e) => setAuthor(e.target.value)} value={author}>
                  <option value="Sundhar Pitchai">Sundhar Pitchai</option>
                  <option value="APJ Abdul Kalam">APJ Abdul Kalam</option>
                  <option value="Elon Musk">Elon Musk</option>
               </select>
               {!isPending && 
               <button type="submit" className="bg-gradient-to-r from-purple-400 to-pink-500 px-4 py-2 rounded text-white focus:outline-none font-bold mx-auto">Add blog</button>
               }
               {isPending && 
               <button type="submit" className="bg-gradient-to-r from-purple-400 to-pink-500 px-4 py-2 rounded text-white focus:outline-none font-bold mx-auto">Adding blog...</button>
               }
            </form>
         </div>
      </>
   );
}

export default CreateBlog;