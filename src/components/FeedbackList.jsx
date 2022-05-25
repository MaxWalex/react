import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

function FeedbackList({ feedback, handleDelete }) {

    if (!feedback || feedback.lenght === 0) {
        return <p>No Feedback Yet</p>
    }

  return (
    <div className="feedback_list">
        {feedback.map((item) => {
            return <FeedbackItem 
            key={item.key} 
            item={item} 
            handleDelete={handleDelete} />
        })}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  )
}

export default FeedbackList