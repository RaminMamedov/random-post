import styles from './input.module.scss';
import { ChangeEvent, ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = ({
  placeholder,
  value,
  onChange,
  className,
  ...rest
}: InputProps) => {
  return (
    <input
      className={classNames(styles.input, className)}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
