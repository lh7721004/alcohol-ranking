import { useSojuStore } from "../store/useSojuStore"
import { useBeerStore } from "../store/useBeerStore"
import { useQRStore } from "../store/useQRStore"
import { useNavigate } from "react-router-dom"
import axios from "axios";

export default function BottleInputPage(){
    const navigate = useNavigate();
    const sojuCount = useSojuStore((state) => state.sojuCount);
    const setSojuCount = useSojuStore((state) => state.setSojuCount);
    const beerCount = useBeerStore((state) => state.beerCount);
    const setBeerCount = useBeerStore((state) => state.setBeerCount);
    const setQRcode = useQRStore((state)=>state.setQRcode);
    const setQRTime = useQRStore((state)=>state.setQRTime);
    const createQR = ()=>{
        axios.post("http://localhost:5000/api/admin/qr/make",{soju:sojuCount,beer:beerCount}).then((response)=>{
            setQRcode(response.data.qrdata);
            setQRTime(new Date(Date.now()));
            navigate('/qr')
        }).catch((reason)=>{});
    }
    return (
    <div className="flex flex-col gap-5 p-5 w-full h-[100vh] justify-between">
        <div className="flex flex-col">
            <img src="/src/assets/prev.png" className="fixed left-0 top-0 w-16 cursor-pointer" onClick={()=>{navigate("/")}}/>
            <div className="flex flex-col gap-2 py-20">
                <div>소주</div>
                <div className="flex flex-row gap-3 w-full overflow-x-scroll">
                    {Array(100).fill(0).map((_,ind)=>{
                        return(<div className={`px-6 py-1 rounded-xl ${sojuCount==ind?"bg-[#FFC300]":"border border-black"} cursor-pointer`} onClick={()=>{setSojuCount(ind)}}>{ind}</div>)
                    })}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div>맥주</div>
                <div className="flex flex-row gap-3 w-full overflow-x-scroll">
                    {Array(100).fill(0).map((_,ind)=>{
                        return(<div className={`px-6 py-1 rounded-xl ${beerCount==ind?"bg-[#FFC300]":"border border-black"} cursor-pointer`} onClick={()=>{setBeerCount(ind)}}>{ind}</div>)
                    })}
                </div>
            </div>
        </div>
        <div className="w-full bg-[#F7CAA0] rounded-xl text-center py-1 font-semibold cursor-pointer" onClick={createQR}>QR 생성하기</div>
    </div>
    )
}