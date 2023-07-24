type Category = {
    id: string
    text: string
}

const categories = [
    { id: "hot", text: "注目" },
    { id: "chat", text: "雑談" },
    { id: "social", text: "世の中" },
    { id: "life", text: "生活" },
    { id: "game", text: "アニメ・ゲーム" },
    { id: "entertainment", text: "エンタメ" },
    { id: "it", text: "テクノロジー" }
]

export default function ThreadCategoryTab({ currentCategoryId }: { currentCategoryId: string }) {
    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
                {categories.map((category: Category) => {
                    return (
                        <li key={category.id} className="mr-2">
                            <a href="#" className={`inline-block p-4 border-b-2 rounded-t-lg
                             ${category.id === currentCategoryId ? "text-blue-600 border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                                    : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}>
                                {category.text}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
