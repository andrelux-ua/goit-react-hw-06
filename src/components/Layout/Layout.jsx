import css from './Layout.module.css';
import img from '../../assets/images/s15.png';

function Layout({ children }) {
  return (
    <main className={css.app}>
      <img
        src={img}
        alt="telephone"
        style={{
          height: '712px',
          width: '710px',
          position: ' absolute;',
          top: '11.6vh',
          left: '43.4%',
          transform: 'translateX(-50%)',
          zIndex: '-1',
          objectFit: 'cover',
          filter: 'blur(100px)',
          opacity: '0.3',
        }}
      />
      <div className={css.contentWrapper}>{children}</div>
    </main>
  );
}

export default Layout;
