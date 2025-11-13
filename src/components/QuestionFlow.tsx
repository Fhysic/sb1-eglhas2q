import { useState } from 'react';

interface Question {
  id: string;
  text: string;
}

const questions: Question[] = [
  { id: 'received', text: 'Have you received this before?' },
  { id: 'age', text: 'Are you 18 years of age or older?' },
  { id: 'citizen', text: 'Are you a U.S. resident?' },
  { id: 'income', text: 'Have you earned an income this year?' },
];

export default function QuestionFlow() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showCongrats, setShowCongrats] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer: boolean) => {
    const newAnswers = { ...answers, [currentQuestion.id]: answer };
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => setCurrentQuestionIndex(currentQuestionIndex + 1), 300);
    } else {
      setTimeout(() => setShowCongrats(true), 300);
    }
  };

  if (showCongrats) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center animate-fadeIn">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-black text-blue-600 mb-4">
              Congratulations!
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">
              You Qualify for a $1,400 Stimulus Check
              <span className="block text-blue-600 mt-2">+ $250 Visa Bonus</span>
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8">
            <img
              src="https://iili.io/KyqkQX2.webp"
              alt="$250 Visa Gift Card"
              className="w-full max-w-sm mx-auto mb-6 rounded-xl shadow-lg"
            />
            <p className="text-lg text-gray-700 font-semibold mb-6">
              Your bonus will be sent to you within 5-7 business days!
            </p>
            <a
              href="https://uplevelrewarded.com/aff_c?offer_id=2557&aff_id=14721"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Claim Your Bonus Now
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-8">
      {/* Check Image at Top */}
      <div className="mb-12 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
        <img
          src="https://i.imgur.com/kH9VfV8.png"
          alt="Stimulus Check"
          className="h-32 md:h-40 drop-shadow-lg border-4 border-gray-400 rounded-lg bg-white"
        />
      </div>

      {/* Main Card */}
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-black text-center mb-6 text-black">
          Welcome
        </h1>

        <p className="text-center text-gray-700 mb-8 text-lg leading-relaxed">
          Take this simple eligibility test which won't take more than a minute and you could qualify for <span className="font-bold">$1400</span>.
        </p>

        {/* Step Indicators */}
        <div className="flex justify-center gap-4 mb-10">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                step === currentQuestionIndex + 1
                  ? 'bg-black text-white scale-110'
                  : step <= currentQuestionIndex
                    ? 'bg-black text-white'
                    : 'bg-gray-300 text-gray-600'
              }`}
            >
              {step}
            </div>
          ))}
        </div>

        {/* Question */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-8">
          {currentQuestion.text}
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleAnswer(true)}
            className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-12 rounded-full text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105 min-w-32"
          >
            Yes
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-12 rounded-full text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105 min-w-32"
          >
            No
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-12 text-center text-sm text-gray-600">
        <a href="https://trendndaily.com/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Privacy policy</a>
        {' '} • {' '}
        <a href="https://trendndaily.com/terms-and-conditions.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Terms of Use</a>
      </div>

      {/* Disclaimer Text */}
      <div className="mt-8 max-w-2xl text-center text-xs text-gray-600 leading-relaxed">
        <p className="mb-2">
          This site is not affiliated with any government agency. Eligibility for assistance programs varies and results are subject to verification.
        </p>
        <p className="mb-2 font-semibold">
          NO PURCHASE NECESSARY. Open only to legal United States residents residing in the 50 U.S./D.C., at least 18 & the age of majority in their jurisdiction of residence. Prize pictured are for illustrative purposes only. See Official Rules for information on who can play, deadlines for getting your prize, your odds of winning, prize information, and complete details. TrendDaily will cover the cost of shipping the prizes to qualified winners. Void where prohibited. Sponsor: TrendDaily
        </p>
        <p className="mb-2 text-xs">
          All third party brand names, logos, icons, and images appearing on our website are trademarks, registered trademarks or property of their respective owners.
        </p>
        <p className="text-xs">
          No endorsement by or affiliation with such third party owners is implied by bettertechtoday.co
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
