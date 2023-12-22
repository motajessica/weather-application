// "use client"
import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AsyncPaginate } from "react-select-async-paginate";
import { InputProps } from "../interfaces";

type Suggestion = {
  label: string;
  value: string;
};
type GroupedSuggestion = {
  label: string;
  options: Suggestion[];
};

const Input = ({ handleSearch, setLocation }: InputProps) => {
  const [search, setSearch] = useState(null);
  const loadOptions = async (inputValue: string) => {
    const trimmedInputValue = inputValue.trim();

    if (!trimmedInputValue) {
      return {
        options: [],
        hasMore: false,
      };
    }

    const response = await fetch(
      `http://api.weatherapi.com/v1/search.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${inputValue}`
    );
    const data: Array<{
      id: number;
      name: string;
      country: string;
      url: string;
    }> = await response.json();

    const options = data.map((city) => ({
      label: `${city.name}, ${city.country}`,
      value: city.url,
    }));

    return {
      options: options,
      hasMore: false,
    };
  };
  const handleOnChange = (option: any) => {
    setSearch(option);
    setLocation(option.label);
    handleSearch(option.label); 
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      background: "transparent !important",
      borderColor: "transparent",
      borderBottomColor: "white",
      borderBottomWidth: "2px",
      borderBottomStyle: "solid",
      boxShadow: "none",
      "&:hover": {
        borderColor: "transparent",
        borderBottomColor: "white",
      },
      "&:focus": {
        borderColor: "transparent",
        borderBottomColor: "white",
        outline: "none",
        boxShadow: "none",
      },
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "white",
    }),
    input: (provided: any) => ({
      ...provided,
      color: "white",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      display: "none",
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: "none",
    }),
  };

  return (
    <form className="flex items-center md:w-2/4 w-full order-2">
      <AsyncPaginate<Suggestion, GroupedSuggestion, unknown>
        placeholder="Search City"
        className="w-full bg-transparent placeholder-white outline-none text-slate-500"
        debounceTimeout={500}
        styles={customStyles}
        value={search}
        loadOptions={loadOptions}
        onChange={handleOnChange}
        onKeyDown={handleSearch}
      />
      <div className="ml-[-25px] cursor-pointer text-white">
        <BiSearchAlt className="text-xl" />
      </div>
    </form>
  );
};

export default Input;


