import { useState } from 'react';

export default function InteractiveForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const questions = [
    "Are you 18 years of age or older?",
    "Are you a resident of the United States?",
    "Did you earn income in the past year?",
    "Would you like to claim your $1,400 bonus now?"
  ];

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleContinue = () => {
    alert('Thank you for your interest! This is a demonstration page.');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-semibold text-blue-600">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          {questions[currentQuestion]}
        </h3>

        {currentQuestion < questions.length && (
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => handleAnswer(true)}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors shadow-lg"
            >
              YES
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors shadow-lg"
            >
              NO
            </button>
          </div>
        )}

        {currentQuestion === questions.length && (
          <div className="text-center">
            <p className="text-xl text-green-600 font-bold mb-6">
              Great! You're all set to claim your bonus!
            </p>
            <button
              onClick={handleContinue}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-16 rounded-lg text-xl transition-colors shadow-lg"
            >
              CONTINUE TO CLAIM
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
