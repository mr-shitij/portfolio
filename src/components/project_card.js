import React from 'react'
import {Row,Col, Badge} from 'react-bootstrap'
import ReadMoreTextComponent from './read_more_text_component'
import {FaGithub, FaLink} from 'react-icons/fa'

function ProjectCard({projectData}) {
  return (
    <div className='m-3'>
       <Row className='center' >
        <Col md={11} sm={10} xs={9} >
          <h2 style={{
            color: 'var(--raw-seinna)'
          }} class="h3 ">{projectData.title}</h2>
        </Col>
        <Col className=' center'>
          {projectData.githubLink===undefined || projectData.githubLink===null || projectData.githubLink===''?null:
              <a href={projectData.githubLink}><FaGithub color='black' size={20}/></a>
          }
          {projectData.deployLink===undefined || projectData.deployLink===null || projectData.deployLink===''?null:
              <a href={projectData.deployLink}><FaLink color='black' size={20} style={{marginLeft:'10px'}}/></a>
          }
        </Col>

       </Row>
       <Row className='m-2'>
        <ReadMoreTextComponent text={projectData.description}/>

       </Row>
       <div className='skills-box'>
       <ul class="skills-list ">
                {projectData.techStack.map((stack,i) => (
                  <li key={i}>
                     <Badge bg='white' style={{
                  backgroundColor: 'white',
                  color:'black'
                }} className='center'>{stack}</Badge>
                  </li>
                ))} 
        </ul>
       </div>
       
    </div>
  )
}

export default ProjectCard