import styles from './style.module.scss';
import Link from 'next/link';

export default function index() {
  return (
    <div className={styles.footer}>
                           
              <Link href="https://www.linkedin.com/in/hansana-eranga-22500123a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bsw5N%2FYdSSrCziazqaSunEA%3D%3D" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p>Linkedin</p>
              </Link>
            
            <Link href="https://github.com/Eranga725" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p>Github</p>
              </Link>
            <Link href="https://www.behance.net/hansanaeranga" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p>Behance</p>
              </Link>
    </div>
  )
}