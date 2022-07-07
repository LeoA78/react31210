import './styles.css';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import logo from '../../assets/images/logo-white.png';

function Footer() {
    return (
        <>
            <footer>
                <section className="footer-container">

                    <article className="footer-about">
                        <img src={logo} alt="" />
                        <p>Esta es la Tienda Online de Andromeda. En nuestra tienda podras encontrar todo tipo de prendas y accesorios. </p>
                    </article>

                    <article className="footer-contact">
                        <div>
                            <div className='info'>
                                <CallIcon /><span>3547-5551112</span>
                            </div>
                            <div className='info'>
                                <LocationOnOutlinedIcon /><span>Gral Belgrano 777</span>
                            </div>
                            <div className='info'>
                                <MailOutlineIcon /> <span>contacto@andromeda.com</span>
                            </div>
                        </div>
                    </article>

                    <article className="footer-social">
                        <div className='footer-icon'>
                            <a rel="noreferrer" href='https://www.facebook.com' target='_blank'><FacebookIcon sx={{ fontSize: 40 }} /></a>
                        </div>
                        <div className='footer-icon'>
                        <a rel="noreferrer" href='https://www.instagram.com' target='_blank'><InstagramIcon sx={{ fontSize: 40 }} /></a> 
                        </div>
                        <div className='footer-icon'>
                        <a rel="noreferrer" href='https://www.youtube.com' target='_blank'><YouTubeIcon sx={{ fontSize: 40 }} /> </a> 
                        </div>
                    </article>

                </section>

                <section className='footer-me'>
                    <p> 2022 | Diseñado con 🤍 para Desafios Coder | Leonel Altamirano</p>
                </section>

            </footer>
        </>
    );

}

export default Footer;