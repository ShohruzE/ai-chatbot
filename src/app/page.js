import Image from "next/image";
import Link from "next/link";
import ProfileDropdown from "../components/ProfileDropdown.jsx";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="w-full bg-blue-900 text-white flex justify-between p-4">
        <div className="flex items-center">
          <Image
            src="/images/delta header logo.png"
            alt="Delta Logo"
            width={300}
            height={40}
            className="h-10"
          />
        </div>
        <div className="flex items-center">
          <Link href="/signup">
            <button className="mr-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Log In
            </button>
          </Link>
          <ProfileDropdown />
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative text-center text-white bg-cover bg-center w-full"
        style={{ backgroundImage: "url(/images/beach.png)" }}
      >
        <div className="container mx-auto py-24">
          <h1 className="text-4xl font-bold">
            Welcome to Delta Air Lines Customer Support Bot
          </h1>
          <p className="mt-4 text-lg">
            Your Personal Assistant for Managing Your Flights and Profile
          </p>
          <button className="mt-8 bg-red-600 text-white px-6 py-3">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Delta Customer Experience Section */}
      <section className="bg-white relative text-center text-blue-900 bg-cover bg-center w-full">
        <div className="container mx-auto py-24">
          <h2 className="text-xl font-bold uppercase">
            The Delta Customer Experience
          </h2>
          <h1 className="mt-2 text-4xl font-bold">
            Supporting You Through Your Travel Journey
          </h1>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
          FEATURES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/flightInfo.png"
              alt="Flight Information"
              width={400}
              height={200}
              className="object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-900">
              Flight Information
            </h3>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/profileMangement.png"
              alt="Profile Management"
              width={400}
              height={200}
              className="object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-900">
              Profile Management
            </h3>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/bookingAssistance.png"
              alt="Booking Assistance"
              width={400}
              height={200}
              className="object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-900">
              Booking Assistance
            </h3>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/support.png"
              alt="Support"
              width={400}
              height={200}
              className="object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-900">
              Support
            </h3>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-blue-900">
          <h2 className="text-3xl text-center font-extrabold mb-8">
            HOW IT WORKS
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-bold">
              Step 1: Log In/Create an Account
            </p>
            <p className="text-xl font-bold">Step 2: Access the Chatbot</p>
            <p className="text-xl font-bold">
              Step 3: Ask Questions/Get Assistance
            </p>
            <p className="text-xl font-bold">
              Step 4: Get Real-Time Help and Manage Your Account
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-blue-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>© 2024 Delta Air Lines, Inc. | Travel may be on other airlines.</p>
        </div>
      </footer>
    </main>
  );
}
