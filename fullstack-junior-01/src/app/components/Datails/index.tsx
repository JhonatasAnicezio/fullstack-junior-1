import { Profile } from "./Profile";
import { Status } from "./Status";

const statusList = [
    {
        value: 50,
        name: "Artwork"
    },
    {
        value: 30,
        name: "Artist"
    },
    {
        value: 20,
        name: "Auction"
    }
]

export function Datails() {
    return (
        <div className="flex flex-col items-center justify-center pt-[152px] pr-20">
            <div className="flex items-end justify-center border border-b-0 w-[564px] h-[540px] rounded-tr-[310.5px] rounded-tl-[310.5px]">
                <img src="/imageArtwork.webp" className="w-[544px] h-[528px] rounded-tr-[310.5px] rounded-tl-[310.5px]" />
            </div>
            <div className="flex">
                <Profile />
            </div>
            <div className="flex pt-10 gap-[72px]">
                {statusList.map((status, index) => <Status key={index} name={status.name} status={status.value} />)}
            </div>
        </div>
    );
}