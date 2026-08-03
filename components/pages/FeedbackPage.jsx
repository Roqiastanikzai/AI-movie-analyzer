import { useState } from "react";

const ratingLabels = [
  "Poor",
  "Fair",
  "Good",
  "Very Good",
  "Excellent",
];

function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    feedback: "",
    category: "Overall Experience",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`App feedback from ${formData.name || "a user"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name || "Not provided"}\n` +
        `Email: ${formData.email || "Not provided"}\n` +
        `Rating: ${formData.rating}/5 (${ratingLabels[formData.rating - 1] || "Excellent"})\n` +
        `Category: ${formData.category}\n\n` +
        `Feedback:\n${formData.feedback}`
    );

    window.location.href = `mailto:roqiastanikzai5@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10">
      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
        <div className="border-b border-white/10 bg-gradient-to-r from-red-500/10 via-purple-500/10 to-yellow-500/10 px-6 py-8 sm:px-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Your Voice Matters
          </p>
          <h1 className="text-3xl font-black text-white sm:text-5xl">Feedback & Reviews</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
            Tell me what you love, what can improve, and how you feel about the app experience.
          </p>
        </div>

        <div className="grid gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[1.1fr_1.4fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
            <h2 className="text-xl font-bold text-white">Rate the app</h2>
            <div className="mt-6 flex items-center gap-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                  className={`text-3xl transition-transform hover:scale-110 ${
                    star <= formData.rating ? "text-yellow-400" : "text-slate-600"
                  }`}
                  aria-label={`Rate ${star} out of 5`}
                >
                  ★
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-yellow-400/30 bg-yellow-500/10 px-4 py-3 text-sm text-yellow-200">
              {formData.rating}/5 - {ratingLabels[formData.rating - 1] || "Excellent"}
            </div>

            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div>
                <p className="font-semibold text-white">Why feedback matters</p>
                <p className="mt-1">It helps me improve the app experience, usability, and recommendations.</p>
              </div>
              <div>
                <p className="font-semibold text-white">Need a quick reply?</p>
                <p className="mt-1">You can also send direct feedback by email through this form.</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-white/10 bg-slate-950/40 p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-200">
                Full Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-white outline-none transition focus:border-purple-500"
                />
              </label>

              <label className="block text-sm font-medium text-slate-200">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-white outline-none transition focus:border-purple-500"
                />
              </label>
            </div>

            <label className="block text-sm font-medium text-slate-200">
              Feedback Type
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-white outline-none transition focus:border-purple-500"
              >
                <option>Overall Experience</option>
                <option>Design / UI</option>
                <option>Recommendations</option>
                <option>Performance</option>
                <option>Bug Report</option>
                <option>Feature Request</option>
              </select>
            </label>

            <label className="block text-sm font-medium text-slate-200">
              Your Review
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                rows={7}
                placeholder="I like the app because... I would improve..."
                required
                className="mt-2 w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-white outline-none transition focus:border-purple-500"
              />
            </label>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 px-6 py-3 text-sm font-bold text-black shadow-xl transition hover:scale-[1.02]"
              >
                Send Feedback
              </button>

              {isSubmitted && (
                <span className="text-sm text-emerald-400">Your email app is opening with your feedback.</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
