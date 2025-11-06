import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (url, config = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(url, config);
        setData(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;




// import axios from "axios";
// import { useEffect, useState } from "react"

// const useFetchData = (url) =>{
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(()=>{
//         if(!url) return;
//         axios(url)
//         .then(data => setData(data.data))
//         .catch(err => setError(err))
//         .finally(()=>setLoading(false))
//     },[url])

//     return {data, loading, error};

// }

// export default useFetchData;