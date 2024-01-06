import React, { useEffect, useState } from "react";
import Backdrop from "./Backdrop";
import styles from "../styles/app.module.css";
import ImageComponent from "./image";
import useKeyPress from './hooks/useKeyPress'

function Modal({ closeModal, selectedIndex }) {
  const [index, setIndex] = useState(selectedIndex);
  const [navIndex, setNavIndex] = useState(selectedIndex);
  const leftPress = useKeyPress("ArrowLeft");
  const rightPress = useKeyPress("ArrowRight");
  const handleLeftKeyPress = () => {
    setNavIndex((pre) => {
      if (pre - 1 < 0) {
        return 0;
      } else {
        return pre - 1;
      }
    });
  }

  const handleRightKeyPress = () => {
    setNavIndex((pre) => {
      if (pre + 1 >= 15) {
        return 15;
      } else {
        return pre + 1;
      }
    });
  }
  useEffect(() => {
  leftPress && handleLeftKeyPress()
  }, [leftPress]);

  useEffect(() => {
   rightPress && handleRightKeyPress()
  }, [rightPress]);

  const Navigation = (i) => {
    return (
      <span
        onClick={() => {
          setIndex(i);
        }}>
        <ImageComponent
          index={i}
          width={100}
          height={100 * (9 / 16)}
        />
      </span>
    );
  };
  return (
    <Backdrop closeModal={closeModal}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}>
        <div>
          <ImageComponent
            index={index}
            width={500}
            height={500 * (9 / 16)}
          />
        </div>
        <div className={styles.gridLine}>
          <div
            className={styles.navButton}
            onClick={handleLeftKeyPress}>
            {"<"}
          </div>
          {[
            Navigation(navIndex + 1),
            Navigation(navIndex + 2),
            Navigation(navIndex + 3),
            Navigation(navIndex + 4),
          ]}
          <div
            className={styles.navButton}
            onClick={handleRightKeyPress}>
            {">"}
          </div>
        </div>
        <button
          style={{ color: "white", background: "black", outline: "none" }}
          onClick={closeModal}>
          Close
        </button>
      </div>
    </Backdrop>
  );
}

export default Modal;
