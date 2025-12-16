'use client'

import { useContext } from "react";
import { UserContext } from "../controllers/context_controller";
import styles from '@/src/app/page.module.css';

function EndDetail() {

    const { currentUser } = useContext(UserContext);
    return (
        <div className={styles['tr-ch-div']}>
            <span className={styles['tr-ch-text']}> Resumen información del usuario</span>
            <div className={styles['tr-ch-div-flex']}>
                <div className={styles['tr-ch-div-border']}>
                    <div className={styles['tr-ch-div-flex-item']}><span>Nombre</span></div>
                    <div className={styles['tr-ch-div-flex-item']}><span> Apellido</span> </div>
                    <div className={styles['tr-ch-div-flex-item']}><span>Tipo de Documento</span> </div>
                    <div className={styles['tr-ch-div-flex-item']}><span> Documento</span></div>
                    <div className={styles['tr-ch-div-flex-item']}><span> Email</span></div>
                    <div className={styles['tr-ch-div-flex-item']}><span>Teléfono</span> </div>
                    <div className={styles['tr-ch-div-flex-item']}><span>Dirección </span></div>
                    {currentUser.comment!=''?<div ><span> Comentario</span></div>:null} 
                </div>
                <div className={styles['tr-ch-div-border']}>
                    <div className={styles['tr-ch-div-flex-item-l']}><span>{currentUser.name}</span></div>
                    <div className={styles['tr-ch-div-flex-item-l']}><span> {currentUser.lastName}</span> </div>
                    <div className={styles['tr-ch-div-flex-item-l']}><span>{currentUser.documentType}</span> </div>
                    <div className={styles['tr-ch-div-flex-item-l']}><span> {currentUser.document}</span></div>
                    <div className={styles['tr-ch-div-flex-item-l']}><span> {currentUser.email}</span></div>
                    <div className={styles['tr-ch-div-flex-item-l']}><span>{currentUser.phoneNumber}</span> </div>
                    <div className={styles['tr-ch-div-flex-item-l']}><span>{currentUser.address} </span></div>
                    {currentUser.comment!=''?<div ><span> {currentUser.comment}</span></div>:null}
                </div>

            </div>
        </div>

    );
}

export default EndDetail;