function Footer() {
  return (
    <footer id="contact" className="relative mt-12 w-full border-t-2 border-transparent bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
      <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-red-500 via-purple-500 via-indigo-500 via-cyan-500 to-yellow-500 bg-[length:200%_auto] animate-gradient" />

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 py-8 text-center sm:px-6 sm:py-10">
        <h2 className="bg-gradient-to-r from-red-400 via-purple-400 via-indigo-400 to-yellow-400 bg-clip-text text-2xl font-bold tracking-wide text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-3xl">
          Contact Information
        </h2>

        <p className="text-base font-semibold tracking-wide text-gray-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] sm:text-lg">
          Developed and designed by{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text font-extrabold tracking-wider text-transparent">
            Roqia Stanikzai
          </span>
        </p>

        <div className="flex w-full max-w-2xl flex-col items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_1px_6px_rgba(255,255,255,0.05)] sm:px-6">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
            <p className="text-sm text-gray-400 sm:text-base">
              Email:{" "}
              <a href="mailto:roqiastanikzai5@gmail.com" className="font-bold text-yellow-400 transition hover:underline">
                roqiastanikzai5@gmail.com
              </a>
            </p>

            <div className="hidden h-4 w-[1px] bg-slate-800 sm:block" />

            <p className="text-sm text-gray-400 sm:text-base">
              Phone:{" "}
              <a href="tel:0764927235" className="font-bold text-yellow-400 transition hover:underline">
                0764927235
              </a>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-sm">
            <a
              href="https://github.com/Roqiastanikzai"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-cyan-300 transition hover:text-cyan-200 hover:underline"
            >
              GitHub Profile
            </a>
            <a
              href="https://yagankar.com/profiles/Roqiastanikzai5"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-violet-300 transition hover:text-violet-200 hover:underline"
            >
              Yagankar Profile
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;