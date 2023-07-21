import ThreadList from "@/components/ThreadList";

export default function Index() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div>
        <ThreadList categoryId={"categoryId"} />
      </div>
    </div>
  )
}
