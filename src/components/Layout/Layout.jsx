import css from './Layout.module.css';

function Layout({ children }) {
  return (
    <main className={css.app}>
      <div className={css.contentWrapper}>{children}</div>
    </main>
  );
}

export default Layout;
