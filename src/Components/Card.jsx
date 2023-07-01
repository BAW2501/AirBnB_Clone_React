import card_photo from '../Assets/katie-zaferes.png'
import star_photo from '../Assets/star.png'
export default function Card(){
    return (
        <div className="card">
        <img className='card--img' src={card_photo}></img>
        <div className='card--stats'>
            <img className='card--star' src={star_photo} />
            <span>5.0</span>
            <span className='grey'>(6) •</span>
            <span className='grey'>USA</span>
        </div>
        <p>Life Lessons with Katie Zeferes</p>
        <p> <span className='bold'>From $136</span> / Person</p>
        </div>
    )
}