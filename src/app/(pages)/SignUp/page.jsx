"use client";
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';

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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { first_name, last_name, email, password, password_confirmation } = formData;

        if (!first_name || !last_name || !email || !password || !password_confirmation) {
            toast.error('All Fields are Required');
            return;
        }

        if (password !== password_confirmation) {
            toast.error('Passwords Do Not Match');
            return;
        }

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
    };

    return (
        <>
            <section className="bg-white">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <aside className="relative block h-16 lg:order-first lg:col-span-5 lg:h-full xl:col-span-6">
                        <img
                            alt=""
                            src="https://i.pinimg.com/originals/b6/58/39/b658391177941f5b1e486874e7b18702.png"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </aside>
                    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                        <div className="max-w-xl lg:max-w-3xl">
                            <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                                Welcome to GDSC
                            </h1>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                GDSC leads are passionate about helping their peers learn technology and connect. Leads pursue various degrees within undergraduate and graduate programs.
                            </p>
                            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        id="FirstName"
                                        name="first_name"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        className="mt-2 w-full rounded-lg border border-gray-300 p-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150"
                                        placeholder="Enter your first name"
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
                                        className="mt-2 w-full rounded-lg border border-gray-300 p-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150"
                                        placeholder="Enter your last name"
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
                                        className="mt-2 w-full rounded-lg border border-gray-300 p-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700">Password</label>
                                    <input
                                        type="password"
                                        id="Password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="mt-2 w-full rounded-lg border border-gray-300 p-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150"
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                    <input
                                        type="password"
                                        id="PasswordConfirmation"
                                        name="password_confirmation"
                                        value={formData.password_confirmation}
                                        onChange={handleChange}
                                        className="mt-2 w-full rounded-lg border border-gray-300 p-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150"
                                        placeholder="Confirm your password"
                                    />
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="MarketingAccept" className="flex items-center gap-4">
                                        <input
                                            type="checkbox"
                                            id="MarketingAccept"
                                            name="marketing_accept"
                                            checked={formData.marketing_accept}
                                            onChange={handleChange}
                                            className="h-5 w-5 rounded border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                        />
                                        <span className="text-sm text-gray-700">
                                            I want to receive emails about events, product updates, and company announcements.
                                        </span>
                                    </label>
                                </div>
                                <div className="col-span-6">
                                    <p className="text-sm text-gray-500">
                                        By creating an account, you agree to our{' '}
                                        <a href="#" className="text-blue-600 underline">terms and conditions</a> and{' '}
                                        <a href="#" className="text-blue-600 underline">privacy policy</a>.
                                    </p>
                                </div>
                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button
                                        type="submit"
                                        className="inline-block shrink-0 w-full sm:w-auto bg-blue-600 border border-blue-600 text-white px-12 py-3 rounded-lg font-medium hover:bg-blue-700 hover:border-blue-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                    >
                                        Create an account
                                    </button>
                                    <Link href="/SignIn" className="mt-4 sm:mt-0 text-sm text-gray-500">
                                        Already have an account?{' '}
                                        <span className="text-blue-600 underline">Log in</span>.
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>
        </>
    );
}

export default SignUp;