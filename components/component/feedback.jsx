/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/WAburm6sIto
 */
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Feedback({ setShowFeedback }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold">Leave feedback</h2>
          <button className="text-black">
            <PanelTopCloseIcon onClick={() => setShowFeedback(false)} className="h-6 w-6" />
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          We'd love to hear what went well or how we can improve the product
          experience.
        </p>
        <div className="mt-4">
          <Textarea
            className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
            placeholder="What if..."
          />
        </div>
        <div className="flex space-x-2 mt-4">
          <button className="p-2 rounded-full border border-gray-300">
            <SmileIcon className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full border border-gray-300">
            <MehIcon className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full border border-gray-300">
            <SmileIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-4 flex justify-end">
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

function PanelTopCloseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      >
      <rect
        width="18"
        height="18"
        x="3"
        y="3"
        rx="2"
        ry="2"
      />
      <line
        x1="3"
        x2="21"
        y1="9"
        y2="9"
      />
      <path d="m9 16 3-3 3 3" />
    </svg>
  );
}

function SmileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle
        cx="12"
        cy="12"
        r="10"
      />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line
        x1="9"
        x2="9.01"
        y1="9"
        y2="9"
      />
      <line
        x1="15"
        x2="15.01"
        y1="9"
        y2="9"
      />
    </svg>
  );
}

function MehIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle
        cx="12"
        cy="12"
        r="10"
      />
      <line
        x1="8"
        x2="16"
        y1="15"
        y2="15"
      />
      <line
        x1="9"
        x2="9.01"
        y1="9"
        y2="9"
      />
      <line
        x1="15"
        x2="15.01"
        y1="9"
        y2="9"
      />
    </svg>
  );
}
