import React, {Component} from 'react'
import MenuBar from './menuBar.js'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            showMenu: false
        }
    }

    handleMenu = () => {
        if (this.state.showMenu !== true) {
            this.setState({ showMenu: true })
        }else {
            this.setState({ showMenu: false })
        }
    }

    render () {
        console.log(this.state)
        return (
            <div className='header' >
                <h1 className='logo' > Start Bootstrap </h1>
                <button className='menu button' 
                onClick={() => this.handleMenu()} > MENU 
                <a href="https://icon-library.net/icon/hamburger-icon-white-6.html" title="Hamburger Icon White #130401"><img src="https://icon-library.net//images/hamburger-icon-white/hamburger-icon-white-6.jpg" width="15" /></a>
                 </button>
                <MenuBar show={this.state.showMenu} />
            </div>
        )
    }
}

export default Header

