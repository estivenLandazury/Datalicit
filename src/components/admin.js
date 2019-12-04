import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Router, BrowserRouter, Route } from 'react-router-dom';

import Results from './resultados'
import Home from './home'
import home from '../images/homeDatalicit.png'
import historys from '../images/history.png'




import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../customcss/admin.css'

class admin extends Component {

    constructor(props) {

        super(props);



        this.state = {


        }
    }






    render() {
        return (
            <div>


                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"> <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"><h1 className="titleNav">Datalicit </h1></a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <BrowserRouter>

                    <Route render={({ location, history }) => (
                        <React.Fragment>

                            <SideNav
                                onSelect={(selected) => {
                                    const to = '/' + selected;
                                    if (location.pathname !== to) {
                                        history.push(to);
                                    }
                                    // Add your code here
                                }}
                            >
                                <SideNav.Toggle > </SideNav.Toggle>
                                <SideNav.Nav >

                                    <NavItem eventKey="home">
                                        <NavIcon>
                                        </NavIcon>


                                        <NavText>
                                            <h1 className="title"> Datalicit</h1>
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="home">
                                        <NavIcon>
                                            <img src={home} className="home-logo" alt="home" />
                                        </NavIcon>
                                        <NavText>
                                            Pagina Principal
                            </NavText>
                                    </NavItem>
                                    <NavItem eventKey="result">
                                        <NavIcon>
                                            <img src={historys} className="home-logo" alt="" />
                                        </NavIcon>
                                        <NavText>
                                            Historial de Busqueda
                                        </NavText>

                                    </NavItem>
                                </SideNav.Nav>
                            </SideNav>

                            <main>
                                <Route path="/" exact component={props => <Home />} />
                                <Route path="/result" component={props => <Results />} />
                                <Route path="/home" component={props => <Home />} />

                            </main>

                        </React.Fragment>
                    )}
                    />
                </BrowserRouter>


            </div>
        );
    }
}

export default admin;
