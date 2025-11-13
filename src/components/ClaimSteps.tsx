export default function ClaimSteps() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          How to Claim Your $1,400 Bonus
        </h2>

        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Answer Verification Questions</h3>
                <p className="text-gray-700">
                  Complete a quick survey to verify your eligibility. This ensures you meet all requirements for the bonus.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Select Your Preferred Method</h3>
                <p className="text-gray-700">
                  Choose how you'd like to receive your bonus: direct deposit, check, or prepaid Visa card.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Registration</h3>
                <p className="text-gray-700">
                  Provide your contact information to complete the claim process. All information is kept secure and confidential.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Receive Your Bonus</h3>
                <p className="text-gray-700">
                  Your $1,400 bonus will be processed and sent within 5-7 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
