import React from "react";
import Image from "next/image";
import styles from "../styles/peers.module.scss";

const PeersAccount = ({data}) => {
    if (!data) {
        return null;
    }
    return (
        <section className={styles.peerDetails}> 
            <div className={styles.peerDetailsCont}>
                <div className={styles.peerDetailsLt}>
                    <h3>Key peers</h3>
                    <p># of employees</p>
                    <p>Employees coverage</p>
                    <p>Revenue (2022, B$)</p>
                </div>
                <div className={styles.peerDetailsRt}>
                    {
                        data.map((ele)=> (
                            <div className={styles.peerDetailsblk}>
                                <div><Image src={ele.logo} alt="" width={100} height={35}></Image></div>
                                <p>{ele.empl_count}</p>
                                <p>{ele.empl_cover}</p>
                                <p>{ele.revenue}</p>
                            </div> 
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default PeersAccount;