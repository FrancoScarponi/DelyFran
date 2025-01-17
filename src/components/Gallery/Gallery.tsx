import { Card } from "../Card/Card"
import css from "./gallery.module.css"
import { photos } from "../../services/photos"
export const Gallery = () => {
  return (
    <main className={css.gallery}>
      {photos.map((photo, index)=>{
        return <Card photo={photo} key={index}/>
      })}
    </main>
  )
}
