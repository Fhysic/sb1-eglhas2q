import { Analytics } from '@vercel/analytics/react';
import QuestionFlow from './components/QuestionFlow';

function App() {
  return (
    <>
      <QuestionFlow />
      <Analytics />
    </>
  );
}

export default App;
