"use client";
import React, { useEffect } from "react";


type Props = {
  message?: string;
  name?: string;
  profilePicture?: string | null;
};

export default function WhatsAppButton({
  message = "Bonjour, je souhaite sublimer l'expérience client de mon établissement",
  name = "Aurélie",
  profilePicture = "./aurelie.jpeg",
}: Props) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById("whatsapp-fab-styles")) return;
    const style = document.createElement("style");
    style.id = "whatsapp-fab-styles";
    style.textContent = `@keyframes fabFloat { 0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)} }`;
    document.head.appendChild(style);
  }, []);

  const encoded = encodeURIComponent(message);
  const href = `/api/wa?message=${encoded}`;

  const profileSrc =
    profilePicture && profilePicture !== "null"
      ? profilePicture
      : "/placeholder-user.jpg";

  return (
    <div
      role="link"
      aria-label={`Ouvrir WhatsApp pour ${name}`}
      onClick={() => window.open(href, "_blank")}
      className={`fixed bottom-6 right-6 z-[1100] bg-white/95 text-gray-900 rounded-full shadow-lg flex items-center gap-3 px-3 py-2 cursor-pointer select-none transition-transform duration-200 ease-in-out hover:scale-105`}
      style={{
        boxShadow: "0 0 15px #25D366",
        animation: "fabFloat 3s ease-in-out infinite",
      }}
    >
      <img
        src={profileSrc}
        alt={name}
        className="w-9 h-9 rounded-full object-cover border-2 border-white bg-white"
      />

      <div className="flex flex-col leading-tight">
        <span className="text-sm font-semibold">{name}</span>
        <span className="text-xs text-gray-600 max-w-[14rem] truncate">
          Excellence Squad
        </span>
      </div>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-7 h-7 ml-1"
      />
    </div>
  );
}
