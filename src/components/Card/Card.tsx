import css from "./card.module.css"
import { PhotoType } from "../../types/types"
import { useState } from "react"

interface Props{
  photo: PhotoType
}

export const Card: React.FC<Props> = ({photo}) => {
  
  const [modal,setModal] = useState(false);

  return (
    <div className={css.card}>
      <div className={css.overlay} tabIndex={0}>
        <img src="/icons/view.svg" alt="" className={css.icon}/>
        <span className={css.description}>"{photo.texto}"</span>
        <div className={css.date}>{photo.fecha}</div>
      </div>
      <img src={photo.imagen} alt="" />
      
    </div>
  )
}
