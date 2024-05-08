function Navbar() {
    return (
        <div className="h-[10dvh] w-full  flex align-middle justify-between items-center px-4">
            <div className="h-4/6 w-3/12 ">
                <img src="/logo.png" alt="" />
            </div>
            <ul className="flex w-5/12 align-middle justify-between items-center text-stone-600 text-lg">
                <li>Home</li>
                <li>Flashcard</li>
                <li>Contact</li>
                <li>FAQ</li>
                <li className="bg-gradient-to-tr from-blue-600 to-blue-900 px-4 text-stone-200 py-1 rounded-full">Login</li>


            </ul>
            
        </div>
    )
}

export default Navbar
