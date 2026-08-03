import { useEffect, useState } from "react";

const ratingLabels = [
  "Poor",
  "Fair",
  "Good",
  "Very Good",
  "Excellent",
];

const STORAGE_KEY = "ai-movie-analyzer-feedback";

function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    feedback: "",
    category: "Overall Experience",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      setSavedCount(Array.isArray(stored) ? stored.length : 0);
    } catch (error) {
      console.error("Unable to read saved feedback:", error);
      setSavedCount(0);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.feedback.trim()) {
      alert("Please write your feedback before submitting.");
      return;
    }

    const submission = {
      id: Date.now(),
      name: formData.name || "Anonymous",
      email: formData.email || "Not provided",
      rating: formData.rating,
      category: formData.category,
      feedback: formData.feedback.trim(),
      createdAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      const list = Array.isArray(existing) ? existing : [];
      const updatedList = [submission, ...list];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
      setSavedCount(updatedList.length);
    } catch (error) {
      console.error("Unable to store feedback:", error);
      alert("Your feedback could not be saved right now. Please try again.");
      return;
    }

    setFormData({
      name: "",
      email: "",
      rating: 5,
      feedback: "",
      category: "Overall Experience",
    });
    setIsSubmitted(true);
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-3 py-6 sm:px-4 sm:py-8 lg:px-6 lg:py-10">
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/70 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:rounded-[32px]">
        <div className="border-b border-white/10 bg-gradient-to-r from-red-500/10 via-purple-500/10 to-yellow-500/10 px-4 py-6 sm:px-8 lg:px-10 lg:py-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400 sm:text-sm">
            Your Voice Matters
          </p>
          <h1 className="text-2xl font-black text-white sm:text-4xl lg:text-5xl">Feedback & Reviews</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
            Tell me what you love, what can improve, and how you feel about the app experience.
          </p>
        </div>

        <div className="grid gap-6 px-4 py-6 sm:px-8 lg:grid-cols-[1.05fr_1.4fr] lg:gap-8 lg:px-10 lg:py-8">
          <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-4 sm:p-5 lg:p-6">
            <h2 className="text-lg font-bold text-white sm:text-xl">Rate the app</h2>
            <div className="mt-5 flex items-center gap-2 sm:gap-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                  className={`text-2xl transition-transform hover:scale-110 sm:text-3xl ${
                    star <= formData.rating ? "text-yellow-400" : "text-slate-600"
                  }`}
                  aria-label={`Rate ${star} out of 5`}
                >
                  ★
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-yellow-400/30 bg-yellow-500/10 px-3 py-3 text-sm text-yellow-200 sm:px-4">
              {formData.rating}/5 - {ratingLabels[formData.rating - 1] || "Excellent"}
            </div>

            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <div>
                <p className="font-semibold text-white">Why feedback matters</p>
                <p className="mt-1">It helps improve the app experience, usability, and recommendations.</p>
              </div>
              <div>
                <p className="font-semibold text-white">Submit directly</p>
                <p className="mt-1">Your feedback is saved from this form without opening an email app.</p>
              </div>
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-emerald-300">
                Saved submissions: {savedCount}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-white/10 bg-slate-950/40 p-4 sm:p-5 lg:p-6">
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
                className="w-full rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 px-6 py-3 text-sm font-bold text-black shadow-xl transition hover:scale-[1.02] sm:w-auto"
              >
                Send Feedback
              </button>

              {isSubmitted && (
                <span className="text-sm text-emerald-400">Thanks! Your feedback has been saved successfully.</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
