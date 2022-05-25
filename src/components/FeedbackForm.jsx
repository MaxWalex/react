import {useState} from 'react'
import Card from "./Shared/Card"
import Button from './Shared/Button'

function FeedbackForm() {

  const [text, setText] = useState('')

  const handleTextChange = e => {
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
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm