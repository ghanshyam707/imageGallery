import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function ImageComponent({ index, width, height }) {
  const myLoader = () => {
    return `https://api.slingacademy.com/public/sample-photos/${
      index + 1
    }.jpeg`;
  };
  return (
    <>
      <>
        <Image
          loader={myLoader}
          src={`https://api.slingacademy.com/public/sample-photos/${
            index + 1
          }.jpeg`}
          width={width}
          height={height}
          alt={"Image"}
        />
      </>
    </>
  );
}
