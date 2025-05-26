import { useNavigate } from "react-router-dom"
import axios from "axios";
export default function Login(){
    const navigate = useNavigate();
    const login = () => {
        navigate('/');
    }
    return (
        <div className="flex flex-col h-[100vh] w-full justify-center">
            <div className="flex flex-row justify-center">
                <div className="flex flex-col gap-2">
                    <div className={"text-4xl font-bold pb-12 select-none"}>관리자 페이지</div>
                    <div className="relative">
                        <input placeholder="학번" className="pr-14 border border-1 border-[#9E9E9E] rounded-md py-2 px-2"/>
                        <img className="absolute right-3 top-1/2 -translate-y-1/2 select-none" src="/src/assets/account.png"/>
                    </div>
                    <input placeholder="비밀번호" type="password" className="pr-14 border border-1 border-[#9E9E9E] rounded-md py-2 px-2"/>
                    <div className="flex flex-row gap-1 pb-4">
                        <input type={"checkbox"} id={"checkbox"}/>
                        <label htmlFor="checkbox" className="cursor-pointer select-none">내 정보 기억하기</label>
                    </div>
                    <button className="bg-[#FFA940] text-[#FFFFFF] font-bold py-1 rounded-md select-none" onClick={login}>LOGIN</button>
                </div>
            </div>
        </div>
    )
}