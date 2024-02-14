import React, { useState } from "react";

function CountryInfo() {
  const [searchType, setSearchType] = useState("capital");
  const [searchQuery, setSearchQuery] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (searchType === "capital") {
      fetchCountryByCapital(searchQuery);
    } else if (searchType === "region") {
      fetchRandomCountries(searchQuery);
    }
  };

  const fetchCountryByCapital = async (capital) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/capital/${capital}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCountryData(data);
      setError(null);
    } catch (error) {
      setError("Error fetching data. Please try again.");
      setCountryData(null);
    }
  };

  const fetchRandomCountries = async (region) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      const randomCountries = data.slice(1, 6); // Exclude the first element and take 5 random countries
      setCountryData(randomCountries);
      setError(null);
    } catch (error) {
      setError("Error fetching data. Please try again.");
      setCountryData(null);
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label style={{ marginBottom: "10px" }}>
          Select search type:
          <select
            value={searchType}
            onChange={handleSearchTypeChange}
            style={{ padding: "8px", fontSize: "16px" }}
          >
            <option value="capital">By Capital</option>
            <option value="region">By Region</option>
          </select>
        </label>
        {searchType === "capital" ? (
          <label style={{ marginBottom: "10px" }}>
            Enter capital name:
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              style={{ padding: "8px", fontSize: "16px" }}
            />
          </label>
        ) : (
          <label style={{ marginBottom: "10px" }}>
            Select region:
            <select
              value={searchQuery}
              onChange={handleInputChange}
              style={{ padding: "8px", fontSize: "16px" }}
            >
              <option value="">--Select a region--</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="americas">America</option>
              <option value="africa">Africa</option>
            </select>
          </label>
        )}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Submit
        </button>
      </form>

      {error && (
        <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
      )}

      {countryData && (
        <div>
          {searchType === "capital" ? (
            <div>
              <h3>Country Details</h3>
              <h2>{countryData[0].name.common}</h2>
              <p>Capital: {countryData[0].capital}</p>
              <p>Population: {countryData[0].population}</p>
              <p>Region: {countryData[0].region}</p>
              {/* Add more details as needed */}
            </div>
          ) : (
            <div>
              <h3>Countries in {searchQuery}</h3>
              <ul>
                {countryData.map((country) => (
                  <li key={country.name.common}>{country.name.common}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CountryInfo;
