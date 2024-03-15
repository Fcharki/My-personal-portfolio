import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import quizapp from "../assets/img/quiz.jpg";
import phpCrud from "../assets/img/phpCrud.jpg";
import reactchat from "../assets/img/react-chat.jpg";
import todos from "../assets/img/todos.jpg";
import form from "../assets/img/form.jpg";
import business from "../assets/img/business.jpg";
import portfolio from "../assets/img/portfolio.jpg";
import hospital from "../assets/img/hospital.jpg";
import resto from "../assets/img/resto.PNG";
import '../app.css';

export const Projects = () => {

  const projects = [
    {
      title: "Quiz App",
      description: "React-based quiz App",
      imgUrl: quizapp,
      btnMsg: "View App",
      source: "https://fcharki.github.io/Quiz-App/"
    },
 
    {
      title: "Japanese food App",
      description: "Japanese online restaurant App built with React",
      imgUrl: resto,
      btnMsg: "Source code",
      source: "https://github.com/Fcharki/Japanese-online-restaurant"

    },
    {
      title: "Business landing page",
      description: "A landing page for business built with React",
      imgUrl: business,
      btnMsg: "View App",
      source: "https://fcharki.github.io/business-landing-page/"
    },
    {
      title: "Personal Portfolio",
      description: "Developer portfolio with HTML & CSS",
      imgUrl: portfolio,
      btnMsg: "View portfolio",
      source: "https://fcharki.github.io/a-portfolio-project/"

    },
    {
      title: "Hospital Management App",
      description: "Hospital management App built with Laravel Framework",
      imgUrl: hospital,
      btnMsg: "Source code",
      source: "https://github.com/Fcharki/Hospital-management-app"


    },
    {
      title: "TodoList App",
      description: "Todo list App built with React & Express",
      imgUrl: todos,
      btnMsg: "Source code",
      source: "https://github.com/Fcharki/Todo-list-app"
    },
    {
      title: "React Form",
      description: "React form that stores & retrieves data form local storage",
      imgUrl: form,
      btnMsg: "Source code",
      source: "https://github.com/Fcharki/React-form"

    },
    {
      title: "PHP CRUD project",
      description: "Medical appointment management App with PHP",
      imgUrl: phpCrud,
      btnMsg: "Source code",
      source: "https://github.com/Fcharki/PHP-project"
    },
    {
      title: "Realtime Chat App",
      description: "Realtime chat app with React & websocket API",
      imgUrl: reactchat,
      btnMsg: "View App",
      source: "https://fcharki.github.io/React-Chat-App/"

    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
                <h2 style={{ fontWeight: '500' }} className="underlined mt-4">Projects</h2>
                <p> Ready to explore my world of projects? </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className= "animate__animated animate__slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <>
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            </>)
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}