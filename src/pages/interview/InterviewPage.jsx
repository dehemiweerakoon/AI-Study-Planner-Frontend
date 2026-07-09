import { Link } from 'react-router-dom'
import RoutePage from '../../components/common/RoutePage'

function InterviewPage() {
  return (
    <RoutePage
      eyebrow="Preparation"
      title="Interview"
      description="Practice questions, capture feedback, and prepare for upcoming interviews."
    >
      <div className="route-actions">
        <Link className="secondary-button" to="/dashboard">
          Back to dashboard
        </Link>
      </div>
    </RoutePage>
  )
}

export default InterviewPage
