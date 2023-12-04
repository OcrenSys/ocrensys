'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATE, TVariant } from '../lib/definitions';
import clsx from 'clsx';

type Props = {
  children?: React.ReactElement<HTMLElement>[] | React.JSX.Element[];
  animate?: ANIMATE;
  className?: string;
};

const FadeAnimation = ({ children = [], animate, className = '' }: Props) => {
  const setAnimation = (animate?: ANIMATE): { variants: any; variant: any } => {
    let variants: TVariant = {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        duration: 2,
        transition: {
          staggerChildren: 0.5,
        },
      },
    };

    let variant: TVariant = {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
      },
    };

    switch (animate) {
      case ANIMATE.LEFT_TO_RIGHT:
        variant = {
          ...variant,
          initial: {
            opacity: 0,
            x: -400,
          },
          animate: {
            delay: 0.2,
            opacity: 1,
            x: 0,
          },
        };
        return { variants, variant };

      case ANIMATE.RIGHT_TO_LEFT:
        variant = {
          ...variant,
          initial: {
            opacity: 0,
            x: 400,
          },
          animate: {
            opacity: 1,
            x: 0,
          },
        };
        return { variants, variant };

      case ANIMATE.UP_TO_DOWN:
        variant = {
          ...variant,
          initial: {
            ...variant.initial,
            ...{ y: -400 },
          },
          animate: {
            ...variant.animate,
            ...{ y: 0 },
          },
        };
        return { variants, variant };

      case ANIMATE.DOWN_TO_UP:
        variant = {
          ...variant,
          initial: {
            ...variant.initial,
            ...{ y: 400 },
          },
          animate: {
            ...variant.animate,
            ...{ y: 0 },
          },
        };
        return { variants, variant };

      case ANIMATE.IN:
        variants = {
          ...variants,
          animate: {
            ...variants.animate,
            ...{
              transition: {
                staggerChildren: 0.2,
              },
            },
          },
        };
        variant = {
          ...variant,
          initial: {
            ...variant.initial,
            ...{ opacity: 0, scale: 0.3 },
          },
          animate: {
            ...variant.animate,
            ...{ duration: 1, scale: 1 },
          },
          transition: {
            ...variant.transition,
            ...{
              duration: 0.5,
              delay: 0.1,
              ease: [0, 0.5, 0.2, 1.5],
            },
          },
        };
        return { variants, variant };

      default:
        return { variants, variant };
    }
  };

  const getChildren = (): Array<React.JSX.Element> => {
    if (children) {
      if (children instanceof Array) {
        return children as React.JSX.Element[];
      } else {
        return [children] as React.JSX.Element[];
      }
    }

    return [];
  };

  return (
    <motion.div
      className={clsx(className, 'w-full')}
      variants={setAnimation(animate).variants}
      initial="initial"
      whileInView="animate"
    >
      {children &&
        children.map(
          (child: React.ReactElement<HTMLElement>, index: number) => (
            <motion.div
              className="w-full"
              key={index}
              variants={setAnimation(animate).variant}
            >
              {child}
            </motion.div>
          ),
        )}
    </motion.div>
  );
};

export default FadeAnimation;
