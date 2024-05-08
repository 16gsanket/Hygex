import { HiOutlineHome } from "react-icons/hi2";

function NavigationTrack() {
    return (
        <div className="h-[7dvh] w-full  flex align-middle justify-start items-center px-5 gap-3 text-stone-500">
            <HiOutlineHome />
            <span> > </span>
            <p>Flashcard</p>
            <span> > </span>
            <p>Mathematics</p>
            <span> > </span>
            <p style={{color:'#06286E'}}>Relation and Function</p>
            <p></p>

        </div>
    )
}

export default NavigationTrack
