import { v4 as uuidv4 } from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useState} from 'react'
import Header  from "./components/Header"
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/feedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import AboutIconLink from './components/AboutIconLink'

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are u sure u want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id ))
        }
    }

    return (
        <Router>
            <Header text='Feedback UI' colorText="#f16969" />
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback}/>
                            <FeedbackList feedback={feedback} handleDelete={id => deleteFeedback(id)} />
                        </>
                    }>
                    </Route>

                    <Route path="/about" element={<About />} />
                </Routes>
                
                <AboutIconLink />
            </div>      
        </Router>
    )
}

export default App