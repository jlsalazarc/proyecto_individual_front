import './search.css'

export function Search(){
    return (
        <form>
            <span className="header__container__group__access__search__icon">
                <div>
                    <input type="search" name="txtBuscar" placeholder="Buscar" />
                </div>
                <button><i className="fas fa-search"></i></button>
            </span>
        </form>
    )
}