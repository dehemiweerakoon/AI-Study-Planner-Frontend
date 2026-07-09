import { Link } from 'react-router-dom'
import RoutePage from '../../components/common/RoutePage'

function DashboardPage() {
  return (
    <RoutePage
      eyebrow="Overview"
      title="Dashboard"
      description="Track the most important parts of your study workflow from one place."
    >
      <div className="route-grid">
        <article className="stat-card">
          <span>Focus score</span>
          <strong>82%</strong>
        </article>
        <article className="stat-card">
          <span>Planned sessions</span>
          <strong>12</strong>
        </article>
        <article className="stat-card">
          <span>Tasks completed</span>
          <strong>7</strong>
        </article>
      </div>

      <div className="route-actions">
        <Link className="primary-button" to="/study-plan">
          Open study plan
        </Link>
        <Link className="secondary-button" to="/resume">
          Review resume
        </Link>
      </div>
    </RoutePage>
  )
}

export default DashboardPage
