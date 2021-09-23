import React from 'react'
import { Link } from 'react-router-dom'
import countriesList from "../countries.json"

function CountriesList() {

  return (
    <div className="col-5" >
    <ul className="list-group">
    {countriesList.map((country) => <li class="list-group-item list-group-item-action" href="/ABW">
    <Link to={`/${country.alpha3Code}`}>
    <img src={`https://www.countryflags.io/${country.alpha2Code}/flat/64.png`}  alt={`${country.name}`} />
    <h2>{country.name}</h2>
    </Link>
    </li>)
    }

    </ul>
</div>
)

}
export default CountriesList ;