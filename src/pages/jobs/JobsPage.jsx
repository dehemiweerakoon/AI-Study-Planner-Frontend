import { Link } from 'react-router-dom'
import RoutePage from '../../components/common/RoutePage'

function JobsPage() {
  return (
    <RoutePage
      eyebrow="Opportunities"
      title="Jobs"
      description="Match your skills with roles and keep the job hunt organized."
    >
      <div className="route-actions">
        <Link className="secondary-button" to="/dashboard">
          Back to dashboard
        </Link>
      </div>
    </RoutePage>
  )
}

export default JobsPage
