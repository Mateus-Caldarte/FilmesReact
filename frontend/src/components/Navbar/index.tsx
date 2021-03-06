import {ReactComponent as GithubIcon } from 'assets/img/gitHub.svg'
import './styles.css';


function Navbar(){
        
     return (
         <>
        <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>Compass Movie React API</h1>
                
                <a href="https://github.com/Mateus-Caldarte/FilmesReact" target="_blank" rel="noreferrer">
                    <div className="dsmovie-contact-container">
                        <GithubIcon />
                        <p className="dsmovie-contact-link">/Mateus Caldarte</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    
    </>
    );
} 

export default Navbar;