import Image from 'next/image'
import styles from './page.module.scss'
import CompanyOverview from './components/company-overview';
import PeersAccount from './components/peers-account';
import StaticData from './api/dashboard.json';

const Page = () => {
  return (
    <div className='container'>
      {
        StaticData.map((data) => {
          return (
            <>
              <section className={styles.OverviewPeerCont}>
                <CompanyOverview products={data.common.org_detail}/>
                <PeersAccount data={data.org_peers.peers_detail} />
              </section>
              
            </>
          )
        })
      }
        
      
    </div>
  );
};

export default Page;
