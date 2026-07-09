import { Link } from 'react-router-dom'
import RoutePage from '../../components/common/RoutePage'

function ResumePage() {
    return (
        <RoutePage
            eyebrow="Documents"
            title="Resume"
            description="Upload, parse, and review your resume data from this section."
        >
            <div className="route-actions">
                <Link className="secondary-button" to="/dashboard">
                    Back to dashboard
                </Link>
            </div>
        </RoutePage>
    )
}

export default ResumePage
