import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import DashboardPage from '../pages/dashboard/DashboardPage'
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage'
import InterviewPage from '../pages/interview/InterviewPage'
import JobsPage from '../pages/jobs/JobsPage'
import LoginPage from '../pages/auth/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import ProfilePage from '../pages/profile/ProfilePage'
import RegisterPage from '../pages/auth/RegisterPage'
import ResumePage from '../pages/resume/ResumePage'
import SettingsPage from '../pages/settings/SettingsPage'
import StudyPlanPage from '../pages/study-plan/StudyPlanPage'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        <Route element={<AppLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="study-plan" element={<StudyPlanPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="interview" element={<InterviewPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
