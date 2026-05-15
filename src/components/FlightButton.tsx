"use client";

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './flight-button.module.css';

interface FlightButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export function FlightButton({ className, onClick, ...props }: FlightButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isActive || props.disabled) return;
    setIsActive(true);
    
    const button = buttonRef.current;
    if (!button) return;

    // Call external onClick if provided (e.g. form submit)
    if (onClick) {
        onClick(e);
    }

    // GSAP Animation
    let getVar = (variable: string) => getComputedStyle(button).getPropertyValue(variable);

    // Make plane visible instantly for animation
    gsap.set(button, {
        '--plane-opacity': 1
    });

    gsap.to(button, {
        keyframes: [{
          '--left-wing-first-x': 50,
          '--left-wing-first-y': 100,
          '--right-wing-second-x': 50,
          '--right-wing-second-y': 100,
          duration: .2,
          onComplete() {
            gsap.set(button, {
              '--left-wing-first-y': 0,
              '--left-wing-second-x': 40,
              '--left-wing-second-y': 100,
              '--left-wing-third-x': 0,
              '--left-wing-third-y': 100,
              '--left-body-third-x': 40,
              '--right-wing-first-x': 50,
              '--right-wing-first-y': 0,
              '--right-wing-second-x': 60,
              '--right-wing-second-y': 100,
              '--right-wing-third-x': 100,
              '--right-wing-third-y': 100,
              '--right-body-third-x': 60
            })
          }
        }, {
          '--left-wing-third-x': 20,
          '--left-wing-third-y': 90,
          '--left-wing-second-y': 90,
          '--left-body-third-y': 90,
          '--right-wing-third-x': 80,
          '--right-wing-third-y': 90,
          '--right-body-third-y': 90,
          '--right-wing-second-y': 90,
          duration: .2
        }, {
          '--rotate': 50,
          '--left-wing-third-y': 95,
          '--left-wing-third-x': 27,
          '--right-body-third-x': 45,
          '--right-wing-second-x': 45,
          '--right-wing-third-x': 60,
          '--right-wing-third-y': 83,
          duration: .25
        }, {
          '--rotate': 60,
          '--plane-x': -8,
          '--plane-y': 40,
          duration: .2
        }, {
          '--rotate': 40,
          '--plane-x': 45,
          '--plane-y': -300,
          '--plane-opacity': 0,
          duration: .375,
          onComplete() {
            setTimeout(() => {
              button.removeAttribute('style');
              gsap.fromTo(button, {
                opacity: 0,
                y: -8
              }, {
                opacity: 1,
                y: 0,
                clearProps: true,
                duration: .3,
                onComplete() {
                  setIsActive(false);
                }
              })
            }, 1800)
          }
        }]
      })

      
      // Removed JS color animation to rely strictly on CSS Single Source of Truth
      gsap.to(button, {
        keyframes: [{
          '--text-opacity': 0,
          '--border-radius': 0,
          duration: .11
        }, {
          duration: .14
        }, {
          duration: .25,
          delay: .1
        }, {
          '--trails-stroke': 171,
          duration: .22,
          delay: .22
        }, {
          '--success-opacity': 1,
          '--success-x': 0,
          duration: .2,
          delay: .15
        }, {
          '--success-stroke': 0,
          duration: .15
        }]
      })
  };

  return (
    <button 
        ref={buttonRef} 
        className={`${styles.button} ${className || ''}`} 
        onClick={handleClick}
        {...props}
    >
      <span className={styles.defaultText}>Send Message</span>
      <span className={styles.successText}>
        <svg viewBox="0 0 24 24">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>Sent
      </span>
      <svg className={styles.trails} viewBox="0 0 33 64">
        <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
        <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
      </svg>
      <div className={styles.plane}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
    </button>
  );
}
