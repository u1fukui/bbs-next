import { Thread } from "@/model/Thread";
import { use } from "react";
import ThreadListItem from "./ThreadListItem";

type DummyData = {
    userId: number
    id: number
    title: string
    body: string
}

async function fetchThreads(categoryId: string): Promise<DummyData[]> {
    return await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" })
        .then((res) => res.json())
        .then(
            //ウエイト追加
            (r) => new Promise((resolve) => setTimeout(() => resolve(r), 3000))
        );
}

export default function ThreadList({ categoryId }: { categoryId: string }) {
    const threads = use(fetchThreads(categoryId))
        .map((data: DummyData) => {
            return {
                threadId: data.id,
                categoryId: categoryId,
                title: data.title,
                commentCount: 0,
                lastUpdatedAt: "2023-07-01 12:00"
            }
        });

    return (
        <ul>
            {threads?.map((thread: Thread) => {
                return (
                    <li key={thread.threadId} className="border-b"><ThreadListItem thread={thread} /></li>
                );
            })}
        </ul>
    )
}
