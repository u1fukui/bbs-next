import { Thread } from "@/model/Thread";
import ThreadListItem from "./ThreadListItem";

export default function ThreadList({ categoryId }: { categoryId: string }) {
    const threads: Thread[] = []
    for (let i = 0; i < 20; i++) {
        threads[i] = {
            threadId: i,
            categoryId: categoryId,
            title: "タイトル" + i,
            commentCount: i,
            lastUpdatedAt: "2023/07/01 12:00"
        }
    }
    return (
        <ul>
            {threads.map((thread: Thread) => {
                return (
                    <li key={thread.threadId} className="border-b"><ThreadListItem thread={thread} /></li>
                );
            })}
        </ul>
    )
}
