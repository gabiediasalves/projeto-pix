import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <section className={styles.navbar_container}>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">Siscobra<span className='navbar-brand2'>-Hub</span></a>
                    <a className="nav-link active"><Link to='/'>Home</Link></a>
                    <a className="nav-link active"><Link to='/pix'>Pix</Link></a>
                    <a className="nav-link active"><Link to='/teste'>Teste</Link></a>
                </div>
            </nav>
        </section>
    )
}

export default Navbar