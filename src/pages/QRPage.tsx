import { useNavigate } from "react-router-dom"
export default function QRPage(){
    const navigate = useNavigate();
    return (
    <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col gap-5 pt-3">
            <div className="flex flex-col gap-3">
                <div className="border border-black py-2 rounded-xl"><span className="px-4">소주</span><input className="text-center border-none" type="number"></input></div>
                <div className="border border-black py-2 rounded-xl"><span className="px-4">맥주</span><input className="text-center border-none" type="number"></input></div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="w-64 h-64 bg-black"></div>
                <div className="text-center">2025.5.28  21:25</div>
            </div>
            <div className="w-full py-1 text-center bg-[#F7CAA0] rounded-md hover:bg-[#FFC300] cursor-pointer" onClick={()=>{navigate("/")}}>이전으로</div>
        </div>
    </div>
    )
}