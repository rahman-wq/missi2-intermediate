import React from "react";

const ArticleItem = ({ article }) => {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden">
      <img
        src={article.banner.url}
        alt={article.name}
        className="w-full h-[160px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{article.name}</h3>
        <p className="text-sm text-gray-500">by {article.author}</p>
      </div>
    </div>
  );
};

export default ArticleItem;
