export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-pink-500">Vireel</h1>
        <div className="space-x-4">
          <button className="bg-gray-800 px-4 py-2 rounded-lg">Login</button>
          <button className="bg-pink-500 px-4 py-2 rounded-lg font-semibold">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h2 className="text-5xl font-bold mb-6">
          The Future of Content Creation 🌍
        </h2>
        <p className="text-gray-400 max-w-2xl mb-8">
          Create short videos, AI content, and go viral globally on Vireel.
          Built for creators who want views, followers, and earnings.
        </p>

        <div className="flex gap-4">
          <button className="bg-pink-500 px-6 py-3 rounded-xl text-lg font-bold">
            Start Creating
          </button>
          <button className="bg-gray-800 px-6 py-3 rounded-xl text-lg">
            Explore Videos
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 px-10 pb-20">
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">🎥 Short Videos</h3>
          <p className="text-gray-400">
            Upload and share viral short videos like TikTok & Reels.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">🤖 AI Generator</h3>
          <p className="text-gray-400">
            Generate AI videos, images, and content in seconds.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">💰 Earn From Views</h3>
          <p className="text-gray-400">
            Monetize your content with ads and creator rewards.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-6 border-t border-gray-800 text-gray-500">
        © 2026 Vireel - Global Creator Platform
      </footer>
    </div>
  );
}