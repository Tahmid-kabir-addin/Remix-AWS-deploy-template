import { Link } from "@remix-run/react";

export const MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  return (
    <>
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Infancy IT limited
          </h1>
        </div>
      </header>

      <main className="mt-10">
        <div className="container mx-auto px-4">
          <section className="bg-white rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Welcome to My Landing Page
            </h2>
            <p className="text-gray-600">
              This is a simple landing page created with HTML and Tailwind CSS.
            </p>
            <p className="text-gray-600">
              You can customize it to fit your needs.
            </p>
            <Link
              href="#"
              className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Get Started
            </Link>
          </section>

          <section className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Feature 1
              </h3>
              <p className="text-gray-600">Description of feature 1.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Feature 2
              </h3>
              <p className="text-gray-600">Description of feature 2.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Feature 3
              </h3>
              <p className="text-gray-600">Description of feature 3.</p>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-white shadow mt-10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-gray-600">
            &copy; 2024 My Landing Page. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
