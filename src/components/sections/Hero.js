import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
// import ButtonGroup from '../elements/ButtonGroup';
// import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className="hero-content">
            {/* TITLE */}
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Holidays with friends made <span className="text-color-primary">simple</span>.
            </h1>

            <div className="container-xs">
              <p className="m-0 reveal-from-bottom" data-reveal-delay="400">
                Reduce the pain of organising a group holiday. Quick and easy voting on the things that matter.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                {/* <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://">
                    Sign Up
                  </Button>
                  <Button tag="a" color="dark" wideMobile href="https://">
                    View on Github
                  </Button>
                </ButtonGroup> */}
              </div>
            </div>  
          </div>

          

          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            
            
            <a
              data-video="https://player.vimeo.com/463912246"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                // className="has-shadow"
                src={require('./../../assets/images/video-preview2.png')}
                alt="Hero"
                width={900}
                height={900} />
            </a>
            <div className="store-buttons">
              <Image
                  // className="has-shadow"
                  src={require('./../../assets/images/apple.png')}
                  alt="Hero"
                  width={207}
              />
              <Image
                  // className="has-shadow"
                  src={require('./../../assets/images/play_store.png')}
                  alt="Hero"
                  width={200}
              />
            </div>
            <div className="background-white"/>

          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/463912246"
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;