import { Thread } from "@/model/Thread"

export default function ThreadListItem({
    thread
}: {
    thread: Thread
}) {
    return (
        <div className="w-full h-24 flex flex-col p-4">
            <h3 className="flex-grow">{thread.title}</h3>
            <div className="flex flex-row">
                <div className="flex-grow">
                    <span>コメント数: {thread.commentCount}</span>
                </div>
                <span>{thread.lastUpdatedAt}</span>
            </div>
        </div>
    )
}
