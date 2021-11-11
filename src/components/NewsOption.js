import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import "./NewsOption.css";

function NewsOption(props) {
  // const [category, setCategory] = useState("headlines");
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in");
  const [keyWords, setkeyWords] = useState("");

  const newsOptionsData = [
    // {
    //   label: "Headlines",
    //   value: "headlines",
    // },
    {
      label: "General",
      value: "general",
    },
    {
      label: "Business",
      value: "business",
    },
    {
      label: "Entertainment",
      value: "entertainment",
    },
    // {
    //   label: "General",
    //   value: "general",
    // },
    {
      label: "Health",
      value: "health",
    },
    {
      label: "Science",
      value: "science",
    },
    {
      label: "Sports",
      value: "sports",
    },
    {
      label: "Technology",
      value: "technology",
    },
  ];

  const countryOptionsData = [
    {
      label: "India",
      value: "in",
    },
    {
      label: "USA",
      value: "us",
    },
    {
      label: "China",
      value: "ch",
    },
    {
      label: "Japan",
      value: "jp",
    },
    {
      label: "Russia",
      value: "ru",
    },
    {
      label: "Australia",
      value: "au",
    },
  ];

  const handleCategoryChange = (event) => {
    props.onCategorySelect(event.target.value, country, keyWords);
    setCategory(event.target.value);
  };

  const handleCountryChange = (event) => {
    props.onCategorySelect(category, event.target.value, keyWords);
    setCountry(event.target.value);
  };

  const handleKeyWordsSearch = (event) => {
    props.onCategorySelect(category, country, event.target.value);
    setkeyWords(event.target.value);
  };

  return (
    <div className="news-options">
      <Box sx={{ width: 250 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Age"
            onChange={handleCategoryChange}
          >
            {newsOptionsData.map((type) => (
              <MenuItem value={type.value}>{type.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ width: 250 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            label="Age"
            onChange={handleCountryChange}
          >
            {countryOptionsData.map((country) => (
              <MenuItem value={country.value}>{country.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <TextField
        sx={{ width: 250 }}
        onChange={handleKeyWordsSearch}
        label="Keywords"
        variant="outlined"
      />
    </div>
  );
}

export default NewsOption;
