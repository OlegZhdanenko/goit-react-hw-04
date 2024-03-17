import css from "../LoadMoreBtn/LoadMoreBtn.module.css"
export default function LoadMoreBtn({ onClick }) {
    return (
        <button className={css.btn} onClick={onClick} type="button">Load More</button>
    )
}