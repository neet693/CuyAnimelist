"use client";
import React, { useState } from "react";

const BtnCollection = ({
  anime_mal_id,
  user_email,
  anime_title,
  anime_image,
}) => {
  const [isCreated, setIsCreated] = useState(false);

  const handlerCollection = async (event) => {
    event.preventDefault();
    const data = { anime_mal_id, user_email, anime_title, anime_image };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const collection = await response.json();
    if (collection.status == 200) {
      setIsCreated(collection.isCreated);
    }
    return;
  };

  return (
    <>
      {isCreated ? (
        <p className="text-warna-primary">Berhasil Menambahkan Anime</p>
      ) : (
        <button
          onClick={handlerCollection}
          className="px-2 py-1 bg-warna-accent"
        >
          Add To Collection
        </button>
      )}
    </>
  );
};
export default BtnCollection;
