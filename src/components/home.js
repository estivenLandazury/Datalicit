import React, { Component } from 'react';
import styles from '../customcss/home.css'
import AWS from 'aws-sdk';

import { portafolio, ref_proceso, url_descarga, entidad, presupuesto, duracion, descripcion } from '../utilities/entites.json';
import PDFViewer from 'pdf-viewer-reactjs'
import { Container, Header, Grid, Form } from 'semantic-ui-react';
import { Document, Page } from 'react-pdf';
import { $ } from 'jquery'
class Home extends Component {



    constructor(props) {

        super(props);



        this.state = {



            item: "",

            portafolio,
            ref_proceso,
            url_descarga,
            entidad,
            presupuesto,
            duracion,
            descripcion

        }



        this.handleClick = this.handleClick.bind(this);



    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }


    filterTable(e) {

        var input, filter, table, tr, td, i, txValue
        input = document.getElementById("filterSearch")
        filter = e.target.value.toUpperCase();
        table = document.getElementById("table")
        tr = table.getElementsByTagName("tr")


        if (this.state.item === "-1") {
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];


                if (td) {
                    txValue = td.textContent || td.innerText;
                    if (txValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none"
                    }
                }



            }

        } else

            if (this.state.item === "") {

                for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td")[0];


                    if (td) {
                        txValue = td.textContent || td.innerText;
                        if (txValue.toUpperCase().indexOf(filter) > -1) {
                            tr[i].style.display = "";
                        } else {
                            tr[i].style.display = "none"
                        }
                    }



                }
            } else if (this.state.item === "0") {

                for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td")[3];


                    if (td) {
                        txValue = td.textContent || td.innerText;
                        if (txValue.toUpperCase().indexOf(filter) > -1) {
                            tr[i].style.display = "";
                        } else {
                            tr[i].style.display = "none"
                        }
                    }

                }

            } else if (this.state.item === "1") {

                for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td")[2];


                    if (td) {
                        txValue = td.textContent || td.innerText;
                        if (txValue.toUpperCase().indexOf(filter) > -1) {
                            tr[i].style.display = "";
                        } else {
                            tr[i].style.display = "none"
                        }
                    }

                }


            }

    }

    selectItem(e) {
        this.setState({
            item: e.target.value
        })
        console.log("hettttttttttt " + e.target.value)
    }

    componentDidMount() {

    }










    dibujarTabla() {
        const list = this.state.portafolio
        const list2 = this.state.descripcion
        const list3 = this.state.entidad
        const list4 = this.state.ref_proceso
        const list5 = this.state.presupuesto
        const list6 = this.state.duracion
        const list7 = this.state.url_descarga






        return <div>
            <h1 className="result"> Resultados</h1>
            <h1 className="numbre"> {list.length} resultados encontrados</h1>



            <div className="row" id="row-filter">

                <div className="col-sm">

                    <div className="form-group row">
                        <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"><h1 className="filter"> Filtrar por</h1></label>
                        <div className="col-sm-10">
                            <select id="mi select" className="form-control form-control-sm" onChange={e => this.selectItem(e)}>
                                <option value="-1"> Portafolio</option>
                                <option value="0"> Referencia de Proceso</option>
                                <option value="1"> Entidad </option>
                            </select>
                        </div>
                    </div>                    </div>
                <div className="col-sm">
                    <form className="form-inline">

                        <div className="form-group mx-sm-3 mb-2">
                            <label for="inputPassword2" className="sr-only">Filtrado</label>
                            <input type="text" className="form-control" id="filterSearch" onChange={e => this.filterTable(e)} placeholder="Ingresa la palabra" />
                        </div>
                    </form>
                </div>

            </div>




            <br></br>








            <div id="table_scroll">
                <table className="table table-hover" id="table" >
                    <thead >
                        <tr>
                            <th scope="col"><h1 className="td1"> #</h1></th>
                            <th scope="col"><h1 className="td1"> Portafolio</h1></th>
                            <th scope="col"><h1 className="td1">Descripcion </h1></th>
                            <th scope="col"><h1 className="td1">Entidad </h1></th>
                            <th scope="col"><h1 className="td1"> Ref. Proceso</h1></th>
                            <th scope="col"><h1 className="td1"> Presupuesto</h1></th>
                            <th scope="col"><h1 className="td1"> Duración</h1></th>
                            <th scope="col"><h1 className="td1"> Url descarga</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((cand, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row"> <h1 className="td"> {index}</h1></th>
                                    <td contentEditable="true"> <h1 className="td">{cand} </h1></td>
                                    <td> <h1 className="td">{list2[index]} </h1></td>
                                    <td> <h1 className="td">{list3[index]} </h1></td>
                                    <td> <h1 className="td">{list4[index]}</h1></td>
                                    <td><h1 className="td"> ${list5[index].replace(".", "")}</h1> </td>
                                    <td><h1 className="td">{list6[index].replace(".", "")} </h1> </td>
                                    <td> < a href={list7[index]} role="button" > Link</a >
                                    </td>

                                </tr>
                            )
                        })}

                    </tbody>
                </table>







            </div>



        </div >
    }









    render() {



        return (
            <div className="container" id="table-contain">
                {this.dibujarTabla()}



            </div >
        )
    }
}
export default Home;
