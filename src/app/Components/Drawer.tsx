'use client'

import Styles from './Drawer.module.css'
import { useRef } from 'react'

let links = ["home", "about", "stack", "contact"];

export default function Drawer({showDialog, onClose} : {showDialog: boolean, onClose: () => void}){
  const dialogRef = useRef();

  showDialog.current = () => {
    dialogRef.current.showModal();
  }

  function closeModal(){
    onClose();
    dialogRef.current.close();
  }

  function handleDialogClick() {
      closeModal();
  }

  return (
    <dialog ref={dialogRef} className={Styles.drawer} onClose={closeModal} onClick={handleDialogClick}>
      <ul>
        {links.map((link, index) => <li key={index}><a href={`#${link}`} onClick={closeModal}>{link}</a></li>)}
      </ul>
    </dialog>
  )
}