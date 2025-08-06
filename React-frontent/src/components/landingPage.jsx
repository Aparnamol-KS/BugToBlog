function Landing() {
    return (
        <div className="flex flex-col items-center justify-center h-screen font-serif bg-gradient-to-r from-pink-300 to-sky-300">
            <h3 className="text-[90px] font-bold font-serif mb-4">Blogging Spot</h3>
            <p className="text-lg text-center mb-6">
                Create, Share, and Explore Amazing Blogs by People Like You!
            </p>
            <div className="space-x-4">
                <button
                    className="bg-black text-white px-6 py-2 rounded-md text-base hover:bg-gray-900 transition"
                    onClick={() => window.location = "/signup"}
                >
                    Get Started
                </button>
                <button
                    className="bg-white text-black border border-black px-6 py-2 rounded-md text-base hover:bg-gray-100 transition"
                    onClick={() => window.location = "/signin"}
                >
                    Sign In
                </button>
            </div>
        </div>
    );
}

export default Landing;
