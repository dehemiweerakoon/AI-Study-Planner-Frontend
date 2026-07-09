import { Link } from 'react-router-dom'
import RoutePage from '../../components/common/RoutePage'

function ForgotPasswordPage() {
  return (
    <RoutePage
      eyebrow="Password recovery"
      title="Reset your password"
      description="Add your reset flow here once the authentication endpoints are available."
    >
      <div className="route-actions">
        <Link className="secondary-button" to="/login">
          Back to login
        </Link>
      </div>
    </RoutePage>
  )
}

export default ForgotPasswordPage
