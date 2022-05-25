import {useState} from 'react'
import Card from "./Shared/Card"
import Button from './Shared/Button'

function FeedbackForm() {

  const [text, setText] = useState('')
  const [btnDisable, setBtnDisable] = useState(true)
  const [message, setMessage] = useState('')

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

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>

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