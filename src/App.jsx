import Question from './componentes/Question'
import { Boxes } from 'lucide-react'
import { useState } from 'react'

function App() {
  const questions = [
    {
      question: "Qual é a principal preocupação mencionada no texto sobre segurança digital?",
      options: [
        { id: "A", text: "A) O uso de redes sociais de forma segura." },
        { id: "B", text: "B) A proteção de sistemas e dados contra ataques cibernéticos." },
        { id: "C", text: "C) O aumento das compras online." },
        { id: "D", text: "D) O desenvolvimento de novos dispositivos tecnológicos." },
      ],
      answer: "B"
    },
      {
        "question": "Qual das seguintes frases do texto é INCORRETA?",
        "options": [
          { "id": "A", "text": "A) A segurança cibernética é essencial para proteger sistemas, redes e programas contra ataques digitais." },
          { "id": "B", "text": "B) Hackers utilizam técnicas avançadas para invadir sistemas e roubar dados." },
          { "id": "C", "text": "C) No ano passado, muitas empresas foram atacadas por scams de phishing por telefone." },
          { "id": "D", "text": "D) As organizações têm investido em sistemas de segurança mais fortes e treinado seus funcionários." },
          { "id": "E", "text": "E) No futuro, sistemas inteligentes serão criados para detectar e prevenir ataques antes que eles aconteçam." }
        ],
        "answer": "C"
      },
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
      <div className='pt-3 text-lg text-green-400 font-semibold text-center mg-8px'>
      <h1>Uso do Verbo "Be" nos Tempos Verbais</h1>

<h2>1. Simple Present:</h2>
<p>O verbo "be" no <strong>Simple Present</strong> é utilizado para indicar estados permanentes ou habituais. Ele é conjugado como <strong>am</strong>, <strong>is</strong> e <strong>are</strong>.</p>
<ul>
    <li><strong>I am</strong> happy.</li>
    <li><strong>She is</strong> a student.</li>
    <li><strong>They are</strong> friends.</li>
</ul>
<br />
<h2>2. Present Continuous:</h2>
<p>No <strong>Present Continuous</strong>, o verbo "be" (<strong>am</strong>, <strong>is</strong>, <strong>are</strong>) é usado como verbo auxiliar, seguido pelo verbo principal no gerúndio (com <strong>-ing</strong>). Ele descreve ações que estão acontecendo no momento da fala.</p>
<ul>
    <li><strong>I am</strong> studying right now.</li>
    <li><strong>She is</strong> running at the moment.</li>
    <li><strong>They are</strong> playing soccer.</li>
</ul>
<br />
<h2>3. Imperatives:</h2>
<p>O verbo "be" pode ser usado em frases <strong>imperativas</strong> para dar ordens ou instruções. Nesse caso, ele aparece na forma base, sem conjugar. Normalmente, ele aparece em contextos de comandos diretos.</p>
<ul>
    <li><strong>Be</strong> quiet!</li>
    <li><strong>Be</strong> careful!</li>
    <li><strong>Be</strong> on time!</li>
</ul>
<br />
<h2>4. Simple Past:</h2>
<p>No <strong>Simple Past</strong>, o verbo "be" é conjugado como <strong>was</strong> (para <strong>I</strong>, <strong>he</strong>, <strong>she</strong>) ou <strong>were</strong> (para <strong>you</strong>, <strong>we</strong>, <strong>they</strong>). Ele é usado para indicar estados ou situações passadas.</p>
<ul>
    <li><strong>I was</strong> tired yesterday.</li>
    <li><strong>She was</strong> at the party.</li>
    <li><strong>They were</strong> happy after the game.</li>
</ul>
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
