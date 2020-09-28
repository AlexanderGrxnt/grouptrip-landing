import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
//import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Steps = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {


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
          <div className="steps-content">
            {/* TITLE */}
            <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <span className="text-color-primary">Step 1.</span> Create a new trip
            </h2>
            <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <span className="text-color-primary">Step 2.</span> Choose destination options
            </h2>
            <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <span className="text-color-primary">Step 3.</span> Set available dates
            </h2>
            <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <span className="text-color-primary">Step 4.</span> Set budget limits
            </h2>
            <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <span className="text-color-primary">Step 5.</span> Add friends and let them vote 
            </h2>

            {/* <div className="container-xs">
              <p className="m-0 reveal-from-bottom" data-reveal-delay="400">
                Add a name and description 
              </p>
            </div>   */}
          </div>
        </div>
      </div>
    </section>
  );
}

Steps.propTypes = propTypes;
Steps.defaultProps = defaultProps;

export default Steps;