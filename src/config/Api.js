import axios from 'axios'

const BLOG_API_URL="http://localhost:500/api/v1/blog/";

class APIService{
    

    getAllBlogs(){
       return axios.get(BLOG_API_URL+'posts/');
    }
}
export default new APIService();
