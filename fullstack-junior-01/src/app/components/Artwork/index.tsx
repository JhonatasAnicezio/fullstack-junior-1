export function Artwork() {
    return (
        <div className="flex flex-col gap-6 pl-[150px]">
            <h1 className="text-[32px]">Featured Artwork</h1>

            <div className="flex gap-8">
                <div className="flex items-center justify-center w-[403px] h-[236px] border border-black">
                    <img className="w-[392px] h-[224px]" src="/imageFeature01.webp" />
                </div>
                <div className="flex items-center justify-center w-[403px] h-[236px] border border-black">
                    <img className="w-[392px] h-[224px]" src="/imageFeature01.webp" />
                </div>
            </div>
        </div>
    )
}