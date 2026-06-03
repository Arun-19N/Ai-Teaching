import { Lightbulb } from 'lucide-react';
import UseCaseGrid from '../components/UseCaseGrid';

export default function UseCases() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center space-y-4">
        <span className="badge-blue inline-flex"><Lightbulb size={13} />Real-World Applications</span>
        <h1 className="section-title">AI Use Cases for Everyone</h1>
        <p className="section-subtitle mx-auto">
          Filter by your role and discover exactly how AI can save you time and supercharge your work today.
        </p>
      </div>
      <UseCaseGrid />
    </div>
  );
}
