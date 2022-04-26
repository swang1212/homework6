import Comments from "./Comments";
import NewComment from "./NewComment";

const Post = ({ title, body, ID, comments }) => {
  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <h3>
      {title}
    </h3>
    <p>{body}</p>
    <Comments body = {comments}></Comments>
    <NewComment id = {ID}/>
  </div>
}

export default Post;
