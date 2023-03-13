import React, { useState, useRef, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { AddBlog } from "../config/Api";
import { useNavigate } from "react-router-dom";
const AddPost =()=>{
    const {  auth } =  useAuth();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const navigate = useNavigate();

    const titleRef = useRef();

    const handleBlogSubmit = async (e) => {
        e.preventDefault();
        AddBlog({title, content, userUID: auth.uid}).then((res)=>{
            console.log('add blog res ', res.data)
            if(res !== undefined){
                cleanUpOnSuccess();
            }else{
                alert('Algo salio mal')
            }
        })
    }

    useEffect(()=>{
        titleRef.current.focus();
    },[])

    const cleanUpOnSuccess = () =>{
        setTitle('');
        setContent('');
        navigate('/home')
    }

    return(
        <div>
            <Link to="/home" relative="path"><span> &#8592;</span> <span>Regresar</span></Link>
            <form onSubmit={handleBlogSubmit}>
                <h1>Hola {auth.names}</h1>
                <h2>Ingresa el contenido de tu blog</h2>
                <br />
                <label htmlFor="title">
                    Titulo
                    <input 
                        type="text"
                        value={title}
                        ref={titleRef}
                        onChange={(e)=>setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Contenido
                    <textarea 
                        name="content"
                        value={content}
                        onChange={(e)=> setContent(e.target.value)}
                        required
                    />
                </label>
                <button>Guardar</button>
            </form>
        </div>
    );
}

export default AddPost;