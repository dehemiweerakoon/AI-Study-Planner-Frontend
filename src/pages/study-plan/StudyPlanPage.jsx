import { Link } from 'react-router-dom'
import RoutePage from '../../components/common/RoutePage'

function StudyPlanPage() {
  return (
    <RoutePage
      eyebrow="Learning path"
      title="Study plan"
      description="Organize subjects, deadlines, and daily actions for a clearer learning routine."
    >
      <div className="route-actions">
        <Link className="secondary-button" to="/dashboard">
          Back to dashboard
        </Link>
      </div>
    </RoutePage>
  )
}

export default StudyPlanPage
