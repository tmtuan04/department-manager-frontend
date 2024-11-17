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
                            <li className='item-menu active'><a href="#home">Home</a></li>
                            <li className='item-menu'><a href="#about-us">About</a></li>
                            <li className='item-menu'><a href="#our-team">Our Team</a></li>
                            <li className='item-menu'><a href="#contact-us">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header