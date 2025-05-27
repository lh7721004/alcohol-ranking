import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
export default function LoginPage(){
    const navigate = useNavigate();
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [isRemember, setIsRemember] = useState(false);
    const apiUrl = import.meta.env.VITE_API_URL;
    const login = async () => {
        try {
            const response = await axios.post(`${apiUrl}/api/admin/login`, {
                pw:password,
            },{withCredentials:true});
            
      
            navigate('/');
          } catch (error) {
            console.error('로그인 실패:', error.response?.data || error.message);
          }
        
    }
    return (
        <div className="flex flex-col h-[100vh] w-full justify-center">
            <div className="flex flex-row justify-center">
                <div className="flex flex-col gap-2">
                    <div className={"text-4xl font-bold pb-12 select-none"}>관리자 페이지</div>
                    <div className="relative">
                        <input placeholder="학번" className="pr-14 border border-1 border-[#9E9E9E] rounded-md py-2 px-2" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
                        <img className="absolute right-3 top-1/2 -translate-y-1/2 select-none" src="/src/assets/account.png"/>
                    </div>
                    <input placeholder="비밀번호" type="password" className="pr-14 border border-1 border-[#9E9E9E] rounded-md py-2 px-2" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <div className="flex flex-row gap-1 pb-4">
                        <input type={"checkbox"} id={"checkbox"} checked={isRemember} onChange={(e)=>{setIsRemember(e.target.checked)}}/>
                        <label htmlFor="checkbox" className="cursor-pointer select-none">내 정보 기억하기</label>
                    </div>
                    <button className="bg-[#FFA940] text-[#FFFFFF] font-bold py-1 rounded-md select-none" onClick={login}>LOGIN</button>
                </div>
            </div>
        </div>
    )
}