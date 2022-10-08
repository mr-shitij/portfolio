import CareerDescriptionCard from '../components/career_description_card';
import { Tabs, TabNav, TabNavItem, TabContent, TabPanel } from 'react-smarttab'
import '../carrer.css'
import Constants from '../constants'
function Career() {
  return (
    <>
    
    <div className='m-3 d-none d-md-block d-lg-block d-xl-block'>
      <Tabs
        selected ={0}
        orientation= 'vertical'
        enableURLhash = {false}
        justified = {true}

      >
        <TabNav>
        {Constants.careersData.map((careerData,i)=>(
           <TabNavItem key={i}>{careerData.shortCompanyName}</TabNavItem>

        ))}
        </TabNav>
 
        <TabContent>
          {Constants.careersData.map((careerData,i)=>(
             <TabPanel key={i}>
             <CareerDescriptionCard careerData={careerData}/>
           </TabPanel>  
          ))}
        </TabContent>
      </Tabs>
    </div>

    <div className='m-3 d-block d-sm-block d-md-none d-xl-none'>
      <Tabs
        selected ={0}
        orientation= 'horizontal'
        enableURLhash = {false}
        justified = {true}
      >
        <TabNav>
        {Constants.careersData.map((careerData,i)=>(
           <TabNavItem key={i}>{careerData.shortCompanyName}</TabNavItem>

        ))}
        </TabNav>
 
        <TabContent>
          {Constants.careersData.map((careerData,i)=>(
             <TabPanel key={i}>
             <CareerDescriptionCard careerData={careerData}/>
           </TabPanel>  
          ))}
        </TabContent>
      </Tabs>
    </div>
    </>
    

    
  );
}

export default Career;