import { FaFilm, FaBrain, FaStar, FaArrowRight } from "react-icons/fa";
function LandingPage({onEnterApp}) {
    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between overflow-x-hidden relative">
            {/*Background Glow Accents */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[300px] h-[300px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        {/*Simplified landing Header */}
        <header className="max-w-7xl mx-auto w-full px-6 py-6 flex items-center justify-betweenborder-b bporder-slate-900">
            <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-red-500 via-purple-500 to-yellow-500 p-2 rounded-full shadow-md">
                    <FaFilm className="text-black text-xl" />
 </div>
         <h1 className="text-2xl font-extrabold bg-gradient-to-r from-red-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
            AI Movie Analyzer
         </h1>
            </div>
            <button 
            onClick={onEnterApp}
            className="px-5 py-2 rounded-full text-sm font-bold border border-slate-700 bg-slate-900/50 hover:bg-slate-800 transition duration-300"
            >
                Sign In
            </button>
        </header>
        {/*Hero Section */}
        <main className="max-w-5xl mx-auto px-6 py-16 text-center flex flex-col items-center flex-grow justify-center gap-8">
            <div className="inline-flex items-center gap-2 bg-slate-900 px-4 py-1.5 rounded-full border border-slate-800 text-sm text-yellow-400 font-medium shadow-md shadow-black/40">
            <FaBrain className="text-purple-400 text-xs" />
<span className="text-slate-400">Powered by Advaced AI Insights</span>
        
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Decode Your Cinematic Taste and Discover Your  <span className="bg-gradient-to-r from-red-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent"> Movie Personality</span>
            </h2>
            <p classNAme="text-slate-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
                Stop endlessly scrolling for what to watch next. Catalog your Favorite films, manage your library collection, and let artificial intelligence analyze your ultimate cinematic preferences.
            </p>
            {/*3D Multi-color CTA Action Button  */}
            <div className="relative group mt-4">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
            <button  
            onClick={onEnterApp}
            className="relative px-8 py-4 bg-slate-900 text-white font-extrabold rounded-xl flex items-center gap-3 border border-slate-700 shadow-2xl transition duration-300 transform active:scale-95"
             >
                Launch Analyzer Workspace <FaArrowRight className="text-sm text-yellow-400" />
             </button>
            </div>
            {/*Feature Grid Quick Preview */}
            <div className="gird grid-cols-1 md:grdi-cols-3 gap-6 w-full mt-26 max-w-4xl">
                <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 text-left flex flex-col gap-3">
                <div className="bg-red-500/10 text-red-400 p-3 rounded-xl w-fit">
                <FaFilm className="text-lg" /></div>
                 <h3 className="font-bold text-lg text-white">Smart Watchlists</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">Track and search through your movie entries instantly using a fluid tracking database canvas layer.</p>
                 </div>
                 <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 text-left flex flex-col gap-3">
                 <div className="bg-purple-500/10 text-purple-400 p-3 rounded-xl w-fit">
                 <FaBrain className="text-lg" />
                 </div>
                 <h3 className="font-bold text-lg text-white">AI Deep Analysis</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">Generate accurate psychological breakdowns of your favorite subgenres and film themes dynamically.</p>
                 </div>
                 <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 text-left flex flex-col gap-3">
                 <div className="bg-purple-500/10 text-purple-400 p-3 rounded-xl w-fit">
                 <FaStar className="text-lg" />
                 </div>
                 <h3 className="font-bold text-lg text-white">Sleek 3D Interface</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">Enjoy smooth visual responsiveness packed into solid skeumorphic design mechanics built for cinema lovers.</p>
                 </div>
            </div>
        </main>
        {/*Clean Footer Info Block */}
        <footer className="w-full text-center py-6 border-t border-slate-900 text-xs text-slate-500 tracking-wide">
            &copy; {new Date().getFullYear()} AI Movie Analyzer . All rights reserved. Designed by Roqia Stanikzai.
        </footer>
        </div>
    );
} 
export default LandingPage;