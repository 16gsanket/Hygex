import { HiOutlineLightBulb } from "react-icons/hi2";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaRedoAlt } from "react-icons/fa";
import { MdFullscreen } from "react-icons/md";

import PageHolderNavigation from "./PageHolderNavigation";
import BackArrow from "../ui/BackArrow";
import FrontArrow from "../ui/FrontArrow";
import FaqSections from "./FaqSections";

function PageContentHolder() {
  return (
    <div className=" bg-stone-100 h-fit w-full  py-3 px-5 my-5 ">
      <div>
        {/* Page title goes in this section */}
        <h1
          className="text-2xl font-semibold tracking-wide"
          style={{ color: "#06286E" }}
        >
          Relation and Function (Mathematics)
        </h1>
      </div>
      <div className="flex align-middle justify-start flex-col items-center">
        <PageHolderNavigation />
        <div className="h-[50dvh] w-7/12  rounded-3xl bg-gradient-to-tr from-blue-600 to-blue-900 px-5 py-4 my-3">
          <div className=" w-full flex align-middle justify-between items-center">
            <HiOutlineLightBulb className="text-xl text-stone-100" />
            <HiSpeakerWave className="text-xl text-stone-100" />
          </div>
          <div className="h-5/6 w-full grid place-content-center">
            <p className="text-stone-100 text-2xl font-semibold">
              {" "}
              9+ 6 7x - 2x - 3
            </p>
          </div>
        </div>
        <div className="h-[7dvh] w-7/12  flex align-middle justify-around items-center ">
          <FaRedoAlt className="text-2xl" />
          <div className=" w-4/12 flex align-middle justify-around items-center text-stone-950">
            <BackArrow />
                <p className="text-xl font-semibold">01/10</p>
            <FrontArrow />
          </div>
          <MdFullscreen className="text-3xl" />
        </div>
        <div className="h-[7dvh] w-full flex align-middle justify-between px-10 mt-10">
    <img src="/logo.png" alt="" height={'10px'}/>
        <div className="flex align-middle justify-center items-center">
            <span className="bg-gradient-to-tr from-blue-600 to-blue-900 rounded-full px-3 py-1 text-stone-100 text-2xl font-bold">+</span>
            <p className="text-lg font-semibold ml-3" style={{color:'#06286E'}}> Create Flashcard</p>
        </div>
        </div>
        <FaqSections />
      </div>
    </div>
  );
}

export default PageContentHolder;
