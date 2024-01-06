import React from 'react';
import ReactDOM from "react-dom";
import styles from '../styles/app.module.css'


export default function Backdrop({children, closeModal}) {
    return ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={closeModal}>
            {children}
        </div>,
        document.getElementById('portal')
      )
}