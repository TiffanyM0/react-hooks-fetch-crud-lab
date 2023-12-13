import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(r=> r.json())
      .then((data)=>(setQuestions(data)))
  }, []);

  const handleDeleteQuestion = (deletedId) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== deletedId)
    );
  };

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDelete={handleDeleteQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;