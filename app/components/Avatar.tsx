import React from "react";

interface AvatarProps {
  name: string;
  src?: string;
  size?: number;
}

export function Avatar({ name, src, size = 40 }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return src ? (
    <img
      src={src}
      alt={name}
      style={{ width: size, height: size }}
      className="rounded-full object-cover border border-gray-300 bg-white"
    />
  ) : (
    <span
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-bold border border-gray-300"
    >
      {initials}
    </span>
  );
} 