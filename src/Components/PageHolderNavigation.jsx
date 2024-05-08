function PageHolderNavigation() {
    return (
        <div className="h-[8dvh] w-full  grid place-content-center my-3">
            <ul className=" w-[50dvw] flex align-middle gap-1 justify-around ">
                <li style={{color:"#06286E"}} className="font-semibold underline underline-offset-8">Study</li>
                <li>Quiz</li>
                <li>Test</li>
                <li>Game</li>
                <li>Others</li>
            </ul>
        </div>
    )
}

export default PageHolderNavigation
