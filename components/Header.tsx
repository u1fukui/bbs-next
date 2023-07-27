import { Kaisei_Opti } from 'next/font/google';
import Link from 'next/link';

const HeaderText = Kaisei_Opti({
    weight: "400",
    preload: false,
});

export default function Header() {
    return (
        <div className="w-full h-20 flex items-center px-4">
            <Link href="/">
                <h1 className={`${HeaderText.className} text-3xl`}>れんしゅうけいじばん</h1>
            </Link>
        </div>
    )
}
