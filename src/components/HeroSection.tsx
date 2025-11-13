import { CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Congratulations! You Qualify for a $1,400 Bonus
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Complete the steps below to claim your bonus today
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
          Verification Checklist
        </h2>

        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
            <CheckCircle2 className="text-green-600 w-6 h-6 flex-shrink-0" />
            <span className="text-gray-800 font-medium">Age: 18 years or older ✓</span>
          </div>

          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
            <CheckCircle2 className="text-green-600 w-6 h-6 flex-shrink-0" />
            <span className="text-gray-800 font-medium">Location: United States resident ✓</span>
          </div>

          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
            <CheckCircle2 className="text-green-600 w-6 h-6 flex-shrink-0" />
            <span className="text-gray-800 font-medium">Income: Qualifying income bracket ✓</span>
          </div>

          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
            <CheckCircle2 className="text-green-600 w-6 h-6 flex-shrink-0" />
            <span className="text-gray-800 font-medium">Status: Pre-approved for bonus ✓</span>
          </div>
        </div>
      </div>
    </div>
  );
}
