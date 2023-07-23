import Header from "@/components/Header";
import ThreadList from "@/components/ThreadList";
import { Suspense } from "react";

export default function Index() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Header />
      <div>
        <Suspense fallback={<div>取得中...</div>}>
          <ThreadList categoryId={"categoryId"} />
        </Suspense>
      </div>
    </div >
  )
}
