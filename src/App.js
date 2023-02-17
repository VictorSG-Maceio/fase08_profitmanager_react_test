// import logo from './logo.svg';
// import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lista:[
      {id:'15', name:'José', email:'jose@sg.com'},
      {id:'27', name:'Maria', email:'mariamariana@mail.com'},
      {id:'9', name:'Juca', email:'jose@admin.com'}
    ] }
  }
  render () {
    return (
      <div>	
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Controle Financeiro</a>
          <input className="form-control form-control-dark w-100" type="text" placeholder="Pesquisar" aria-label="Search"/>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href="#">Sair</a>
            </li>
          </ul>
        </nav>

        <div className="container-fluid">
          <div className="row">
          
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="dashboard.html">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                      Painel de Controle 
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="login.html">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="cad_user.html">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                      Cadastrar Usuário <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="cad_gains.html">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                      Receitas
                    </a>
                  </li>							
                  <li className="nav-item">
                    <a className="nav-link" href="cad_expenses.html">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-minus-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                      Despesas
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              
              <br />
              
              <div>						
                <h1 className="h2">Cadastro de Usuários</h1>						
                <form>
                  <div className="form-group">
                    <label for="formGroupExampleInput">Nome</label>
                    <input type="text" className="form-control" id="name" name="name" value=""  placeholder="Nome"/>
                  </div>
                  <div className="form-group">
                    <label for="formGroupExampleInput">E-mail</label>
                    <input type="email" className="form-control" id="email" name="email" value=""  placeholder="E-mail"/>
                  </div>
                  <div className="form-group">
                    <label for="formGroupExampleInput2">Senha</label>
                    <input type="password" className="form-control" id="password" name="password" value="" placeholder="Senha"/>
                  </div>
                  <div className="form-group">
                    <label for="formGroupExampleInput2">Confirmar Senha</label>
                    <input type="password" className="form-control" id="password_confirmation" name="password_confirmation" value="" placeholder="Confirme"/>
                  </div>
                  <button type="submit" className="btn btn-primary">Inscrever-se</button>
                </form>						
              </div>

              <br />
              
              <div className="table-responsive">
                <h2>Usuários</h2>
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>E-mail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.lista.map(function(user) {
                        return (
                          <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                          </tr>
                        );
                      })
                    }
                  </tbody>
                </table>
              </div>
              
            </main>
            
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
