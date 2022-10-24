import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { ApiConfig } from '../../services/ApiConfig';
import { useNavigate } from 'react-router-dom';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { PeopleContext } from '../../contexts/PeopleContext';
import styles from './PeopleTable.module.css';


const PeopleTable = () => {

    const { userslist } = useContext(PeopleContext);
    const { selectedPerson } = useContext(PeopleContext);
    const { setSelectedPerson } = useContext(PeopleContext);

    const { setUpdatePeopleList } = useContext(ApiConfig);
    const { modalEdit } = useContext(ApiConfig);
    const { modalDelete } = useContext(ApiConfig);
    const { openCloseModalDelete } = useContext(ApiConfig);
    const { openCloseModalEdit } = useContext(ApiConfig);

    const { baseUrl } = useContext(ApiConfig);
    const { citiesList } = useContext(ApiConfig);
    const { deleteRequest } = useContext(ApiConfig);

    const navigate = useNavigate();
    const [selectedCityOption, setSelectedCityOption] = useState(null);


    const selectPerson = (person, action) => {
        setSelectedPerson(person);
        (action === "EditPerson") ?
            openCloseModalEdit()
            : openCloseModalDelete();
    }




    const putRequest = async () => {

        selectedPerson.city = selectedCityOption.value;

        await axios.put(baseUrl + "/" + selectedPerson.ssn, selectedPerson)
            .then(response => {
                var res = response.data;
                var tempdata = userslist;
                tempdata.map(person => {
                    if (person.ssn === selectedPerson.ssn) {
                        person.firstName = res.firstName;
                        person.lastName = res.lastName;
                        person.phone = res.phone;
                        person.city = res.city;
                    }
                });
                setUpdatePeopleList(true);
                openCloseModalEdit();
            }).catch(error => {
                alert(JSON.stringify(selectedPerson, null, 2));
                alert(error);
                //console.log(error);
            })

    }


    const handleChange = e => {
        const { name, value } = e.target;
        setSelectedPerson({
            ...selectedPerson,
            [name]: value
        });
    }



    return (
        <div className={styles.form_table}>
            <h3>People</h3>
            <div>
                <Button className="btn btn-success" onClick={() => navigate('/registration')}> Add new person</Button>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>SSN</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Languages</th>
                    </tr>
                </thead>
                <tbody>
                    {userslist.map(person => (
                        <tr key={person.ssn}>
                            <td>{person.ssn}</td>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.phone}</td>
                            <td>{person.city}</td>
                            <td>{person.languages}</td>
                            <td>
                                <Link to={`/peopletable/${person.ssn}`} style={{ textDecoration: 'none', color: 'blue' }} >Details</Link>
                                <Button className="btn btn-primary" onClick={() => selectPerson(person, "EditPerson")}>Edit</Button>
                                <Button className="btn btn-danger" onClick={() => selectPerson(person, "Delete")}>Delete</Button>
                            </td>
                        </tr>
                    ))

                    }
                </tbody>
            </table>


            <Modal isOpen={modalEdit}>
                <ModalHeader> Edit Person </ModalHeader>
                <ModalBody>
                    <form className="form-group">
                        <label>SSN</label>
                        <input readOnly value={selectedPerson && selectedPerson.ssn} type="text" className="form-control" name="ssn" onChange={handleChange} />
                        <label>First Name</label>
                        <input value={selectedPerson && selectedPerson.firstName} type="text" className="form-control" name="firstName" onChange={handleChange} required />
                        <label>Last Name</label>
                        <input value={selectedPerson && selectedPerson.lastName} type="text" className="form-control" name="lastName" onChange={handleChange} required />
                        <label>Phone</label>
                        <input value={selectedPerson && selectedPerson.phone} type="text" className="form-control" name="phone" onChange={handleChange} required />
                        <label>City</label>
                        <Select
                            defaultValue={selectedCityOption}
                            onChange={setSelectedCityOption}
                            options={citiesList.map(city => ({ value: city.cityName, label: city.cityName }))}
                        />
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button className="btn btn-primary" onClick={() => putRequest()}> Edit </Button>{" "}
                    <Button className="btn btn-danger" onClick={() => openCloseModalEdit()}> Cancel </Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalDelete}>
                <ModalBody>
                    Confirm you want to remove this person : {selectedPerson && selectedPerson.firstName} ?
                </ModalBody>
                <ModalFooter>
                    <Button className="btn btn-danger" onClick={() => deleteRequest(selectedPerson)}> Yes </Button>
                    <Button className="btn btn-secondary" onClick={() => openCloseModalDelete()}> No </Button>
                </ModalFooter>
            </Modal>

        </div>
    )

}

export default PeopleTable;