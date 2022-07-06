import React from 'react';
import logo from '../../icons/logo.png';
import socialMedia from '../../utils/socialMedia';

function Footer() {
  return (
    <footer>
      <div className="footer-logo-container">
        <img src={logo} alt="Project Logo" />
      </div>
      <p>Developed by Matheus Carvalho, 2022.</p>
      <div className="footer-social-media-container">
        {
          socialMedia.map(({ image, alt, link }) => (
            <a
              key={alt}
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <img src={image} alt={alt} />
            </a>
          ))
        }
      </div>
    </footer>
  );
}

export default Footer;
