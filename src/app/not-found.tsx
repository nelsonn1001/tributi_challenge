import StartInHome from "./presentation/components/start_in_home";
import styles from '@/src/app/page.module.css';
function NotFound() {

    return (<div className={styles['tr-ch-div']}>
        <span className={styles['tr-ch-text-big']}>
            Pagina No Encontrada
        </span>
        <StartInHome/>
    </div>);


}

export default NotFound;