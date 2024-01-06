import Head from "next/head";
import styles from "../styles/Home.module.css";
import data from "./utils/data.json";
import ImageComponent from "./image";
import { useState } from "react";
import Modal from "./modal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [imageData, setImageData] = useState(data);
  const [active, setActive] = useState(0);

  const handleModal = (i) => {
    setSelectedIndex(i);
    setModalOpen(!modalOpen);
  };
  const handleSelection = (value) => {
    setActive(value);
    switch (value) {
      case 0:
        setImageData(data);
        break;
      case 1:
        setImageData(data.filter((item) => item.type === "branding"));
        break;
      case 2:
        setImageData(data.filter((item) => item.type === "design"));
        break;
      case 3:
        setImageData(data.filter((item) => item.type === "development"));
        break;
    }
  };
  return (
    <>
      <h2>Gallery</h2>
      <a>{"Pages > Gallery".toLocaleUpperCase()}</a>
      <h3 className={styles["text-center"]}>Photo Gallery</h3>
      <p className={styles["text-center"]}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
      <div className={styles.line}>
        <button
          className={`${styles.selectionButton} ${
            active === 0 && styles.active
          }`}
          onClick={() => {
            handleSelection(0);
          }}>
          All
        </button>
        <button
          className={`${styles.selectionButton} ${
            active === 1 && styles.active
          }`}
          onClick={() => {
            handleSelection(1);
          }}>
          Branding
        </button>
        <button
          className={`${styles.selectionButton} ${
            active === 2 && styles.active
          }`}
          onClick={() => {
            handleSelection(2);
          }}>
          Design
        </button>
        <button
          className={`${styles.selectionButton} ${
            active === 3 && styles.active
          }`}
          onClick={() => {
            handleSelection(3);
          }}>
          Development
        </button>
      </div>
      <div className={styles["custom-cards"]}>
        {imageData.map((item, i) => {
          return (
            <div
              key={item.key}
              onClick={() => {
                handleModal(item.key);
              }}
              className={styles["custom-card"]}>
              <ImageComponent
                index={item.key}
                width={250}
                height={250 * (9 / 16)}
              />
            </div>
          );
        })}
      </div>
      <div id="portal"></div>
      {modalOpen && (
        <Modal
          closeModal={() => setModalOpen(false)}
          selectedIndex={selectedIndex}></Modal>
      )}
    </>
  );
}
