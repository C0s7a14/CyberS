import React, { useEffect, useState } from "react";


type Option = {
  id: string;
  text: string;
};

type QuestionProps = {
  question: string;
  options: Option[];
  selected: string | undefined;
  setSelected: (value: string) => void;
  isCorrect: boolean | null;
  correctAnswer: string;
};

export default function Question({
  question,
  options,
  selected,
  setSelected,
  isCorrect,
  correctAnswer
}: QuestionProps) {
  return (
    <div className="bg-green-300 text-black shadow-xl rounded-xl p-5 w-full max-w-3xl">
      <h2 className="text-lg font-bold mb-4">{question}</h2>
      <div className="space-y-2">
        {options.map((option) => {
          const isSelected = selected === option.id;
          const isAnswer = correctAnswer === option.id;
          const borderColor = isCorrect === null
            ? "border-black"
            : isAnswer
              ? "border-green-600"
              : isSelected
                ? "border-red-600"
                : "border-black";

          const bgColor = isCorrect === null
            ? isSelected
              ? "bg-blue-100"
              : "hover:bg-gray-100"
            : isAnswer
              ? "bg-green-200"
              : isSelected
                ? "bg-red-200"
                : "";

          return (
            <label
              key={option.id}
              className={`flex items-center gap-2 p-3 rounded-xl border ${borderColor} ${bgColor} cursor-pointer transition`}
            >
              <input
                type="radio"
                name={question}
                value={option.id}
                checked={isSelected}
                onChange={() => setSelected(option.id)}
                className="accent-green-700"
              />
              <span className="font-semibold">{option.text}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
