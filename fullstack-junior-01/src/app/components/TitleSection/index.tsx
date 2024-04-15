import { Buttons } from "./Buttons";
import { Title } from "./Title";

export function TitleSection() {
    return (
        <div className="flex flex-col pl-[150px] pt-36 gap-10">
            <Title />
            <Buttons />
        </div>
    );
}