import { useNavigate } from "react-router-dom"
import axios from "axios";
export default function Main(){
    const navigate = useNavigate();
    const logout = ()=>{
        console.log("Logout Logic 연결");
        navigate('/login');
    }
    return (
        <div className="h-[100vh] w-full">
            <img src="/src/assets/signout.png" className="absolute right-0 top-0" onClick={logout}/>
            <div className="flex flex-col h-full w-full justify-center px-3 gap-3">
                <div className="px-8 py-8 bg-[#F7CAA0] rounded-xl text-center hover:bg-[#FFC300]" onClick={()=>{navigate('/bottleinput')}}>입력하기</div>
                <div className="px-8 py-8 bg-[#F7CAA0] rounded-xl text-center hover:bg-[#FFC300]" onClick={()=>{navigate('/qr')}}>최근 QR 표시</div>
                <div className="px-8 py-8 bg-[#F7CAA0] rounded-xl text-center hover:bg-[#FFC300]" onClick={()=>{navigate('/')}}>이전 내역 조회</div>
            </div>
        </div>
    )
}