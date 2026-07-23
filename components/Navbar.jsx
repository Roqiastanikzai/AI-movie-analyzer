import { useState } from "react";
import { FaFilm } from "react-icons/fa";
function Navbar() { 
    const [activeTab, setActiveTab] = useState("home");
    return (
        <nav className="sticky top-0 z-50 
        bg-gradient-to-r from_slate-950 via-slate-900 to-indigo-950 
        backdrop-blur-md 
        border-b-5 border-transparent
         shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
         >
            {/* 3D Multi-color neon accent line at the very bottom */}
            <div className=" absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r  from-red-500 via-purple-500 via-indigo-500 via-cyan-500 to-yellow-500 animate-gradient bg-[length:200%_auto]"></div>
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/*Logo and 3D App Title */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="bg-gradient-to-br from-red-500 via-purple-500 to-yellow-500 p-2 rounded-full 
                    shadow-[0_0_15px_rgba(239,68,68,0.3),inset_0_1px_2px_rgba(255,255,255,0.4)]">
                        <FaFilm className="text-black text-1xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]" />
                    </div>
                        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-red-400 via-purple-400 via-indigo-400  to-yellow-400 bg-clip-text text-transparent
                         drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            AI Movie Analyzer
                        </h1>
                        </div>
                    {/* Multi-color Active Navigation Links */}
                    <div className="flex items-center gap-6">
                    <a href="#home" onClick={() => setActiveTab("home")}className={` cursor-pointer transition-all duration-300 px-4 py-2 rounded-full text-sm tracking-wide  ${
                        activeTab === "home"
                        ? "text-white font-extrabold scale-105 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-indigo-500/20 shadow-[0_0_15px_rgba(168,85,247,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)] border border-purple-500/40"
                        : "text-gray-300 font-medium hover:text-white hover:bg-slate-800/40"
                    }`}
                        >
                        Home
                    </a>
               
               <a href="#movies" onClick={() => setActiveTab("movies")}className={` cursor-pointer transition-all duration-300 px-4 py-2 rounded-full text-sm tracking-wide ${
                        activeTab === "movies"
                        ? "text-white font-extrabold scale-105 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-cyan-500/20 shadow-[0_0_15px_rgba(99,102,241,0.4),inset_1px_1px_rgba(255,255,255,0.05)] border border-indigo-500/40"
                        : "text-gray-400 font-medium hover:text-white hover:bg-slate-800/40"
                    }`}
                        >
                        My Movies
                    </a>

                    <a href="#analysis" onClick={() => setActiveTab("analysis")}className={` cursor-pointer transition-all duration-300 px-4 py-2 rounded-full text-sm tracking-wide ${
                        activeTab === "analysis"
                        ? "text-white font-extrabold scale-105 bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-yellow-500/20 shadow-[0_0_15px_rgba(6,182,212,0.4)inset_0_1px_1px_rgba(255,255,255,0.05)] border border-cyan-500/40"
                        : "text-gray-400 font-medium hover:text-white hover:bg-slate-800/40"
                    }`}
                        >
                        AI Analysis
                    </a>
                </div>
                </div>
        </nav>
    );
}

export default Navbar;