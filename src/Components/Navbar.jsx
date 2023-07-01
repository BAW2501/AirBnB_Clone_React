import image from '../Assets/airbnb-logo.png'

export default function Navbar(){
    return(
        <nav>
            <img  className='nav--logo' src={image} alt='airbnb logo' />
        </nav>
    )
}