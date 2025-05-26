export default function Main(){
    return (
    <div className="flex flex-row h-full justify-center">
        <div className="flex flex-col gap-1">
            <div className={"text-4xl font-bold"}>관리자 페이지</div>
            <div className="relative">
                <input placeholder="학번" className="pr-14"/>
                <img className="absolute right-1 top-1/2 -translate-y-1/2" src="/src/assets/account.png"/>
            </div>
            <input placeholder="비밀번호"/>
            <div>
                <input type={"checkbox"} id={"checkbox"}/>
                <label htmlFor="checkbox" className="cursor-pointer">내 정보 기억하기</label>
            </div>
            <button className="bg-[#FFA940]">LOGIN</button>
        </div>
    </div>
    )
}