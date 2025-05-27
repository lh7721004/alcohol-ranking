import { useNavigate } from "react-router-dom"
import {QRCodeSVG} from 'qrcode.react';
import { useQRStore } from "../store/useQRStore"
import { useSojuStore } from "../store/useSojuStore"
import { useBeerStore } from "../store/useBeerStore"

export default function QRPage(){
    const navigate = useNavigate();
    const setQRcode = useQRStore((state)=>state.setQRcode);
    const QRcode = useQRStore((state)=>state.QRcode);
    const setQRTime = useQRStore((state)=>state.setQRTime);
    const QRTime = useQRStore((state)=>state.QRTime);

    const sojuCount = useSojuStore((state) => state.sojuCount);
    const setSojuCount = useSojuStore((state) => state.setSojuCount);
    const beerCount = useBeerStore((state) => state.beerCount);
    const setBeerCount = useBeerStore((state) => state.setBeerCount);
    return (
    <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col gap-5 pt-3">
            <div className="flex flex-col gap-3">
                <div className="border border-black py-2 rounded-xl"><span className="px-4">소주</span><input className="text-center border-none" type="number" value={sojuCount} onChange={(e)=>{setSojuCount(Number(e.target.value))}}></input></div>
                <div className="border border-black py-2 rounded-xl"><span className="px-4">맥주</span><input className="text-center border-none" type="number" value={beerCount} onChange={(e)=>{setBeerCount(Number(e.target.value))}}></input></div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row w-full justify-center">
                    <QRCodeSVG value={QRcode}/>
                </div>
                <div className="text-center">{QRTime.getFullYear()}.{QRTime.getMonth()}.{QRTime.getDate()}  {QRTime.getHours()}:{QRTime.getMinutes()}</div>
            </div>
            <div className="w-full py-1 text-center bg-[#F7CAA0] rounded-md hover:bg-[#FFC300] cursor-pointer" onClick={()=>{navigate("/")}}>이전으로</div>
        </div>
    </div>
    )
}