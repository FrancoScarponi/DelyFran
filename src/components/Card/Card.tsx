import css from "./card.module.css"
import { PhotoType } from "../types/types"
interface Props{
  photo: PhotoType
}

export const Card: React.FC<Props> = ({photo}) => {
  return (
    <div className={css.card}>
      <div className={css.overlay}>
        <span className={css.description}>{photo.texto}</span>
        <div className={css.date}>{photo.fecha}</div>
      </div>
      <img src={photo.imagen} alt="" />
    </div>
  )
}
