import { Container, Tab, Tabs } from 'react-bootstrap'
import '../App.css'
import RatingComponent from '../components/rating_component'
import Constants from '../constants'

function Skills() {
  return (
    <Container>
      <div class="m-4">
        <h2 class="h3 text-center">What My Programming Skills Included?</h2>

        <p class="text-center">
          I develop simple, intuitive and responsive user interface that helps
          users get things done with less effort and time with those
          technologies.
        </p>
      </div>
      <div class="skills-box mt-5">
        <Tabs
          variant="pills"
          defaultActiveKey="skills"
          id="fill-tab-example"
          className="mb-3"
        >
          <Tab className="center" eventKey="skills" title="Skills">
            <ul class="skills-list">
              {Constants.skillsData.map((skill, i) => (
                <li key={i}>
                  <div class="skill-card">
                    <div class="tooltip">
                      <h6
                        style={{
                          color: 'var(--raw-seinna)',
                        }}
                      >
                        {skill.toolTip}
                      </h6>
                      <RatingComponent proficiency={skill.proficiency} />
                    </div>
                    <div class="card-icon">
                      <img alt="" src={skill.imgSrc} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Tab>
          <Tab eventKey="tools" title="Tools">
            <ul class="tools-list">
              {Constants.toolsData.map((tool, i) => (
                <li key={i}>
                  <div class="skill-card">
                    <div class="tooltip">
                      <h6
                        style={{
                          color: 'var(--raw-seinna)',
                        }}
                      >
                        {tool.toolTip}
                      </h6>
                      <RatingComponent proficiency={tool.proficiency} />
                    </div>

                    <div class="card-icon">
                      <img src={tool.imgSrc} alt="Ajax logo" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Tab>
        </Tabs>
      </div>
    </Container>
  )
}

export default Skills
