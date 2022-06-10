import './logo.css'
import Logos from '../img/Logo-risks.PNG'

export function Logo(){
    return (
        <figure className='header__container__group__logo'>
            <a href='/'>
                <img src={Logos} alt='logo'/>
            </a>
        </figure>
    );
}