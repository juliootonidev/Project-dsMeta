import logo from '../../assets/img/logo.svg'
import './styless.css'

function Header() {
    return (
        <header>
            <div class="dsmeta-logo-container">
                <img src={logo} alt="DsMeta"/>
                    <h1>DsMeta</h1>
                    <p>Desenvolvido por
                        <a href="https://www.linkedin.com/in/julio-gabriel-002774148/"> @JulioGabriel</a>
                    </p>
            </div>
        </header>
    )
}

export default Header
