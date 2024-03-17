import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css"

export default function ImageGallary({items,imageClick}) {
    return (
        <ul className={css.list} >
            {items.map((item) => (<li key={item.id} onClick={() => {
                imageClick(item.urls.regular, item.alt_description)
            }}>
                <ImageCard item={item} />
            </li>))}
	
        </ul>

    );
}