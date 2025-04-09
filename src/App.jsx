import Question from './componentes/Question'
import { Boxes } from 'lucide-react'
import { useState } from 'react'

function App() {
  const questions = [
    {
      question: "Qual é o tempo verbal do verbo is na frase: Cybersecurity is the practice of protecting systems...",
      options: [
        { id: "A", text: "A) Presente simples" },
        { id: "B", text: "B) Passado simples" },
        { id: "C", text: "C) Presente contínuo" },
        { id: "D", text: "D) Futuro" },
        { id: "E", text: "E) Presente perfeito" }
      ],
      answer: "A"
    },
    {
      question: "Na frase: 'These cyberattacks are usually aimed at...', qual o tempo verbal do verbo 'are'?",
      options: [
        { id: "A", text: "A) Presente contínuo" },
        { id: "B", text: "B) Presente simples" },
        { id: "C", text: "C) Passado simples" },
        { id: "D", text: "D) Futuro" },
        { id: "E", text: "E) Passado perfeito" }
      ],
      answer: "B"
    },
    {
      question: "Complete: In the future, cybersecurity ___ more critical.",
      options: [
        { id: "A", text: "A) is" },
        { id: "B", text: "B) are" },
        { id: "C", text: "C) was" },
        { id: "D", text: "D) be" },
        { id: "E", text: "E) will be" }
      ],
      answer: "E"
    }
  ]

  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (index, selected) => {
    setAnswers(prev => ({ ...prev, [index]: selected }))
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const correctCount = questions.reduce((count, q, index) => {
    return answers[index] === q.answer ? count + 1 : count
  }, 0)

  return (
    <div className="bg-black min-h-screen text-white font-sans px-4 py-6">
      <div className="flex flex-col items-center space-y-2">
        <img className="h-20" src="elli.png" alt="Logo" />
        <h1 className="text-green-400 text-3xl font-bold">CYBERSECURITY</h1>
        <p className="text-center text-green-200 max-w-3xl">
          Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks...
        </p>
      </div>

      <div className='pt-3'>
        <p className='text-lg text-green-400 font-semibold text-center'>Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information. In today’s world, where people use the internet for banking, shopping, studying, and communicating, cybersecurity has become more important than ever.

Hackers have developed advanced techniques to break into systems and steal data. For example, last year many companies were attacked through email phishing scams. Because of this, organizations have been investing in stronger security systems and training their staff. At the same time, users need to be careful with passwords and suspicious links.

In the future, cybersecurity will be even more critical. As technology continues to evolve, so will the threats. Developers will create more intelligent systems to detect and prevent attacks before they happen. Everyone must do their part to stay safe online.</p>
      </div>

      <div className="my-8 border-t border-green-400" />

      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-green-200 font-semibold text-xl">CYBERSECURITY IN OUR DAILY LIVES</h2>
        <Boxes className="text-green-200 h-5" />
      </div>

      <div className="mt-6 flex flex-col items-center space-y-4">
        {questions.map((q, index) => (
          <Question
            key={index}
            question={q.question}
            options={q.options}
            selected={answers[index]}
            setSelected={(val) => handleAnswer(index, val)}
            isCorrect={showResults ? q.answer === answers[index] : null}
            correctAnswer={q.answer}
          />
        ))}

        <button
          onClick={handleSubmit}
          className="bg-green-500 text-black font-bold px-6 py-2 rounded hover:bg-green-300 transition"
        >
          ENVIAR
        </button>

        {showResults && (
          <div className="text-center mt-6">
            <h4 className="text-green-200 text-2xl font-bold">Você acertou:</h4>
            <p className="text-purple-400 text-4xl font-bold">{correctCount} / {questions.length}</p>
          </div>
        )}
      </div>

      <div className="my-8 border-t border-green-400" />

      <div className="flex items-center justify-center space-x-4">
        <h5 className="text-green-200 text-xl font-semibold">AQUI CONCLUÍMOS NOSSO TRABALHO GOODBYE</h5>
        <img src="elli2.png" alt="Goodbye" className="h-24" />
      </div>
    </div>
  )
}

export default App
