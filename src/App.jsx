import Question from './componentes/Question';
import { Boxes } from 'lucide-react';


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
    }
  ]
  
  ;

  return(

    <div className="bg-black h-ful">

    <div className="flex bg-black text-center justify-center"> 
      <img className="h-24"  src="elli.png" alt="" />
      <h1 className="text-green-200 font-bold pt-7 text-2xl">CYBERSECURITY</h1>
    </div>

    <div className="border-t border-green-400 " />

      <div className='flex pt-2 justify-center'>
        <h2 className='text-green-200 font-bold text-LG '>CYBERSECURITY IN OUR DAILY LIVES</h2>
        <Boxes className='text-green-200 h-5 ' />
      </div>

      <div className='pt-3'>
        <p className='text-lg text-green-400 font-semibold text-center'>Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information. In today’s world, where people use the internet for banking, shopping, studying, and communicating, cybersecurity has become more important than ever.

Hackers have developed advanced techniques to break into systems and steal data. For example, last year many companies were attacked through email phishing scams. Because of this, organizations have been investing in stronger security systems and training their staff. At the same time, users need to be careful with passwords and suspicious links.

In the future, cybersecurity will be even more critical. As technology continues to evolve, so will the threats. Developers will create more intelligent systems to detect and prevent attacks before they happen. Everyone must do their part to stay safe online.</p>
      </div>



      <div className='pt-5 flex '>
        <img src="hack.png" alt="" className='h-24' />
        <h2 className='text-green-200 py-10 font-bold text-lg'>Poderia ter mais texto, mas como nosso colega marcelo gosta de coisas simples vamos direto para as questões sobre o texto</h2>
      </div>

      <div className="border-t border-green-400 " />

      <div className='pt-5'>
        <h3 className='text-green-200 font-bold text-2xl text-center'>Questões</h3>
      </div>



       
      <div className="min-h-screen bg-black flex flex-col items-center justify-start py-8 px-4 space-y-6">
      {questions.map((q, index) => (
        <Question key={index} question={q.question} options={q.options} />
      ))}

<button className='text-black font-bold bg-green-500 h-12 w-28 rounded-lg hover:bg-green-200 '>ENVIAR</button>  
    </div>

        
    




        <div className='pt-10 text-center'>
          <h4 className='text-green-200 font-bold text-3xl'>N-  QUESTÕES CERTAS🧠</h4>
          <p className='text-purple-700 text-4xl font-bold'>AQUI DIZ O NUMERO DE QUESTÕES CERTAS ||DA PRA MOSTRAR QUAL AS CERTAS NO FINAL OU NO SLIDE||VALIDAR AS RESPOSTAS ||REVISAR O TEXTO E AS PERGUNTAS, AS PERGUNTAS FORAM FULL O CHATgepeto ENTÃO NÃO FAÇO A MINIMA IDEIA SE ESTÃO CERTAS</p>
        </div>
        


        <div className="border-t border-green-400 " />


      <div className='flex pt-5 text-center justify-center'>
        <h5 className='text-green-200 text-2xl font-bold pt-1'>AQUI CONCLUIMOS NOSSO TRABALHO GOODBYE</h5>
        <img src="elli2.png" alt="" className='h-32' />
      </div>






    </div>



  )
}

export default App;
