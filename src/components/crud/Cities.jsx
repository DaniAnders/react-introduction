import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ApiConfig } from '../../services/ApiConfig';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Select from 'react-select';
import styles from './PeopleTable.module.css';

const Cities = () => {

    const { modalAdd } = useContext(ApiConfig);
    const { modalDelete } = useContext(ApiConfig);
    const { openCloseModalAdd } = useContext(ApiConfig);
    const { openCloseModalDelete } = useContext(ApiConfig);
    const { countriesList } = useContext(ApiConfig);
    const { citiesUrl } = useContext(ApiConfig);
    const { citiesList } = useContext(ApiConfig);
    const { setCitiesList } = useContext(ApiConfig);
    const { deleteCity } = useContext(ApiConfig);
    const { setUpdateCitiesList } = useContext(ApiConfig);

    const [selectedCity, setSelectedCity] = useState(
        {
            cityName: '',
            countryName: ''
        }
    )

    const [selectedCountryOption, setSelectedCountryOption] = useState(null);


    const selectCity = (city, action) => {
        setSelectedCity(city);
        if (action === "Delete")
            openCloseModalDelete();
    }


    const postCity = () => {

        selectedCity.countryName = selectedCountryOption.value;
        axios.post(citiesUrl, selectedCity, {
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            setCitiesList(citiesList.concat(response.data));
            setUpdateCitiesList(true);
            openCloseModalAdd();
        }).catch(response => {
            alert(JSON.stringify(selectedCity, null, 2));
            // alert(JSON.stringify(selectedCountryOption, null, 2));
            alert(response.data);
            //console.log(error);
        })
    }



    const handleChange = e => {
        const { name, value } = e.target;
        setSelectedCity({
            ...selectedCity,
            [name]: value
        });
    }


    return (
        <div className={styles.form_table} >
            <h3>Cities</h3>
            <div>
                <Button className="btn btn-success" onClick={() => openCloseModalAdd()}>Add City</Button>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City Name</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {citiesList.map(city => (
                        <tr key={city.cityName}>
                            <td>{city.cityName}</td>
                            <td>{city.countryName}</td>
                            <td>
                                <Button className="btn btn-danger" onClick={() => selectCity(city, "Delete")} >Delete</Button>
                            </td>
                        </tr>
                    ))

                    }
                </tbody>
            </table>
            <Modal isOpen={modalAdd}>
                <ModalHeader>Add new City</ModalHeader>
                <ModalBody>
                    <form className="form-group">
                        <label>City Name</label>
                        <input type="text" className="form-control" name="cityName" onChange={handleChange} required />
                        <label>Country</label>
                        <Select
                            defaultValue={selectedCountryOption}
                            onChange={setSelectedCountryOption}
                            options={countriesList.map(country => ({ value: country.countryName, label: country.countryName }))}
                        />
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button className="btn btn-primary" onClick={() => postCity()}>Add</Button>{" "}
                    <Button className="btn btn-danger" onClick={() => openCloseModalAdd()}>Cancel</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalDelete}>
                <ModalBody>
                    Confirm you want to remove this city: {selectedCity && selectedCity.cityName} ?
                </ModalBody>
                <ModalFooter>
                    <Button className="btn btn-danger" onClick={() => deleteCity(selectedCity)}>Yes</Button>
                    <Button className="btn btn-secondary" onClick={() => openCloseModalDelete()}>No</Button>
                </ModalFooter>
            </Modal>


        </div>
    )

}

export default Cities;