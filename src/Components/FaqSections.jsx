import { useState } from "react";
import Faqs from "./Faqs";
const FAQ = [
  {
    title: "Can education flashcards be used for all age groups>",
    description:
      " Yes,education flashcards can be tailored to different age groups and learning levels.There are flashcards designed for preschoolers,elementary school student,high school students,and even for college-level and audult learners.",
    id: 1,
  },
  {
    title: "How do education flashcards word?",
    description:
      "Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other.Users can review the cards repeatedly,reinforcing their memory and enhancing learning through repetition.",
    id: 2,
  },
  {
    title: "Can education flashcards be used for test preparation?",
    description:
      "Absolutely.Flashcards are an excellent tool for testpreparation,allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge brfore exams.",
    id: 3,
  },
];

function FaqSections() {
  const [selectedId, setSelectedId] = useState(null);

    const handleClick = (id)=>{
        if(id){
            setSelectedId(null)
            
        }
        setSelectedId(id)
    }

  return (
    <div className="h-fit w-full px-10 py-16">
      <h1 className="text-3xl font-bold text-blue-700 ">FAQ</h1>

      <div className="w-full h-[40dvh] my-10 ">

        {/* {
            FAQ.map(item=>
                <div className="  my-10 border-2  border-blue-500 rounded-xl py-3 px-4" onClick={()=>handleClick(item.id)}>
                    <p className="font-semibold text-lg">{item.title}</p>
                    {(selectedId === item.id ? <div>
                        <h1 className="mt-3">{item.description}</h1>
                    </div> : null)}
                </div>   
            )
        } */}

        {
            FAQ.map(item=><Faqs item={item}/>)
        }

      </div>
    </div>
  );
}

export default FaqSections;
