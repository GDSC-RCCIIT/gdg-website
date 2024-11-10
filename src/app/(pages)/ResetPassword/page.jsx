"use client";
import { useState } from "react";
import {toast,Toaster} from "react-hot-toast"
import Link from "next/link";
import { useRouter } from "next/navigation";


function Forgot() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
  });
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate email format
    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(
        !emailPattern.test(value) ? "Please enter a valid email address" : ""
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { email } = formData;
    if (!email) {
      toast.error("Please add email");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/SendResetPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail: email }), // Changed from email to userEmail
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Email sent successfully!");
        setFormData((prev) => ({
          ...prev,
          email: "",
        }));
      } else {
        toast.error(result.message || "Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <Toaster />
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
                Reset Password
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500 text-center">
                You will receive a link on your email by which you can reset
                your password.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
                noValidate
              >
                <div>
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-2 w-full rounded-lg border ${
                      emailError ? "border-red-500" : "border-gray-300"
                    } p-3 text-gray-900 shadow-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150`}
                    placeholder="Enter your email"
                    aria-invalid={emailError ? "true" : "false"}
                    aria-describedby="email-error"
                  />
                  {emailError && (
                    <p id="email-error" className="mt-1 text-sm text-red-500">
                      {emailError}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-4">
                  <button
                    type="submit"
                    className={`inline-block rounded-lg border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 ${
                      loading ? "cursor-not-allowed opacity-50" : ""
                    }`}
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

export default Forgot;
