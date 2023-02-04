import {Component} from 'react'
import {v4 as ids} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {nameInput: '', commentInput: '', comments: []}

  onNameChange = event => {
    this.setState({nameInput: event.target.value})
  }

  onCommentChange = event => {
    this.setState({commentInput: event.target.value})
  }

  onComments = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const color =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const commentObj = {
      id: ids(),
      initial: nameInput[0],
      name: nameInput,
      comment: commentInput,
      isLiked: false,
      background: color,
    }
    console.log(color)
    this.setState(prev => ({
      comments: [...prev.comments, commentObj],
      nameInput: '',
      commentInput: '',
    }))
  }

  onDeleteComment = id => {
    const {comments} = this.state
    const list = comments.filter(each => each.id !== id)

    this.setState({comments: list})
  }

  isLikedComment = id => {
    this.setState(prev => ({
      comments: prev.comments.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  render() {
    const {comments, nameInput, commentInput} = this.state
    const count = comments.length
    return (
      <div className="bg-container">
        <div>
          <h1>Comments</h1>
          <div className="comment-container">
            <div>
              <p>Say something about 4.0 Technologies</p>
              <form onSubmit={this.onComments}>
                <input
                  type="text"
                  value={nameInput}
                  placeholder="Your Name"
                  onChange={this.onNameChange}
                  className="input"
                />
                <br />
                <textarea
                  className="textarea"
                  type="text"
                  value={commentInput}
                  onChange={this.onCommentChange}
                  placeholder="Your Comment"
                />
                <br />
                <button className="button" type="submit">
                  Add Comment
                </button>
              </form>
            </div>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr />
          <p>
            <span className="count">{count}</span> comments
          </p>
          <ul className="list">
            {comments.map(each => (
              <CommentItem
                key={each.id}
                onDeleteComment={this.onDeleteComment}
                comments={each}
                isLikedComment={this.isLikedComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
