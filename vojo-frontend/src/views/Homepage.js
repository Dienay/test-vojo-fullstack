import React, { useEffect, useState }  from 'react';
import axios from 'axios'

import {
  Container,
  Header,
  Footer
} from '@mindlab-vojo/component-library';

import '../style/Home.sass'
import EditJob from '../components/EditJob';


import { baseUrl } from '../Constants/index'

function Homepage() {
  const [listJobs, setListJobs] = useState([])
  const [showEditComponet, setShowEditComponet] = useState(false)
  const [job, setJob] = useState({})

  useEffect(()=> {
    getListJobs()
  },[])

  const getListJobs = async () => {
    axios
        .get(`${baseUrl}/jobs`)
        .then(response => {
          setListJobs(response.data)
        })
        .catch(err => {
          console.log(err.message)
        })
  }

  const showJobEdit = () => {
    setShowEditComponet(!showEditComponet)
  }

  const getJob = (job) => {
    setJob(job)
    showJobEdit()
  }

  return (
    <Container maxWidth="full">
      {showEditComponet === true ?
        <EditJob job={job} closeJobEdit={showJobEdit}/>
      :
      <>
        <Container maxWidth="full">
          <Header/>
        </Container>
        <Container maxWidth="full">
          <div className="Home__Container">
            <div>
              <h1 className="Home__Title">Oportunidades disponíveis</h1>
              <p className="Home__Subtitle">Escolha uma opção abaixo para iniciar a sua experiência com o VOJO.</p>
            </div>
              <ul className="Home__ListJobs">
                {listJobs.map((item) => {
                  return (
                    <li key={item._id} className="Home__Job">
                      <div>
                          <h2 onClick={() => getJob(item)} className="Home__TitleJob">{item.title}</h2>
                          <p><strong>Empresa:</strong> {item.company}</p>
                          <p><strong>Remuneração:</strong> R$ {item.totalSpots}</p>
                          <p><strong>Requisitos:</strong> {item.requirements}</p>
                          <p><strong>Grau de escolaridade:</strong> {item.education}</p>
                          <p><strong>Informações:</strong> {item.information}</p>
                          <p><strong>Descrição:</strong> {item.description}</p> 
                          <p><strong>Local da vaga:</strong> {item.location[0].city} - {item.location[0].state} / {item.location[0].country}</p> 
                      </div>
                    </li>
                  )
                })}
              </ul>
          </div>
        </Container>
      </>
      }
      {showEditComponet === true ?
        <></>
      :
        <Container maxWidth="full">
          <div className="Home__Footer">
            <Footer/>
          </div>
        </Container>
      }
    </Container>
  );
}

export default Homepage;
