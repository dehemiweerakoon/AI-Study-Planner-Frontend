import { Link } from 'react-router-dom'
import RoutePage from '../../components/common/RoutePage'

function RegisterPage() {
  return (
    <RoutePage
      eyebrow="Account setup"
      title="Create your account"
      description="This screen is ready for registration logic when your backend is connected."
    >
      <div className="route-actions">
        <Link className="secondary-button" to="/login">
          Back to login
        </Link>
      </div>
    </RoutePage>
  )
}

export default RegisterPage
