import {useState} from 'react'
import Card from "./Shared/Card"

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
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm