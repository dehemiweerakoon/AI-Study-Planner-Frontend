import { Link } from 'react-router-dom'
import RoutePage from '../../components/common/RoutePage'

function SettingsPage() {
  return (
    <RoutePage
      eyebrow="Preferences"
      title="Settings"
      description="Configure account, notification, and application preferences from here."
    >
      <div className="route-actions">
        <Link className="secondary-button" to="/dashboard">
          Back to dashboard
        </Link>
      </div>
    </RoutePage>
  )
}

export default SettingsPage
