import { Link } from 'react-router-dom'
import RoutePage from '../../components/common/RoutePage'

function ProfilePage() {
  return (
    <RoutePage
      eyebrow="Student profile"
      title="Profile"
      description="Store your personal details, goals, and study preferences here."
    >
      <div className="route-actions">
        <Link className="secondary-button" to="/dashboard">
          Back to dashboard
        </Link>
      </div>
    </RoutePage>
  )
}

export default ProfilePage
