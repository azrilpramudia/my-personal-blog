const Home = () => {
  return (
    <div className="font-poppins min-h-screen">
      {/* --- HERO SECTION --- */}
      <div className="mx-auto max-w-5xl border-b border-(--nav-border-current) bg-(--nav-bg-current)">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h1 className="text-4xl font-bold text-(--nav-text-current)">
            Welcome to The Daily Dev
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Insights, tutorials, stories — everything about software
            development, web technologies, and programming life.
          </p>
        </div>
      </div>

      {/* --- LATEST POSTS --- */}
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="mb-6 text-2xl font-semibold">Latest Posts</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1 */}
          <div className="rounded-lg border bg-white p-5 shadow-sm transition hover:shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-xl font-semibold">
              Getting Started with React
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Learn how to build your first React application with modern tools
              and best practices.
            </p>
            <button className="mt-4 text-blue-600 hover:underline dark:text-blue-400">
              Read more →
            </button>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg border bg-white p-5 shadow-sm transition hover:shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-xl font-semibold">
              Understanding JavaScript Closures
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              A simple explanation of closures and how they work behind the
              scenes.
            </p>
            <button className="mt-4 text-blue-600 hover:underline dark:text-blue-400">
              Read more →
            </button>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg border bg-white p-5 shadow-sm transition hover:shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-xl font-semibold">
              Intro to IoT with ESP32
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Build simple IoT projects using ESP32, sensors, and cloud
              communication.
            </p>
            <button className="mt-4 text-blue-600 hover:underline dark:text-blue-400">
              Read more →
            </button>
          </div>

          {/* Card 4 */}
          <div className="rounded-lg border bg-white p-5 shadow-sm transition hover:shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-xl font-semibold">
              Improve Your Frontend UI Skills
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Clean UI, consistent spacing, and good layout practices every
              developer should know.
            </p>
            <button className="mt-4 text-blue-600 hover:underline dark:text-blue-400">
              Read more →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
