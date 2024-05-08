import { useState } from "react";

function Faqs({item}) {
  const [isOpen, setIsOpen] = useState(null);
  function handleClick(){
    setIsOpen(s=>!s)
  }
  return (
    <div
      className="  my-10 border-2  border-blue-700 hover:border-blue-800 rounded-xl py-4 px-5 hover:cursor-pointer"
      onClick={() => handleClick(item.id)}
    >
      <p className="font-bold text-lg hover:text-stone-700">{item.title}</p>
      {isOpen ? (
        <div className="transition-all ease duration-100">
          <h1 className="mt-3 font-semibold text-stone-700">{item.description}</h1>
        </div>
      ) : null}
    </div>
  );
}

export default Faqs;
