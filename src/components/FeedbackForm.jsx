import {useState, useContext, useEffect} from 'react'
import Card from "./Shared/Card"
import Button from './Shared/Button'
import Rating from './Rating'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  const [text, setText] = useState('')
  const [btnDisable, setBtnDisable] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)

  
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisable(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = e => {

    if (text === '') {
      setBtnDisable(true)
      setMessage(null)
    } else if (text !== '' &&  text.trim().length <= 10) {
      setMessage('Text must be a least 10 characters')
      setBtnDisable(true)
    } else {
      setMessage(null)
      setBtnDisable(false)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      }

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }

      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} >
        <h2>How would you rate your service with us?</h2>
        <Rating select={(rating) => setRating(rating)} />

        <div className="input_group">
          <input 
            onChange={handleTextChange}
            type="text" 
            placeholder="Write a review" 
            value={text} />
          <Button type="submit" isDisabled={btnDisable}>Send</Button>
          {message && <div className='message'>{message}</div>}
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm