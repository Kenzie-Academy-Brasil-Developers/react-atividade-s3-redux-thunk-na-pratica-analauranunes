import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentThunk } from "../../Store/Modules/User/thunk";
import { ContainerDiv } from "./style";
import lion from "../../Assets/lion.png";

export const CardComment = () => {
  const [newComment, setNewComment] = useState("");

  const dispatch = useDispatch();

  const comments = useSelector((state) => state.user.comments);
  console.log(comments);

  const handleClick = () => {
    dispatch(addCommentThunk(newComment));
  };

  return (
    <ContainerDiv>
      <div className="imgTitle-div">
        <img src={lion} alt="lion" />
        <h2>Try some cute comments</h2>
      </div>
      <input
        onChange={(event) => setNewComment(event.target.value)}
        placeholder="Comment..."
        autoComplete="off"
      />
      <button onClick={handleClick}>New comment</button>
      <div className="comments-div">
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
    </ContainerDiv>
  );
};
