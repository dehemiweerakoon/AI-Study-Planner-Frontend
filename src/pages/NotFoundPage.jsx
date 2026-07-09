import { Link } from 'react-router-dom'
import RoutePage from '../components/common/RoutePage'

function NotFoundPage() {
  return (
    <RoutePage
      eyebrow="404"
      title="Page not found"
      description="The route you requested does not exist. Return to the app to continue."
    >
      <div className="route-actions">
        <Link className="primary-button" to="/dashboard">
          Go to dashboard
        </Link>
        <Link className="secondary-button" to="/login">
          Go to login
        </Link>
      </div>
    </RoutePage>
  )
}

export default NotFoundPage
