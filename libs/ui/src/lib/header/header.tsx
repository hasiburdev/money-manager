import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className="p-4 bg-purple-400">
      <h1>Welcome to Header!</h1>
    </div>
  );
}

export default Header;
