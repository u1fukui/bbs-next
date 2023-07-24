import Header from "@/components/Header";
import ThreadCategoryTab from "@/components/ThreadCategoryTab";
import ThreadList from "@/components/ThreadList";
import { Suspense } from "react";

export default function Index() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Header />
      <ThreadCategoryTab currentCategoryId="hot" />
      <div>
        <Suspense fallback={<div>取得中...</div>}>
          <ThreadList categoryId={"categoryId"} />
        </Suspense>
      </div>
    </div >
  )
}
