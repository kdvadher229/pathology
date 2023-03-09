import axios from "axios";
import { useState,useEffect } from "react";

const useFetch = (url)=>{
    const [data,setData] = useState([])
    const [loading ,setLoading] = useState(false)
    const [error,setError] = useState(false)

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true)
            try{
                const res = await axios.get(url)
                setData(res);
            }catch(err){
                setError(err)
            }
            setLoading(false)
        };
        fetchData();
    },[url]);
    return {data,loading,error};
};

export default useFetch;