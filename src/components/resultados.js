import React, { Component } from 'react';
import styles from '../customcss/resultados.css'
import { connect } from 'react-redux';


class Result extends Component {

    constructor(props) {

        super(props);



        this.state = {

            file: "",
            image: "",
            URL: "http://192.168.96.37:5005/"
            /**URL: "https://79cc45d2.ngrok.io/"*/
        }
    }


    onChangeHandler = event => {
        this.setState({

            file: event.target.files[0]
        })

        console.log(event.target.files[0])

    }




    sendDerver() {

        console.log("hola bb")
        const data = new FormData();

        data.append('file', this.state.file);
        this.props.cambiarLoader(true)
        this.props.MostraImagen("")


        fetch(this.state.URL + "analizar", {

            method: 'POST',
            body: data,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
            }

        })
            .then(response => response.json())
            .then((responseJson) => {



                this.setState({
                    image: responseJson['imagen']
                })

                this.props.MostraImagen(responseJson['imagen'])
                this.props.cambiarLoader(false)

                console.log(" holaaaaaaaa  " + responseJson['imagen'])





            }).catch(function (error) {

                console.log("ERROR  " + error)

            });

    }


    viewImage() {
        const data = this.props.image

        if (this.props.image!== "") {

            return <div className="Image_view">   <img src={`data:image/jpeg;base64,${data}`} /></div>
        } else {
            return <div> </div>
        }

    }

    loader() {

        if (this.props.loader===true) {


            return <div>

                <div class="loader">

                </div>
                <div class="loading-text">Cargando Imagen...</div>

            </div>

        }else if(this.props.loader===false){

            return<div> </div>
        }
    }








    render() {



        return (

            <div className="container">

                <div className="conten">
                    <h1 className="TitleView">  Pliego de condiciones</h1>


                    <input type="file" className="file" onChange={this.onChangeHandler} />

                    <button type="button" className="btn btn-primary" onClick={this.sendDerver.bind(this)}>Consultar</button>
                    {this.loader()}

                    {this.viewImage()}
                </div>


            </div>


        );
    }
}



const mapStateProps = state => ({

    prueba: state.prueba,
    loader: state.loader,
    image: state.image
})

const mapDispatchToProps = dispactch => ({

    MostraImagen(e) {
        dispactch({
            type: "MostrarImagen",
            input: e
        })

    },


    cambiarLoader(e){
        dispactch({
            type: "cambiarLoader",
            input: e
        })

    }


})

export default connect(mapStateProps, mapDispatchToProps)(Result);

