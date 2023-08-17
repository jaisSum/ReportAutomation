import styles from '../styles/feature.module.scss'

const FeatureBlk = ({lists}) => {
    const separateList = lists.map( ele => ele.split(','));
    return (
        <ul>
            {
                separateList.map( (item,index) => <li key={index} dangerouslySetInnerHTML={{ __html: item }} />)
            }           
        </ul>
    )
}

const Feature = ({listData, listRecData}) => {
    return (
        <section className={styles.featureContainer}>
            <div className={styles.featureLt}>
                <h4><span>Strengths</span></h4>
                <FeatureBlk lists={listData} />
            </div>  
            <div className={styles.featureRt}>
                <h4><span>Improvements and Recommendations</span></h4>
                <FeatureBlk lists={listRecData} />
            </div>
        </section>
    )
}

export default Feature;