import Header from "@/components/Header";
import ThreadList from "@/components/ThreadList";

export default function Index() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Header />
      <div>
        <ThreadList categoryId={"categoryId"} />
      </div>
    </div>
  )
}
