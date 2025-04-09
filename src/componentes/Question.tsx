import { useState } from "react";
import React from 'react';


type Option = {
  id: string;
  text: string;
};

type QuestionProps = {
  question: string;
  options: Option[];
};

export default function Question({ question, options }: QuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="bg-green-400 shadow-2xl rounded-2xl p-4 mb-6 w-full ">
      <h2 className="text-xl font-bold mb-4">{question}</h2>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.id}
            className={`flex items-center font-bold gap-2 p-3 rounded-xl border border-black cursor-pointer transition ${
              selectedOption === option.id
                ? "bg-blue-100 border-blue-500"
                : "hover:bg-gray-100"
            }`}
          >
            <input
              type="radio"
              name={question} 
              value={option.id}
              checked={selectedOption === option.id}
              onChange={() => setSelectedOption(option.id)}
              className="accent-blue-500"
            />
            <span>{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
