import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ApiConfig } from '../../services/ApiConfig';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import styles from './PeopleTable.module.css';



const Countries = () => {

    const { modalAdd } = useContext(ApiConfig);
    const { modalDelete } = useContext(ApiConfig);
    const { openCloseModalAdd } = useContext(ApiConfig);
    const { openCloseModalDelete } = useContext(ApiConfig);
    const { countriesList } = useContext(ApiConfig);
    const { postCountry } = useContext(ApiConfig);
    const { deleteCountry } = useContext(ApiConfig);


    const [seletedCountry, setseletedCountry] = useState(
        { 
            countryName: '' 
        }
    )


    const selectCountry = (country, action) => {
        setseletedCountry(country);
        if(action === "Delete") 
          openCloseModalDelete();
    }


    const handleChange = e => {
        const { name, value } = e.target;
        setseletedCountry({
            ...seletedCountry,
            [name]: value
        });
    }



    return (

        <div className={styles.form_table} >
        <h3>Countries</h3>
        <div>
                <Button className="btn btn-success" onClick={() => openCloseModalAdd()}>Add Country</Button>
        </div>
        <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Country Name</th>
                    </tr>
                </thead>
                <tbody>
                    {countriesList.map(country => (
                        <tr key={country.countryName}>    
                         <td>{country.countryName}</td>
                            <td>               
                                <Button className="btn btn-danger" onClick={() => selectCountry(country, "Delete")} >Delete</Button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            <Modal isOpen={modalAdd}>
                <ModalHeader>Add Country</ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>Country Name</label>
                        <input type="text" className="form-control" name="countryName" onChange={handleChange}/>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className="btn btn-primary" onClick={() => postCountry(seletedCountry)}>Add</Button>{" "}
                    <Button className="btn btn-danger" onClick={() => openCloseModalAdd()}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={modalDelete}>
                <ModalBody>
                    Confirm you want to remove this country: { seletedCountry && seletedCountry.countryName} ?
                </ModalBody>
                <ModalFooter>
                    <Button className="btn btn-danger" onClick={() => deleteCountry(seletedCountry)}>Yes</Button>
                    <Button className="btn btn-secondary" onClick={() => openCloseModalDelete()}>No</Button>
                </ModalFooter>
            </Modal>
        

        </div>
    )


}


export default Countries;
