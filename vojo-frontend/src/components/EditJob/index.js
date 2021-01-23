import React, { useState } from 'react';
import '../../style/Edit.sass'
import { Container, Header, Button } from '@mindlab-vojo/component-library';
import axios from 'axios'
import useForm from '../../Hooks/useForm'
import useProtectedRoute from '../../Hooks/useProtectedRoute';
import { baseUrl } from '../../Constants/index'

function EditJob(props) {
    useProtectedRoute()
    const [showEdit, setShowEdit] = useState(false)

    const { form, onChange } = useForm({
      title: props.job.title,
      company: props.job.company,
      totalSpots: props.job.totalSpots,
      requirements: props.job.requirements,
      education: props.job.education,
      information: props.job.information,
      description: props.job.description,
      city: props.job.location[0].city,
      state: props.job.location[0].state,
      country: props.job.location[0].country
        })
       
    const handleInputChange = event => {
        const { name, value } = event.target
        
        onChange(name, value)
    }

    const editJob = (event) => {
        event.preventDefault()
        const body = {
          title: props.job.title,
          company: props.job.company,
          totalSpots: props.job.totalSpots,
          requirements: props.job.requirements,
          education: props.job.education,
          information: props.job.information,
          description: props.job.description,
          city: props.job.location[0].city,
          state: props.job.location[0].state,
          country: props.job.location[0].country
        }

        axios
        .put(`${baseUrl}/jobs/${props.job._id}`, body)
        .then(response => {
          console.log(response.data)
          alert("Editado com sucesso")
          showJobEdit()
        })
        .catch(err => {
          console.log(err.message)
        })
    }

    const showJobEdit = () => {
      setShowEdit(!showEdit)
    }
  
  return (
  <Container maxWidth="full">
    <Container maxWidth="full">
      <Header/>
    </Container>
    <Container maxWidth="full">
      <div className="Edit__Container">
        {showEdit === false ?
          <div className="Edit__Job">
              <div className="Edit__TopCard">
                  <h2 className="Edit__TitleJob">{props.job.title}</h2>
                  <span className="Edit__Close" onClick={props.closeJobEdit}>X</span>
              </div>
              <p>Empresa: {props.job.company}</p>
              <p>Remuneração: R$ {props.job.totalSpots}</p>
              <p>Requisitos: {props.job.requirements}</p>
              <p>Grau de escolaridade: {props.job.education}</p>
              <p>Informações: {props.job.information}</p>
              <p>Descrição: {props.job.description}</p> 
              <p>Local da vaga: {props.job.location[0].city} - {props.job.location[0].state} / {props.job.location[0].country}</p> 
              <Button
                  id="submit-login"
                  name="submit-login"
                  onButtonClick={showJobEdit}
                  type="submit">
                      Editar
              </Button>
          </div>
        :
          <div className="Edit__Job">
            <div className="Edit__TopCard">
                  <h2 className="Edit__TitleJob">Editar Job</h2>
                  <span className="Edit__Close" onClick={showJobEdit}>X</span>
              </div>
            <form onSubmit={editJob} className="Edit__Form">
              <div>
                  <label>Titulo*</label>
                  <input
                    name="title"
                    onChange={handleInputChange}
                    required
                    type="text"
                    value={form.title}
                  />
              </div>
              <div>
                  <label>Empresa*</label>
                  <input
                    name="company"
                    onChange={handleInputChange}
                    required
                    type="text"
                    value={form.company}
                  />
              </div>
              <div>
                  <label>Remuneração*</label>
                  <input
                    name="totalSpots"
                    onChange={handleInputChange}
                    required
                    type="number"
                    value={form.totalSpots}
                  />
              </div>
              <div>
                  <label>Requisitos*</label>
                  <textarea
                    name="requirements"
                    rows="5"
                    onChange={handleInputChange}
                    required
                    type="text"
                    value={form.requirements}
                  />
              </div>
              <div>
                  <label>Grau de escolaridade</label>
                  <input
                    name="education"
                    onChange={handleInputChange}
                    type="text"
                    value={form.education}
                  />
              </div>
              <div>
                  <label>Informações*</label>
                  <input
                    name="information"
                    onChange={handleInputChange}
                    required
                    type="text"
                    value={form.information}/>
              </div>
              <div>
                  <label>Descrição*</label>
                  <textarea
                    name="description"
                    rows="5"
                    onChange={handleInputChange}
                    required
                    type="text"
                    value={form.description}/>
              </div>
              <div>
                  <label>Cidade*</label>
                  <input
                    name="city"
                    onChange={handleInputChange}
                    required
                    type="text"
                    value={form.city}
                  />
              </div>
              <div>
                  <label>Estado*</label>
                  <input
                    name="state"
                    onChange={handleInputChange}
                    required
                    type="text"
                    value={form.state}/>
              </div>
              <div>
                  <label>País*</label>
                  <input
                    name="country"
                    onChange={handleInputChange}
                    required
                    type="text"
                    value={form.country}/>
              </div>
              <Button
                  id="submit-login"
                  name="submit-login"
                  type="submit">
                      Salvar
              </Button>
            </form>
          </div>
        }
      </div>
    </Container>
  </Container>
)
}

export default EditJob;