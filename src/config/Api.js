import React from 'react'
import axios from 'axios'
export const blogList = async ()=>{
    const url = "http://localhost:500/api/v1/blog/posts/";
    return axios.get(url).then((res)=>{
        return res.data;
    })

}