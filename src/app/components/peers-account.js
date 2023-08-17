import React from "react";
import Image from "next/image";
import styles from "../styles/peers.module.scss";

const PeerTtl = ({titles}) => {
    const separateTitle = titles.map( ele => ele.split(','));
    return separateTitle.map( (item,index) => <p  className="font12 colorTertiary fontBold" key={index}>{item}</p>)
}

const PeersAccount = ({data, titleData}) => {
    if (!data) {
        return null;
    }
    return (
        <section className={styles.peerDetails}> 
            <div className={styles.peerDetailsCont}>
                <div className={styles.peerDetailsLt}>
                    <h3 className="colorSecondary">Key peers</h3>
                    <PeerTtl titles={titleData} />
                </div>
                <div className={styles.peerDetailsRt}>
                    {
                        data.map((ele)=> (
                            <div className={styles.peerDetailsblk}>
                                <div className={styles.peerDetailsblkHd}><Image src={ele.logo} alt="" width={100} height={35}></Image></div>
                                <p className="font14 colorTertiary">{ele.empl_count}</p>
                                <p className="font14 colorTertiary">{ele.empl_cover}</p>
                                <p className="font14 colorTertiary">{ele.revenue}</p>
                            </div> 
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default PeersAccount;