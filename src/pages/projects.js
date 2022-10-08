import { Container } from 'react-bootstrap'
import ProjectCard from '../components/project_card'
import Constants from '../constants'

function Projects() {
  return (
    <Container className='mb-3'>
      {
        Constants.projectsData.map((projectData,i)=>(
          <div id ={i}>
           <ProjectCard key={i} projectData={projectData}/>

          {i === Constants.projectsData.length-1 ? null : <div style={{
          backgroundColor: 'grey',
          opacity:0.1,
          height: '1px',
          width: '100%'
          }}></div>}
          </div>
            
        ))
      }
        

    </Container>
  )
}

export default Projects