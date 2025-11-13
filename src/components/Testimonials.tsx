import { ThumbsUp } from 'lucide-react';

export default function Testimonials() {
  const comments = [
    {
      name: "Sarah M.",
      date: "February 14, 2024",
      text: "Just received my $1,400! The process was so easy and straightforward. Highly recommend!",
      likes: 247,
      avatar: "SM"
    },
    {
      name: "James T.",
      date: "February 14, 2024",
      text: "I was skeptical at first but it's legit! Got my bonus within a week.",
      likes: 189,
      avatar: "JT"
    },
    {
      name: "Maria G.",
      date: "February 13, 2024",
      text: "Amazing! Used the money to pay off some bills. Thank you so much!",
      likes: 312,
      avatar: "MG"
    },
    {
      name: "David R.",
      date: "February 13, 2024",
      text: "Fast and easy process. Received my payment via direct deposit.",
      likes: 156,
      avatar: "DR"
    },
    {
      name: "Jennifer L.",
      date: "February 12, 2024",
      text: "This is incredible! Put the money towards my savings. Couldn't be happier!",
      likes: 203,
      avatar: "JL"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        What People Are Saying
      </h2>

      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold flex-shrink-0">
                {comment.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-gray-900">{comment.name}</h4>
                  <span className="text-sm text-gray-500">{comment.date}</span>
                </div>
                <p className="text-gray-700 mb-3">{comment.text}</p>
                <div className="flex items-center gap-2 text-gray-600">
                  <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm font-semibold">{comment.likes}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
