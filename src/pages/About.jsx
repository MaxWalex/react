import Card from "../components/Shared/Card"

function About() {
  return (
    <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>This is React app to leave feedback for a product or service</p>
            <p>VersionL 1.0.0</p>

            <p>
                <a href="/">Back To Home</a>
            </p>
        </div>
    </Card>
  )
}

export default About