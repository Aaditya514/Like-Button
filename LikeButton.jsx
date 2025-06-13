import { useState } from "react";

function LikeButton() {
    const [likes, setLikes] = useState(0);
    return (
        <div className="items-center justify-center flex flex-col shadow-lg rounded-xl p-6  border border-gray-200  w-84">
            <h1 className="text-3xl  m-10 text-white text-center flex flex-row font-bold p-10">Like Button</h1>
            <div className="p-6 bg-white shadow-lg rounded-lg flex flex-row items-center justify-center ">
                <button
                    onClick={() => setLikes(likes + 1)}
                    className="flex items-center space-x-2 px-4 py-2 bg-red-100 rounded-lg hover:bg-red-200 active:scale-95 transition-transform">
                    <span className={`text-2xl transition-colors duration-300 `}>
                        ❤️
                    </span>
                    <span className={`font-semibold ${likes > 0 ? 'text-red-600' : 'text-black'}`}>{likes} Click Me</span>
                </button>

                <button
                    onClick={() => setLikes(0)}
                    className="ml-5 px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-colors duration-200"
                >
                    Reset
                </button>
            </div>
        </div>
    )
}
export default LikeButton;
