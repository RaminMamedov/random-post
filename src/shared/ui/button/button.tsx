import { ComponentPropsWithoutRef, ElementType, forwardRef } from 'react';
import classNames from 'classnames';

import styles from './button.module.scss';
import Loader from '@shared/ui/loader/loader.tsx';

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T;
  fullWidth?: boolean;
  variant?: 'link' | 'outline' | 'primary' | 'secondary';
  isLoading?: boolean;
} & ComponentPropsWithoutRef<T>;

const Button = forwardRef<HTMLElement, ButtonProps<ElementType>>(
  (
    {
      as: Component = 'button',
      children,
      className,
      fullWidth,
      variant = 'primary',
      isLoading = false,
      disabled,
      ...rest
    },
    ref,
  ) => {
    const isButton = Component === 'button';

    return (
      <Component
        className={classNames(
          styles.button,
          styles[variant],
          {
            [styles.fullWidth]: fullWidth,
            [styles.asLink]: Component === 'a',
            [styles.disabled]: isButton && (disabled || isLoading),
            [styles.loading]: isLoading,
          },
          className,
        )}
        ref={ref}
        disabled={isButton ? disabled || isLoading : undefined}
        {...rest}
      >
        {!isLoading && <span className={styles.valueBox}>{children}</span>}
        {isLoading && <Loader size="small" />}
      </Component>
    );
  },
);

export default Button;

Button.displayName = 'Button';
