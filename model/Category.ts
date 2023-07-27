export type Category = {
    id: string
    text: string
};

export const categories = [
    { id: "hot", text: "注目" },
    { id: "chat", text: "雑談" },
    { id: "social", text: "世の中" },
    { id: "life", text: "生活" },
    { id: "game", text: "アニメ・ゲーム" },
    { id: "entertainment", text: "エンタメ" },
    { id: "it", text: "テクノロジー" }
] as const;

export const defaultCategory = categories[0];
