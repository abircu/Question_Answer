import React, { useState } from "react";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { BiSolidDownArrowCircle } from "react-icons/bi";

const Content = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [leftlikeCount, setLeftCount] = useState(0);
  const handleRightArrow = () => {
    setLikeCount(likeCount + 1);
  };
  const handleLeftArrow = () => {
    setLeftCount(leftlikeCount + 1);
  };

  const Question = [
    {
      id: 1,
      question: "What is the capital of France?",
      answer: "The capital of France is Paris.",
    },
    {
      id: 2,
      question: "Who wrote 'Romeo and Juliet'?",
      answer: "William Shakespeare wrote 'Romeo and Juliet'.",
    },
    {
      id: 3,
      question: "What is the tallest mountain in the world?",
      answer: "Mount Everest is the tallest mountain in the world.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-200">
      <div className="w-full max-w-6xl mx-auto">
        {Question.map((singleQuestion) => (
          <div key={singleQuestion.id} className="card w-full p-3  mt-6">
            <div className="flex gap-3">
              <div>
                <h1 className="text-xl">{singleQuestion.id}</h1>
              </div>
              <div>
                <title className="card-title text-start">
                  {singleQuestion.question}
                </title>
                <p className="text-start">{singleQuestion.answer}</p>
              </div>
            </div>
            <div className="items-start btn btn-ghost flex w-44 mt-4">
              <button
                className="flex justify-center items-center"
                onClick={handleRightArrow}
              >
                <BiSolidUpArrowCircle className="text-3xl"></BiSolidUpArrowCircle>
                <p className="text-2xl">{likeCount}</p>
              </button>
              <button
                className="flex justify-center items-center"
                onClick={handleLeftArrow}
              >
                <BiSolidDownArrowCircle className="text-3xl"></BiSolidDownArrowCircle>
                <p className="text-2xl">{leftlikeCount}</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
