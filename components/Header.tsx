import { Kaisei_Opti } from 'next/font/google';

const HeaderText = Kaisei_Opti({
    weight: "400",
    preload: false,
});

export default function Header() {
    return (
        <div className="w-full h-20 flex items-center">
            <h1 className={`${HeaderText.className} text-3xl`}>れんしゅうけいじばん</h1>
        </div>
    )
}
