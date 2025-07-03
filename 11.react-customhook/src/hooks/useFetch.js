import { useEffect, useState } from "react"

export default function useFetch(url,retry){

    const [finalData,setFinalData]=useState({})
    const [loading,setLoading]= useState(true);

    async function getdata(url){
     setLoading(true);
     const res= await fetch(url);
     const json = await  res.json();
     setFinalData(json);
     setLoading(false);
    }

    useEffect(()=>{
        getdata(url);
    },[url])

    useEffect(()=>{
        setInterval(getdata,retry *1000);
    },[]);
  
    return {
        finalData,
        loading
    }

} 