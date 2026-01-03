import React from "react";
import Image from "next/image";

export default function Avatar() {
    return (
      <div className="flex flex-shrink-0 p-6 rounded-full bg-orange-600/15">
        <Image
          src={`/static/images/memoji-thumb-up-cropped.png`}
          alt="memoji"
          width={124}
          height={124}
          className="size-20 sm:size-28 select-none"
        />
      </div>
    );
}