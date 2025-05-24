import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import "./../css/PostEdit.css";
import axios from "axios";
let PostEdit = () => {
    const{id} = useParams();
    const navigate = useNavigate();

    let [post, setPost] = useState({
        title:"",
        content: ""
    })



    useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`)
        .then(res=>{
            setPost(res.data);
        }).catch(err=>{
            console.log(err);
            alert("게시물을 불러오는데 실패하였습니다.")
    })
    },[id]);

    const handleOnChange = (e) => {
        const{name,value} = e.target;
        setPost({
            ...post,
            [name]:value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put(`${process.env.REACT_APP_API_URL}/posts/${id}`,post )
            .then(res=>{
                alert("게시글이 수정되었습니다.")
            })
            .catch(err=>{
                console.error(err);
            })


        navigate(`/post/${id}`);
    };

    return(
        <div className={"post-edit-container"}>
            <h1 className={"post-edit-title"}>게시글 수정 </h1>
            <form onSubmit={handleSubmit} className={"post-edit-form"}>
                <div className={"form-group"}>
                    <label htmlFor={"title"}>제목</label>
                    <input id={"title"} type={"text"} value={post.title}
                           onChange={handleOnChange} name = {"title"}
                    placeholder={"제목을 입력하세요."}/>

                </div>
                <div className={"form-group"}>
                    <label htmlFor={"content"}>내용</label>
                    <textarea id={"content"} value={post.content}
                              onChange={handleOnChange} name = {"content"}
                              placeholder={"내용을 입력하세요."}/>
                </div>
                <div className={"button-group"}>
                    <button type={"submit"} className={"submit-button"}>수정 완료</button>
                    <Link to={`/post/${id}`} className={"cancel-button"}>취소</Link>
                </div>
            </form>
        </div>
    )
}

export default PostEdit;