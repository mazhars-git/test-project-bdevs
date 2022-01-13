import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../Css/MainMenu.css';
import Logo from '../../images/logo.png';

const MainMenu = () => {
    return (
        <section>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid menu-box">
                    <a class="navbar-brand" href="/home"><img className='img-fluid' src={Logo} alt="Logo" /></a>
                <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon custom-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse box" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 main-menu">
                        <li class="nav-item">
                            <a class="nav-link" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#event">Event</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#prayers">Prayers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#features">Causes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#news">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#sermons">Sermons</a>
                        </li>
                    </ul>

                    <button className='btn btn-brand'>DONATE NOW</button>
                   
                </div>
            </div>
        </nav>
    </section>
    );
};

export default MainMenu;