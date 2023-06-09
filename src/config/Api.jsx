import axios from 'axios'
const BASE_URL="http://localhost:500/api/v1/blog/";

export const signUp = (newUser) =>{
    return axios.post(BASE_URL+'user/registro', newUser);
}

export const signIn = (credentials ) =>{
    return axios.post(BASE_URL+'user/login', credentials)
}

export const blogList = async ()=>{
    return axios.get(BASE_URL+'posts/all').then((res)=>{
        return res.data;
    })
}

export const AddBlog = (data) =>{
    return axios.post(BASE_URL+'posts/', data)
}

export const GetBlogByUid = (uid) =>{
    return axios.get(BASE_URL+'posts/'+uid)
}

export const UpdateBlog = (data) =>{
    return axios.put(BASE_URL+'posts/update', data)
}

export const getMyPosts = (uid) =>{
    return axios.get(BASE_URL+'');
}

