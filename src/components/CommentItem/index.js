import './index.css'
// Write your code here

const CommentItem = props => {
  const {comments, onDeleteComment, isLikedComment} = props
  const {name, comment, initial, id, isLiked, background} = comments

  const like = () => {
    isLikedComment(id)
  }

  const onDelete = () => {
    onDeleteComment(id)
  }

  const likeButton = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  return (
    <li className="list">
      <div>
        <p className={background}>{initial}</p>
        <p>{name}</p>
        <p>{comment}</p>
        <button type="button" className="like" onClick={like}>
          <img src={likeButton} alt="like" /> Like
        </button>
      </div>
      <button
        className="delete"
        type="button"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default CommentItem
