
'use client'
import React, { useCallback, useEffect, useState } from 'react';
import axiosInstance from "@/service/Axios";

const customHook= (url: string) =>{
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const getData=async ()=>{
        const response = await axiosInstance.get(url);

        if(response.data!=null){
            setData(response.data);
        }
        else{
            setErrorMessage('Network error.');
        }
        setLoading(false);
        
    }

    useEffect(()=>{
        const response = getData();
    },[])

    return [loading, errorMessage, data];

}

export default customHook;