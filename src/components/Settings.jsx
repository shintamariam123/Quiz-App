import React from 'react'
import { useState } from 'react';
import './Quiz.css'

function Settings() {
    const [questions] = useState([
        {
            question: 'Which function is used to serialize an object into a JSON string in Javascript?',
            options: ['convert()', 'parse()', 'stringify()', 'None of the above'],
            correctAnswer: 'stringify()'


        },
        {
            question: 'Who is CEO of Tesla?',
            options: ['Jeff Bezos', 'Elon Musk', 'Bill Gates', 'Tony Stark'],
            correctAnswer: 'Elon Musk'



        },
        {
            question: 'How many Harry Potter books are there?',
            options: ['4', '1', '3', '7'],
            correctAnswer: '7'

        },
        {
            question: 'How can a datatype be declared to be a constant type?',
            options: ['const', 'var', 'let', 'constant'],
            correctAnswer: 'const'

        },
        {
            question: 'The iPhone was created by which company?',
            options: ['Intel', 'Apple', 'Amazon', 'Microsoft'],
            correctAnswer: 'Apple'

        }
    ]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false)

    const handleAnswerClick = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);

        }
        setSelectedAnswer(selectedOption);

        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedAnswer('');
            } else {
                setResult(true);
            }
        }, 1000);

    };


    


    return (

        <>

            <div className='quiz-contain'>
                <h1 className='text-light text-center pt-3'>Quiz App</h1>

                <div className='quiz-container'>
                <div className='box border rounded'>


                    {!result ? (
                        <>
                            <div className='d-flex'>
                                <div style={{ width: '300px' }} className='pt-5 ps-3'>
                                    <h2>Question {currentQuestion + 1} of {questions.length}</h2>
                                    <p style={{ fontSize: '19px' }}>{questions[currentQuestion].question}</p>
                                </div>
                                <div style={{ width: '300px' }} className='options pt-5 ps-2 pe-3' >
                                    {questions[currentQuestion].options.map((option, index) => (
                                        <button className='btn border rounded button1' key={index} onClick={() => handleAnswerClick(option)} style={{ backgroundColor: selectedAnswer === option ? (option === questions[currentQuestion].correctAnswer ? 'green' : 'red') : 'white', width: '250px', marginBottom: '30px', height: '50px' }}
                                            disabled={selectedAnswer !== ''}>{option}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div style={{ width: '600px', height: '400px' }} className='d-flex flex-column align-items-center justify-content-center'>
                            <h2 className='mb-4'>
                                Your score: <b> {score}/{questions.length}</b>
                            </h2>
                            <button className='btn btn-danger ' onClick={() => window.location.reload()}>RESTART</button>

                        </div>
                    )}

                </div>
            </div>
        </div >
        </>


    );

}

export default Settings