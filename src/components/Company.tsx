import React, { ChangeEvent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { companyAction, searchCompany } from '../features/companySlice'
import { useSelector } from 'react-redux'
import { RootState , AppDispatch } from '../store'




export default function Company() {
  const url = 'https://api.github.com/organizations'
  const dispatch = useDispatch<AppDispatch>();
  const companies = useSelector((state: RootState) => state.company.companyList)
  const companyLoading = useSelector((state: RootState) => state.company.loading)
  const error = useSelector((state: RootState) => state.company.error)
  const searchTerm = useSelector((state:RootState)=>state.company.SearchTerm)

  console.log(companies, 'companies')
  useEffect(() => {
    function fetchData() {
      axios
        .get(url)
        // access to data
        // action.payload
        .then((response) => dispatch(companyAction.getData(response.data)))
        .catch((error) => dispatch(companyAction.getError(error.message)))
        // .catch((error) => console.log(error,'error'))

    }

    fetchData()
  }, [])


  if (error) {
    return <div> {error}</div>
  }
  if (companyLoading === true) {
    return (
      <div>
        <h1>loading</h1>
      </div>
    )
  }
  const handleSearch =(event:ChangeEvent<HTMLInputElement>)=>{
    dispatch(searchCompany(Number(event.target.value)));
  }

  //  search with searchTerm 
  const filterdCompanies = searchTerm
  ?companies.filter((company)=> company.id === searchTerm)
  :companies;
  return (
    <div>
      <h2>Company app</h2>
      <input type="text" 
       name='SearchById' 
      placeholder='Search by id here ..'
       onChange={handleSearch}
      value={searchTerm}/>
      {filterdCompanies.map((company) => (
        <div key={company.id}>
          <h3>{company.id}</h3>
          <h5>{company.login}</h5>
          <img src={company.avatar_url} />
          
        </div>
      ))}
    </div>
  )
}
