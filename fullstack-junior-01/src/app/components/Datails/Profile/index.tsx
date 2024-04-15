import { Buttons } from "../Buttons";

export function Profile() {
    return (
        <div className="flex flex-col items-start justify-between p-8 bg-white w-[608px] h-[235px]">
            <div className="flex items-start justify-between w-full">
                <div className="flex gap-4 border">
                    <img src="/profileExample.webp" className="w-16 h-16 rounded-full" />
                    <div>
                        <h3 className="text-lg font text-[#8E8E8E]">@samanthaw</h3>
                        <h4 className="text-2xl font-semibold">Artwork #01</h4>
                    </div>
                </div>

                <div className="flex flex-col gap-1 border">
                    <h3 className="text-lg font text-[#8E8E8E]">Current Bid</h3>
                    <p className="text-2xl font-semibold">1.00 ETH</p>
                </div>
            </div>

            <div className="w-full border border-b-0 border-black" />

            <Buttons />
        </div>
    );
}