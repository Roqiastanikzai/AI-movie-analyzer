function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950
        border-t-2 border-transparent
        relative
        shadow-[0_10px_30px_rgba(0,0,0,0.6)] mt-12">

           {/*3D Multi-color neon accent line at the very top of the footer */}
           <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 via-purple-500 via-indigo-500 via-cyan-500 t0-yellow-500 animate-gradient bg-[length:200%_auto"></div>
           <div className="max-w-4xl mx-auto px-6 py-10 text-center flex flex-col items-center gap-6">
            {/*Contact Header */}
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 via-purple-400 via-indigo-400 to-yellow-4oo bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide">
                Contact Information
            </h2>
            {/*Designer Credits */}
            <p className="text-gray-300 text-lg font-semibold tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                Developed and designed by {" "}
                <span className=" bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-5 bg-clip-text text-transparent font-extrabold tracking-wider">
                    Roqia Stanikzai
                </span>
            </p>
            {/*Contact Credential Card */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center bg-slate-950/60 px-6 py-3 rounded-2xl border border-slate-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_1px_qpx_rgba(255,255,255,0.05)]">
            <p className="text-gray-400 font-medium">
                Email:{" "}
                <a href="mailto:roqiastanikzai5@gmail.com"className="text-yellow-400 font-bold hover:underline transition-all"> roqiastanikzai5@gmail.com </a>
                </p>
                <div className="hidden sm:block h-4 w-[1px] bg-slate-800"></div>
                <p className="text-gray-400 font-medium">
                    Phone:{" "}
                    <a href="tel:0764927235" className="text-yellow-400 font-bold hover:underline transtion-all">
                        0764927235
                    </a>
                    </p>
                </div>
            </div> 
        </footer>
    );
}
export default Footer;