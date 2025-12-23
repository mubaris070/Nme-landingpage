function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#E4EEFF] to-[#7D99FF]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Welcome to NME
        </h1>
        <p className="mt-4 text-lg text-gray-700 text-center max-w-xl">
          Insights, stories, and tips for local businesses & smart shoppers.
        </p>
      </div>
    </div>
  );
}

export default Home;
