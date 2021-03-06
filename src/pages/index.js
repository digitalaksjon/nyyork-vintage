import React from 'react';


import { useStaticQuery, graphql } from 'gatsby';

import { SectionWrapper } from '../components/common/SectionWrapper';

/* Import custom components */

import Layout from '../components/layout';
import ImageCarousel from '../components/frontpage/Carousel';
import OpeningHours from '../components/common/OpeningHours';
import WhereIs from '../components/common/WhereIs';
import WhoWeAre from '../components/common/WhoWeAre';
import Ad from '../components/common/Ad';
import Feature from '../components/common/Feature';
import FeatureAlternate from '../components/common/FeatureAlternate';


import SEO from '../components/seo';

import '../components/styles/styles.scss';
import nyYorkColors from '../components/constants/colors';

const IndexPage = () => {
  const data = useStaticQuery(myQuery);
  const frontpage = data.frontpage.edges
  const generalinfo = data.generalinfo.edges


return (
    <Layout>
      <SEO title="Home" keywords={['ny york', 'vintage', 'jeans', 'shades']} data={frontpage} />
    
       <ImageCarousel id="carousel" /> 
   
       <SectionWrapper id="frontpage03">
        <Feature color={nyYorkColors.pink} bgColor={nyYorkColors.yellow} data={frontpage} />  
        <Ad type="wear" />
      </SectionWrapper>
      <SectionWrapper id="frontpage01">
        <WhereIs data={generalinfo} />        
      </SectionWrapper>
      <SectionWrapper id="frontpage02">
        <OpeningHours  color="pink" store="wear" data={generalinfo} />
        <WhoWeAre data={frontpage} />
      </SectionWrapper>

      <SectionWrapper id="frontpage05">
        <FeatureAlternate bgColor={nyYorkColors.gray} color={nyYorkColors.yellow} data={frontpage} />
        <Ad type="jeans" />
      </SectionWrapper>



    </Layout>
);
}

export default IndexPage;

export const myQuery = graphql`
query {
  frontpage: allWordpressAcfForside {
    edges {
        node {
          acf {

            featureartikkel_1 {
                post_title
                post_excerpt
                post_name
        
            }
            featurebilde1_liten {
                id
                localFile {
                    childImageSharp {
                        fluid(quality: 100, maxWidth:415) {
                          src
                        }
                    }
                }
            }
            featureartikkel_2 {
                post_title
                post_excerpt
                post_name
        
            }
            featurebilde2_liten {
                id
                localFile {
                    childImageSharp {
                        fluid(quality: 100, maxWidth:415) {
                          src
                        }
                    }
                }
            }
            hvem_er_vi_overskrift
            hvem_er_vi_tekst
            hvem_er_vi_bilde {
                id
                localFile {
                    childImageSharp {
                        fluid(quality: 100, maxWidth:415) {
                            src
                        }
                    }
                }
            }
          }
        }
    }
  }

  generalinfo: allWordpressAcfGeneralinfo {
    edges {
      node {
        acf {
          apningstider_jeans
          hvor_er_ny_york_overskrift
          hvor_er_ny_york_tekst
          apningstider_wear
        }
      }
    }
  }
}

`;