import {useState, useEffect} from 'react';

const useFetch = (url) => {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const abortCont = new AbortController();

   useEffect(() => {
      fetch(url, {signal: abortCont.signal})
         .then(res => {
            if (!res.ok)
            {
               throw Error("Unable to fetch the data");
            }
            return res.json();
         })
         .then(data => {
            setData(data);
            setLoading(false);
            setError(null);
         })
         .catch(err => {
            if (err.name === 'AbortError')
            {
               console.log("Fetch Aborted");
            }
            else{
               setLoading(false);
               setError(err.message);
            }
         });
      return () => abortCont.abort();
   }, [url]);
   
   return {data, loading, error};
}

export default useFetch;