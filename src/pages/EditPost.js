import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AddBlog, GetBlogByUid, UpdateBlog } from "../config/Api";
import { useNavigate } from "react-router-dom";
class EditPost extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      title: props.title,
      content: props.contenido,
      uid: props.uid,
      newTitle: "",
      newContent: ""
    }
    console.log(this.props)
  }
  

  handleBlogSubmit = async (e) => {
    e.preventDefault();
   UpdateBlog({ uid: this.state.uid, title: this.state.title, content: this.state.content }).then((res) => {
      this.setState({
        title: res.data.title,
        content: res.data.content
      })
    })
  }

  handleContentChange(event){
    this.setState({content: event.target.value})
  }

  handleTitleChange(event){
    this.setState({title: event.target.value})
  }

  componentDidMount(){
    this.setState({
      title: this.props.contenido.title,
      content: this.props.contenido.contenido,
      uid: this.props.contenido.uid,
    })
  }
  

  render(){
    return (
      <div>
        <Link to="/home" relative="path"><span> &#8592;</span> <span>Regresar</span></Link>
        <form onSubmit={this.handleBlogSubmit}>
          <h1>Hola {this.props.contenido.author}</h1>
          <h2>Edita el contenido de este blog</h2>
          <br />
          <label htmlFor="title">
            Titulo {this.props.title}
            <input
              type="text"
              name="newTitle"
              value={this.state.title}
              onChange={this.handleTitleChange.bind(this)}
            />
          </label>
          <label>
            Contenido
            <textarea
              type="textarea"
              name="newContent"
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)}
            />
          </label>
          <button>Guardar</button>
        </form>
      </div>
    );
  }
}

export default EditPost;