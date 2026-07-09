import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    FaArrowRight,
    FaBookOpen,
    FaCalendarCheck,
    FaChartLine,
    FaEye,
    FaEyeSlash,
    FaGoogle,
    FaLock,
} from 'react-icons/fa6'
import heroImg from '../../assets/hero.png'
import '../../App.css';
import axiosInstance from "../../services/AxiosInstance";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function handleSubmit(event) {
        event.preventDefault()

        const credentials = {
            email: email,
            password: password
        }
        try {
            const response = await axiosInstance.post(
                "/auth",
                credentials
            );
            if (response.status == 200) {
                navigate('/dashboard')
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <main className="login-page">
            <section className="login-shell">
                <aside className="brand-panel">
                    <div className="brand-badge">
                        <img src={heroImg} alt="" aria-hidden="true" />
                        <span>AI Study Planner</span>
                    </div>

                    <div className="brand-copy">
                        <p className="eyebrow">Welcome back</p>
                        <h1>Log in and pick up your study plan.</h1>
                        <p className="lede">
                            Keep your schedule, goals, and progress in one place with a clean
                            workspace built for focus.
                        </p>
                    </div>

                    <div className="feature-list" aria-label="Highlights">
                        <article>
                            <FaBookOpen aria-hidden="true" />
                            <div>
                                <h2>Study paths</h2>
                                <p>Organize every subject into a clear next step.</p>
                            </div>
                        </article>
                        <article>
                            <FaCalendarCheck aria-hidden="true" />
                            <div>
                                <h2>Smart planning</h2>
                                <p>Turn deadlines into a schedule you can actually follow.</p>
                            </div>
                        </article>
                        <article>
                            <FaChartLine aria-hidden="true" />
                            <div>
                                <h2>Visible progress</h2>
                                <p>Track momentum with a dashboard that stays out of the way.</p>
                            </div>
                        </article>
                    </div>
                </aside>

                <section className="form-panel" aria-labelledby="login-title">
                    <div className="form-card">
                        <div className="form-header">
                            <span className="form-kicker">
                                <FaLock aria-hidden="true" />
                                Secure sign in
                            </span>
                            <h2 id="login-title">Login to your account</h2>
                            <p>
                                Use your email and password to continue where you left off.
                            </p>
                        </div>

                        <form className="login-form" onSubmit={handleSubmit}>
                            <label className="field">
                                <span>Email address</span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>

                            <label className="field">
                                <span>Password</span>
                                <div className="password-field">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        className="icon-button"
                                        onClick={() => setShowPassword((visible) => !visible)}
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    >
                                        {showPassword ? <FaEyeSlash aria-hidden="true" /> : <FaEye aria-hidden="true" />}
                                    </button>
                                </div>
                            </label>

                            <div className="form-row">
                                <label className="checkbox">
                                    <input type="checkbox" name="remember" defaultChecked />
                                    <span>Remember me</span>
                                </label>

                                <Link to="/forgot-password">Forgot password?</Link>
                            </div>

                            <button type="submit" className="primary-button">
                                Sign in
                                <FaArrowRight aria-hidden="true" />
                            </button>

                            <div className="divider">
                                <span>or continue with</span>
                            </div>

                            <button type="button" className="secondary-button">
                                <FaGoogle aria-hidden="true" />
                                Continue with Google
                            </button>

                            <p className="signup-text">
                                New here? <Link to="/register">Create an account</Link>
                            </p>
                        </form>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Login
