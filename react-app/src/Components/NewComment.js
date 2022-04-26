import { useState } from "react";
import axios from "axios";

const NewComment = (ID) => {
    const [comment, setComment] = useState();

    const data = {
        "comment": comment
    };

    const onSubmit = () => {
        axios
        .post(`http://localhost:3002/post/${ID}/comment`, data)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Text" value={comment} onChange={e => setComment(e.target.value)} />
            </div>
            <div>
            <button style={{ marginTop: '4px'}} onClick={onSubmit}>
              Submit
            </button>
            </div>
        </div>
    );
};

export default NewComment;
