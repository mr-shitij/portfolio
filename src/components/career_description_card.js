import React, { useState } from 'react'
import { Badge, Row } from 'react-bootstrap'
import { BiRightArrow } from 'react-icons/bi'
import { FaArrowLeft } from 'react-icons/fa'
import { scroller } from 'react-scroll'
import '../App.css'
import ProjectCard from './project_card'

function CareerDescriptionCard({ careerData }) {
  const [showProjectDetail, setShowProjectDetail] = useState(null)

  return (
    <div
      style={{
        animation: 'fadeIn 0.5s ease-out forwards',
      }}
    >
      {showProjectDetail != null ? (
        <div id="projectDetail">
          <span>
            <button
              style={{
                paddingRight: '10px',
                display: 'inline',
              }}
              onClick={() => {
                setShowProjectDetail(null)
              }}
            >
              <FaArrowLeft />
            </button>
            <h4
              style={{
                display: 'inline',
              }}
              className="section-title"
            >
              Project Detail
            </h4>
          </span>

          <ProjectCard projectData={showProjectDetail} />
        </div>
      ) : (
        <>
          <Row>
            <h2 className="h3 section-title">
              {careerData.jobProfile}{' '}
              <span
                onClick={() => {
                  if (careerData.url !== null && careerData.url !== '') {
                    window.open(careerData.url, '_blank')
                  }
                }}
                style={{
                  display: 'inline',
                  width: '100px',
                  height: '100px',
                  padding: '5px',
                  color: 'var(--raw-seinna)',
                }}
              >
                @ {careerData.companyName}
              </span>{' '}
            </h2>
          </Row>
          <small
            style={{
              color: 'grey',
            }}
          >
            {careerData.start} -{' '}
            <span
              style={{
                display: 'inline',
                width: '100px',
                height: '100px',
                padding: '5px',
              }}
            >
              {careerData.end}
            </span>
          </small>
          {careerData.description.map((desc, i) => (
            <p>
              {' '}
              <span
                style={{
                  display: 'inline',
                  marginRight: '10px',
                }}
              >
                <BiRightArrow color="var(--raw-seinna)" />
              </span>{' '}
              {desc}
            </p>
          ))}
        </>
      )}
      {careerData.projects.length === 0 ? null : (
        <div>
          <h2
            style={{
              color: 'var(--raw-seinna)',
            }}
            className="h3 section-title"
          >
            Projects Build
          </h2>
          <div className="skills-box">
            <ul class="skills-list ">
              {careerData.projects.map((project, i) => (
                <li key={i} style={{
                  cursor:'pointer'
                }}>
                  <Badge
                    onClick={() => {
                      setShowProjectDetail(project)
                      scroller.scrollTo('projectDetail', {
                        duration: 0,
                        delay: 0,
                        smooth: 'easeInOutQuart',
                      })
                    }}
                    bg={
                      showProjectDetail !== null &&
                      showProjectDetail.id === project.id
                        ? 'var(--raw-seinna)'
                        : 'white'
                    }
                    style=  { showProjectDetail !== null && showProjectDetail.id === project.id ? {
                      color: 'white',
                      backgroundColor: 'var(--raw-seinna)',


                    } : {
                      backgroundColor: 'var(--raw-seinna)',
                      color: 'black',
                    }}
                    className="center"
                  >
                    {project.title}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default CareerDescriptionCard
