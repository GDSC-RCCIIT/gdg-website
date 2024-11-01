"use client";
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [emailError, setEmailError] = useState('');
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Validate email format
        if (name === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setEmailError(!emailPattern.test(value) ? 'Please enter a valid email address' : '');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { email, password } = formData;
        if (!email || !password) {
            toast.error('All fields are required');
            setLoading(false);
            return;
        }

        // Password validation
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long');
            setLoading(false);
            return;
        }

        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.email === email && user.password === password) {
            if (rememberMe) {
                localStorage.setItem('rememberedEmail', email);
            } else {
                localStorage.removeItem('rememberedEmail');
            }
            toast.success('Signed In Successfully!');
            router.push('/Resources');
        } else {
            toast.error('Invalid Email or Password');
            console.error('Invalid login attempt:', { email, password }); // Error logging
        }
        setLoading(false);
    };

    const handleCheckboxChange = () => {
        setRememberMe((prev) => !prev);
    };

    const handleReset = () => {
        setFormData({ email: '', password: '' });
        setEmailError('');
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };

    return (
        <>
            <ToastContainer />
            <section className="bg-gradient-to-r from-[#FFCCB6] to-[#FFF8E5] min-h-screen flex items-center justify-center">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <aside className="relative hidden lg:block lg:order-first lg:col-span-5 lg:h-full xl:col-span-6">
                        <img
                            alt="Background"
                            src="https://i.pinimg.com/originals/b6/58/39/b658391177941f5b1e486874e7b18702.png"
                            className="absolute inset-0 h-full w-full object-cover opacity-90"
                        />
                    </aside>
                    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                        <div className="max-w-xl lg:max-w-3xl bg-white rounded-lg shadow-lg p-8">
                            <h1 className="mt-6 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 text-center">
                                Welcome Back!
                            </h1>

                            <p className="mt-4 leading-relaxed text-gray-500 text-center">
                                GDSC leads are passionate about helping their peers learn technology and connect.
                            </p>

                            <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
                                <div>
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`mt-2 w-full rounded-lg border ${emailError ? 'border-red-500' : 'border-gray-300'} p-3 text-gray-900 shadow-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150`}
                                        placeholder="Enter your email"
                                        aria-invalid={emailError ? "true" : "false"}
                                        aria-describedby="email-error"
                                    />
                                    {emailError && <p id="email-error" className="mt-1 text-sm text-red-500">{emailError}</p>}
                                </div>
                                <div>
                                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700">Password</label>
                                    <div className="relative">
                                        <input
                                            type={passwordVisible ? 'text' : 'password'}
                                            id="Password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="mt-2 w-full rounded-lg border border-gray-300 p-3 text-gray-900 shadow-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150"
                                            placeholder="Enter your password"
                                            aria-describedby="password-error"
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
                                            aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                                        >
                                            <span className="material-icons">{passwordVisible ? 'hide' : 'show'}</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="rememberMe"
                                        checked={rememberMe}
                                        onChange={handleCheckboxChange}
                                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">Remember Me</label>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <button
                                        type="submit"
                                        className={`inline-block rounded-lg border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
                                        disabled={loading}
                                    >
                                        {loading ? 'Signing In...' : 'Sign In'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className="inline-block rounded-lg border border-gray-300 bg-gray-300 px-12 py-3 text-sm font-medium text-gray-900 transition hover:bg-transparent hover:text-gray-900 focus:outline-none focus:ring active:text-gray-500"
                                        style={{ padding: '0.75rem 3rem' }} // Padding (updated) for alignment consistency
                                    >
                                        Reset
                                    </button>
                                </div>

                                <div className="mt-4 text-sm text-gray-500 text-center">
                                    Don't have an account?{' '}
                                    <Link href="/SignUp" className="text-blue-600 underline">Sign up</Link>.
                                </div>
                                <div className="mt-4 text-sm text-gray-500 text-center">
                                    <Link href="/ResetPassword" className="text-blue-600 underline">Forgot Password?</Link>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>
        </>
    );
}

export default SignIn;
