"use client";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        marketing_accept: false,
    });
    const [passwordStrength, setPasswordStrength] = useState('');
    const [touchedFields, setTouchedFields] = useState({});
    const [showPasswordErrors, setShowPasswordErrors] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));

        if (name === 'password') {
            setPasswordStrength(getPasswordStrength(value));
        }

        setTouchedFields((prev) => ({ ...prev, [name]: true }));
    };

    const getPasswordStrength = (password) => {
        if (!password) return '';
        const lengthCriteria = password.length >= 8;
        const numberCriteria = /\d/.test(password);
        const upperCaseCriteria = /[A-Z]/.test(password);
        const lowerCaseCriteria = /[a-z]/.test(password);
        const specialCharacterCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const hasRepeats = /(.)\1{2,}/.test(password);

        if (
            lengthCriteria &&
            numberCriteria &&
            upperCaseCriteria &&
            lowerCaseCriteria &&
            specialCharacterCriteria &&
            !hasRepeats
        ) {
            return 'strong';
        }

        if (lengthCriteria && (numberCriteria || specialCharacterCriteria)) {
            return 'medium';
        }

        if (hasRepeats || !lengthCriteria) {
            return 'weak';
        }

        return 'weak';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowPasswordErrors(true);
        setIsSubmitting(true);

        const { first_name, last_name, email, password, password_confirmation } = formData;

        if (!first_name || !last_name || !email || !password || !password_confirmation) {
            toast.error('All fields are required');
            setIsSubmitting(false);
            return;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            toast.error('Invalid email format');
            setIsSubmitting(false);
            return;
        }

        if (passwordStrength === 'weak') {
            toast.error('Your password is too weak. Please choose a stronger password.');
            setIsSubmitting(false);
            return;
        }

        if (password !== password_confirmation) {
            toast.error('Passwords do not match');
            setIsSubmitting(false);
            return;
        }

        try {
            localStorage.setItem('user', JSON.stringify(formData));
            toast.success('Account created successfully!');

            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirmation: '',
                marketing_accept: false,
            });

            router.push('/SignIn');
        } catch (error) {
            toast.error('Failed to create account. Please try again.');
            console.error('Account creation error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <section className="bg-gray-50">
                <div className="lg:flex lg:h-screen">
                    <aside className="relative lg:flex-grow lg:w-1/2">
                        <img
                            alt="Signup Background"
                            src="https://i.pinimg.com/originals/b6/58/39/b658391177941f5b1e486874e7b18702.png"
                            className="absolute inset-0 h-full w-full object-cover rounded-l-lg shadow-lg"
                        />
                    </aside>
                    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:flex-grow lg:w-1/2 bg-gradient-to-r from-blue-200 to-white">
                        <div className="max-w-xl lg:max-w-3xl bg-white rounded-lg shadow-xl p-10">
                            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 sm:text-5xl text-center">Welcome to GDSC</h1>
                            <p className="mt-4 text-gray-600 leading-relaxed text-center">
                                GDSC leads are passionate about helping their peers learn technology and connect.
                            </p>
                            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6" noValidate>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        id="FirstName"
                                        name="first_name"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        className="mt-2 w-full rounded-lg border border-gray-300 p-3 text-gray-900 shadow-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-200 hover:shadow-lg"
                                        placeholder="Enter your first name"
                                        autoComplete="given-name"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        id="LastName"
                                        name="last_name"
                                        value={formData.last_name}
                                        onChange={handleChange}
                                        className="mt-2 w-full rounded-lg border border-gray-300 p-3 text-gray-900 shadow-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-200 hover:shadow-lg"
                                        placeholder="Enter your last name"
                                        autoComplete="family-name"
                                    />
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-2 w-full rounded-lg border border-gray-300 p-3 text-gray-900 shadow-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-200 hover:shadow-lg"
                                        placeholder="Enter your email"
                                        autoComplete="email"
                                    />
                                    {touchedFields.email && formData.email && !/\S+@\S+\.\S+/.test(formData.email) && (
                                        <p className="mt-2 text-red-500 text-sm">Invalid email format</p>
                                    )}
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700">Password</label>
                                    <input
                                        type="password"
                                        id="Password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="mt-2 w-full rounded-lg border border-gray-300 p-3 text-gray-900 shadow-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-200 hover:shadow-lg"
                                        placeholder="Enter your password"
                                        autoComplete="new-password"
                                    />
                                    {showPasswordErrors && formData.password.length === 0 && (
                                        <p className="mt-2 text-red-500 text-sm">Password is required</p>
                                    )}
                                    {passwordStrength === 'weak' && (
                                        <p className="mt-2 text-red-500 text-sm">Your password is too weak. Please choose a stronger password.</p>
                                    )}
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="ConfirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                    <input
                                        type="password"
                                        id="ConfirmPassword"
                                        name="password_confirmation"
                                        value={formData.password_confirmation}
                                        onChange={handleChange}
                                        className="mt-2 w-full rounded-lg border border-gray-300 p-3 text-gray-900 shadow-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-200 hover:shadow-lg"
                                        placeholder="Re-enter your password"
                                        autoComplete="new-password"
                                        onFocus={() => setTouchedFields((prev) => ({ ...prev, password_confirmation: true }))}
                                    />
                                    {touchedFields.password_confirmation && formData.password_confirmation && formData.password_confirmation !== formData.password && (
                                        <p className="mt-2 text-red-500 text-sm">Passwords do not match</p>
                                    )}
                                </div>
                                <div className="col-span-6 flex items-start">
                                    <div className="flex h-5 items-center">
                                        <input
                                            id="marketing_accept"
                                            name="marketing_accept"
                                            type="checkbox"
                                            checked={formData.marketing_accept}
                                            onChange={handleChange}
                                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="marketing_accept" className="font-medium text-gray-700">I want to receive updates about GDSC and upcoming events.</label>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold shadow-md hover:bg-blue-700 transition duration-200 disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Creating...' : 'Create Account'}
                                    </button>
                                </div>
                            </form>
                            <p className="mt-4 text-center text-gray-600">
                                Already have an account? <Link href="/SignIn" className="text-blue-600 hover:underline">Login</Link>
                            </p>
                        </div>
                    </main>
                </div>
            </section>
        </>
    );
}

export default SignUp;
