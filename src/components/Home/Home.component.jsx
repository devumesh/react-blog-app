import '../../App.css';
import BlogList from '../BlogList/BlogList.component';
import useFetch from '../customhook/useFetch';
import { useLocation } from 'react-router';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
toast.configure()

const Home = () => {
   const {data: blogs, loading, error} = useFetch('http://localhost:8000/blogs');
   const location = useLocation();
   
   const notify = (data) => {
      toast.success(data, {
         position: toast.POSITION.BOTTOM_CENTER
      });
   };

   const toasters = () => {
      if (location.deleteUpdate === true)
      {
         notify("Deleted Successfully");
         console.log("Blog Deleted --> Home Component");
         location.deleteUpdate = false;
      }
      if (location.addUpdate === true)
      {
         notify("Added Successfully");
         console.log("Blog Added --> Home Component");
         location.addUpdate = false;
      }
   }

   return (
      <>
         <div className="p-3">
            {toasters()}
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} />}
         </div>
      </>
   );
}

export default Home;