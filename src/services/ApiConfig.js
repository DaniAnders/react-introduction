import React, { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PeopleContext } from "../contexts/PeopleContext";

export const ApiConfig = createContext();


const ApiConfigProvider = (props) => {


    const { userslist } = useContext(PeopleContext);
    const { setUsersList } = useContext(PeopleContext);

    const [modalEdit, setModalEdit] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [countriesList, setCountriesList] = useState([]);
    const baseUrl = 'https://localhost:5004/api/PeopleWebAPI';
    const countriesUrl = 'https://localhost:5004/api/CountriesWebAPI';
    const [languagesList, setLanguagesList] = useState([]);
    const languagesUrl = 'https://localhost:5004/api/LanguagesWebAPI';
    const [citiesList, setCitiesList] = useState([]);
    const citiesUrl = 'https://localhost:5004/api/CitiesWebAPI';

    const [updatePeopleList, setUpdatePeopleList] = useState(true);
    const [updateCountriesList, setUpdateCountriesList] = useState(true);
    const [updateCitiesList, setUpdateCitiesList] = useState(true);


    const openCloseModalAdd = () => {
        setModalAdd(!modalAdd);
    }

    const openCloseModalEdit = () => {
        setModalEdit(!modalEdit);
    }
    const openCloseModalDelete = () => {
        setModalDelete(!modalDelete);
    }


    const getResponseData = async () => {
        await axios.get(baseUrl)
            .then(response => {
                setUsersList(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        if (updatePeopleList) {
            getResponseData();
            setUpdatePeopleList(false);
        }

    }, [updatePeopleList])


    const deleteRequest = async (selectedPerson) => {
        await axios.delete(baseUrl + "/" + selectedPerson.ssn)
            .then(response => {
                setUsersList(userslist.filter(person => person.ssn !== response.data));
                setUpdatePeopleList(true);
                openCloseModalDelete();
            }).catch(error => {
                //console.log(error);
            })
    }




    const getCountries = async () => {
        await axios.get(countriesUrl)
            .then(response => {
                setCountriesList(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        if (updateCountriesList) {
            getCountries();
            setUpdateCountriesList(false);
        }
    }, [updateCountriesList])


    const postCountry = (seletedCountry) => {

        axios.post(countriesUrl, seletedCountry, {
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                setCountriesList(countriesList.concat(response.data));
                setUpdateCountriesList(true);
                openCloseModalAdd();
            }).catch(response => {
                alert(JSON.stringify(seletedCountry, null, 2));
                alert(response.data);
                //console.log(error);
            })
    }


    const deleteCountry = async (seletedCountry) => {
        await axios.delete(countriesUrl + "/" + seletedCountry.countryName)
            .then(response => {
                setCountriesList(countriesList.filter(country => country.countryName !== response.data));
                setUpdateCountriesList(true);
                openCloseModalDelete();
            }).catch(error => {
                alert(error);
            })
    }


    const getCities = async () => {
        await axios.get(citiesUrl)
            .then(response => {
                setCitiesList(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        if (updateCitiesList) {
            getCities();
            setUpdateCitiesList(false);
        }
    }, [updateCitiesList])

    const deleteCity = async (selectedCity) => {
        await axios.delete(citiesUrl + "/" + selectedCity.cityName)
            .then(response => {
                setCitiesList(citiesList.filter(city => city.cityName !== response.data));
                setUpdateCitiesList(true);
                openCloseModalDelete();
            }).catch(error => {
                alert(error);
                //console.log(error);
            })
    }

    const getLanguages = async () => {
        await axios.get(languagesUrl)
            .then(response => {
                setLanguagesList(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        getLanguages();
    })



    return (
        <ApiConfig.Provider value={{ baseUrl, deleteRequest, citiesUrl, modalAdd, modalDelete, modalEdit, openCloseModalAdd, openCloseModalEdit, openCloseModalDelete, countriesList, postCountry, deleteCountry, citiesList, setCitiesList, deleteCity, languagesList, setUpdatePeopleList, setUpdateCitiesList }}>
            {props.children}
        </ApiConfig.Provider>
    );



}

export default ApiConfigProvider;