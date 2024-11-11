import './Header.css'

const Header = () => {
    return (
        <>
            <div className="home-page__header">
                <div className="inner-header">
                    <div className="header__logo">
                        .HustCity
                    </div>
                    <div className="header__menu">
                        <ul className='inner-menu'>
                            <li className='active'><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header