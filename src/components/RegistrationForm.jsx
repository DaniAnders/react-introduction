import React, { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './RegistrationForm.module.css';
import { PeopleContext } from '../contexts/PeopleContext';
import { ApiConfig } from '../services/ApiConfig';
import axios from 'axios';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';


const RegistrationForm = () => {

   const navigate = useNavigate();
  
   const { selectedPerson } = useContext(PeopleContext);
   const { setSelectedPerson } = useContext(PeopleContext);
   const { userslist } = useContext(PeopleContext);
   const { setUsersList } = useContext(PeopleContext);
   const { citiesList } = useContext(ApiConfig);
   const { languagesList } = useContext(ApiConfig);
   const { setUpdatePeopleList } = useContext(ApiConfig);

    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedCityOption, setSelectedCityOption] = useState(null);
  
    const postPersonData = () => {
  
        delete selectedPerson.country;
        selectedPerson.city = selectedCityOption.value;

        let result = '';
        {
            selectedOption.map((item) =>
                result += item.value + ','
            )
        }
        selectedPerson.languages = result.slice(0, -1);


        axios.post("https://localhost:5004/api/PeopleWebAPI/Post", selectedPerson, {
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                setUsersList(userslist.concat(response.data));
                setUpdatePeopleList(true);
                navigate('/peopletable');
            }).catch(response => {
                alert(JSON.stringify(selectedPerson, null, 2));
                //alert(JSON.stringify(selectedOption, null, 2));
                alert(response.data);
                //console.log(error);
            })
    }


    const handleUserInputChange = (event) => {
        const { name, value } = event.target;
        setSelectedPerson({
            ...selectedPerson,
            [name]: value
        });
    }


    return (
        <div className={styles.form_container}>
            <h2>Add new person</h2>
            <div className="form-group">
                <label>SSN</label>
                <input type="text" className="form-control" name="ssn" onChange={handleUserInputChange} />
                <label>First Name</label>
                <input type="text" className="form-control" name="firstName" onChange={handleUserInputChange} />
                <label>Last Name</label>
                <input type="text" className="form-control" name="lastName" onChange={handleUserInputChange} />
                <label>Phone</label>
                <input type="text" className="form-control" name="phone" onChange={handleUserInputChange} />
                <label>City</label>
                <Select
                    defaultValue={selectedCityOption}
                    onChange={setSelectedCityOption}
                    options={citiesList.map(city => ({ value: city.cityName, label: city.cityName }))}
                />
                <label>Languages</label>
                <Select
                    isMulti
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={languagesList.map(lan => ({ value: lan.languageName, label: lan.languageName }))}
                />
                <div>
                    <Button  className="btn btn-primary" onClick={() => postPersonData()}>Add</Button>{" "}
                    <Button className="btn btn-danger" onClick={() => navigate('/')}>Cancel</Button>
                </div>
            </div>
        </div>

    );
}

export default RegistrationForm;
