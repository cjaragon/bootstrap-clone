
const MenuBar = (props) => {
    return (
        <div className={`menu-bar ${props.show ? 'open' : null}`}  >
            <p className='link' > SERVICES </p>
            <p className='link' > PORTFOLIO </p>
            <p className='link' > ABOUT </p>
            <p className='link' > TEAM </p>
            <p className='link' > CONTACT </p>
        </div>
    )
}

export default MenuBar