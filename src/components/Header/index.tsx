import Link from 'next/link';
import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link href="/">
          <a>
            <img src="./../images/logo.svg" alt="logo" />
          </a>
        </Link>
        <nav>
          <h1>
            spacetraveling<span>.</span>
          </h1>
        </nav>
      </div>
    </header>
  );
}