import './index.css';
import save from './save.svg';

function Card() {
    return (
        <div className='card'>
            <div className="card__sticky card__sticky_type_top-left">
                <span className='card__discount'>-14%</span>
            </div>
            <div className='card__sticky card__sticky_type_top-right'>
                <button className='card__favorite'>
                    <img src={save} alt="Добавить в избранное" className='card__favorite-icon'/>
                </button>
            </div>
            <a href="#" className='card__link'>
                <img src='https://react-learning.ru/image-compressed/1.jpg' className='card__image' alt='#' />
                <div className="card__desc">
                    <span className="card__old-price">350</span>
                    <span className="card__price card__price_type_discount">300</span>
                    <span className="card__wight">1шт</span>
                    <p className="card__name"></p>
                </div>
            </a>
            <a href="#" className="card__cart btn btn_type_primary">В корзину</a>
        </div>
    )
}

export default Card;