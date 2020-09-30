import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

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
            {/* STEP 1 */}
            <div className="step-container">
              <Image
                  className="step-icon"
                  src={require('./../../assets/images/new-icon.png')}
                  alt="Hero"
                  width={80}
                  height={80}
              />
              <div>
                <h2 className="mt-0 mb-16 reveal-from-bottom step-title" data-reveal-delay="200">
                  <span className="text-color-primary">Step 1. </span>  Create a new trip
                </h2>
                <p className="step-text">Give it a name, description and cover photo if you like</p>
              </div>
            </div>
            {/* STEP 2 */}
            <div className="step-container">
              <Image
                  className="step-icon"
                  src={require('./../../assets/images/plane-icon.png')}
                  alt="Hero"
                  width={80}
                  height={80}
              />
              <div>
                <h2 className="mt-0 mb-16 reveal-from-bottom step-title" data-reveal-delay="200">
                  <span className="text-color-primary">Step 2. </span>  Choose Locations
                </h2>
                <p className="step-text">Select a number of destination options for friends to vote on</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="step-container">
              <Image
                  className="step-icon"
                  src={require('./../../assets/images/calendar-icon.png')}
                  alt="Hero"
                  width={80}
                  height={80}
              />
              <div>
                <h2 className="mt-0 mb-16 reveal-from-bottom step-title" data-reveal-delay="200">
                  <span className="text-color-primary">Step 3. </span>  Check Availability
                </h2>
                <p className="step-text">Choose all possible dates and let friends check their availability</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="step-container">
              <Image
                  className="step-icon"
                  src={require('./../../assets/images/budget-icon.png')}
                  alt="Hero"
                  width={80}
                  height={80}
              />
              <div>
                <h2 className="mt-0 mb-16 reveal-from-bottom step-title" data-reveal-delay="200">
                  <span className="text-color-primary">Step 4. </span>  Set Budget Limits
                </h2>
                <p className="step-text">Set budget limits fairly based on what everyone can afford</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="step-container">
              <Image
                  className="step-icon"
                  src={require('./../../assets/images/hotel-icon.png')}
                  alt="Hero"
                  width={80}
                  height={80}
              />
              <div>
                <h2 className="mt-0 mb-16 reveal-from-bottom step-title" data-reveal-delay="200">
                  <span className="text-color-primary">Step 5. </span>  Find Accomodation
                </h2>
                <p className="step-text">Shortlist and vote on accomodation options based on your group's needs</p>
              </div>
            </div>

            <p className="watch-text">See how it works</p>
            <Image
                  className="step-icon"
                  src={require('./../../assets/images/play-icon.png')}
                  alt="Hero"
                  width={60}
                  height={60}
            />

            <Image
                  className="phone-image"
                  src={require('./../../assets/images/3d-phone.png')}
                  alt="Hero"
                  width={300}
                  //height={60}
            />

          </div>
        </div>
      </div>
    </section>
  );
}

Steps.propTypes = propTypes;
Steps.defaultProps = defaultProps;

export default Steps;