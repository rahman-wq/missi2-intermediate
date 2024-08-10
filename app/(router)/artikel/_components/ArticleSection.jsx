import React, { useState } from "react";
import Link from "next/link";
import ArticleItem from "./ArticleItem";

const ArticleSection = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      name: "Sertifikasi Alibaba Cloud",
      author: "Alibaba Cloud",
      banner: { url: "/img/image8.jpg" },
      slug: "sertifikasi-alibaba-cloud",
    },
    {
      id: 2,
      name: "Kisah Kevin Systrom",
      author: "Kevin Systrom",
      banner: { url: "/img/image9.png" },
      slug: "kisah-kevin-systrom",
    },
    {
      id: 3,
      name: "Update Versi Android Studio",
      author: "Android Studio",
      banner: { url: "/img/image10.png" },
      slug: "update-versi-android-studio",
    },
    {
      id: 4,
      name: "Rahasia Menjadi Programer",
      author: "John Doe",
      banner: { url: "/img/image11.png" },
      slug: "rahasia-menjadi-programer",
    },
  ]);

  return (
    <div className="p-5 bg-white rounded-lg mt-3">
      {/* Judul */}
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-primary">Artikel Terkini</h2>
      </div>
      {/* Tampilkan Daftar Artikel */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {articles.length > 0
          ? articles.map((article) => (
              <Link href={"/artikel/" + article.slug} key={article.id}>
                <div>
                  <ArticleItem article={article} />
                </div>
              </Link>
            ))
          : [1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
};

export default ArticleSection;
