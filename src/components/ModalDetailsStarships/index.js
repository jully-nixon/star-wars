import React, { useState, useEffect } from 'react';
import "./style.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const ModalDetailsStarships = (props) => {
    const [starshipsData, setStarshipsData] = useState([]);
    const baseUrlStarship = props.urlstarship;

    const getStarshipsData = async () => {
        await axios.get(baseUrlStarship)
            .then((response) => {
                setStarshipsData(response.data);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    useEffect(() => {
        getStarshipsData();
    });
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className='modal-details-starships'>
                    <h2 className="modal-details-starships-title">{starshipsData.name}</h2>
                    <label>Modelo: <b>{starshipsData.model}</b></label>
                    <label>Fabricante: <b>{starshipsData.manufacturer}</b></label>
                    <label>Classe starship: <b>{starshipsData.starship_class}</b></label>
                    <label>Capacidade de carga: <b>{starshipsData.cargo_capacity}</b></label>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalDetailsStarships;