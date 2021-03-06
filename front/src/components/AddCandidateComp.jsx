import React from 'react';

const candidate = (props) => {
  return (
    <div>
      <div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Candidato creado y notificado con exito!</p>
              </div>
              <div className="modal-footer">
                {/* { */}
                 <button type="button" onClick={() => props.onClick()} className="btn btn-lg" style={{ backgroundColor: 'green' }} data-dismiss="modal" > Ok </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="form-group form-control-lg row formUser" style={{ marginTop: '50px', padding: '20px' }}>
        <div className='col-lg-3'></div>
        <div className='col-lg-6 addUser'>
          <form onSubmit={props.onSubmit} className='formUser' >
            <h1 className='titHomeForms'>Agregar nueva candidata</h1>
            <div className="form-group " >
              <input onChange={props.onChange} type="text" className="form-control inputLogin" id="nombre" placeholder="* Nombre" name='nombre' />
            </div>
            <div className="form-group">
              <input onChange={props.onChange} type="text" className="form-control inputLogin" id="apellido" placeholder="* Apellido" name='apellido' />
            </div>
            <div className="form-group">
              <input onChange={props.onChange} type="text" className="form-control inputLogin" id="edad" placeholder="* Edad" name='edad' />
            </div>
            <div className="form-group">
              <input onChange={props.onChange} type="text" className="form-control inputLogin" id="provincia" placeholder="* Provincia" name='provincia' />
            </div>
            <div className="form-group">
              <input onChange={props.onChange} type="tel" className="form-control inputLogin" id="email" placeholder="* E-mail" name='email' />
            </div>
            <div className="form-group">
              <input onChange={props.onChange} type="tel" className="form-control inputLogin" id="telefono" placeholder="* Teléfono" name='telefono' />
            </div>
            <div className="form-group">
              <input onChange={props.onChange} type="tel" className="form-control inputLogin" id="campo" placeholder="* Rubro de ciencia/tecnología" name='campo' />
            </div>
            <div className="form-group">
              <label htmlFor="workExperince">Extracto</label>
              <textarea onChange={props.onChange} className="form-control inputLogin" id="WorkExperience" rows="3" name="extracto"></textarea>
            </div>
            <div className="form-group">
              <input onChange={props.onChange} type="tel" className="form-control inputLogin" id="telefono_tercero" placeholder="* Teléfono aplicante" name='telefono_tercero' />
            </div>
            <div className="form-group">
              <input onChange={props.onChange} type="tel" className="form-control inputLogin" id="mail_tercero" placeholder="* E-mail aplicante" name='mail_tercero' />
            </div>
            <div className="form-group">
              <input onChange={props.onChange} type="tel" className="form-control inputLogin" id="motivo" placeholder="* Motivo" name='motivo_post' />
            </div>
            <div className="form-group">
              <input onChange={props.onChange} type="tel" className="form-control inputLogin" id="foto" placeholder="* Foto" name='foto' />
            </div>
            <div className="form-group">
              <input onChange={props.onChange} type="tel" className="form-control inputLogin" id="video" placeholder="* Video" name='video' />
            </div>
            <div className="form-group">
              <input onChange={props.onChange} type="tel" className="form-control inputLogin" id="audio" placeholder="* Audio" name='audio' />
            </div>
            <div>
              <button onSubmit={props.onSubmit} type="submit" className="btn boton btn-lg botonLogin btn-primary align-self-center" data-toggle="modal" data-target="#exampleModal">Add Applicant</button>
              {/* <button onClick={() => props.onClick()} className="btn boton btn-lg botonLogin btn-primary" >View All Candidates</button> */}
            </div>
          </form>

        </div>
        <div className='col-lg-3'></div>
      </div>
    </div>
  );
};

export default candidate;
