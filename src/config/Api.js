import axios from 'axios'
const BASE_URL="http://localhost:500/api/v1/blog/";

export const signUp = (newUser) =>{
    return axios.post(BASE_URL+'registro', newUser);
}

export const signIn = (credentials ) =>{
    return axios.post(BASE_URL+'user/login', credentials)
}

export const blogList = async ()=>{
    const url = "http://localhost:500/api/v1/blog/posts/";
    return axios.get(url).then((res)=>{
        return res.data;
    })

}


export const getMyPosts = (uid) =>{
    return axios.get(BASE_URL+'');
}

