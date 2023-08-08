import React from "react";
import styles from '../styles/overview.module.scss'
import Image from "next/image";

const CompanyOverview = ({products}) => {
    if (!products) {
        return null;
    }
    return (
        <section className={styles.compOverviewCont}> 
            <h2 className={`${styles.overviewTtl} colorSecondary`}>Company overview</h2>
            <div className={styles.compDetailCont}>
                <div className={styles.compDetailLt}>
                    <Image src="/gohnson-pink-logo.png" alt="" width={180} height={50}></Image>
                    <p>Official Website</p>
                </div>
                <div className={styles.compDetailRt}>
                    {
                        products.map((product)=> (
                            <div className={styles.compDetailblk}>
                                <h2 className="colorSecondary">{product.detail_hd}</h2>
                                <p>{product.detail_desc}</p>
                            </div> 
                        ))
                    }
                   
                </div>
            </div>
        </section>
    )
}

export default CompanyOverview;