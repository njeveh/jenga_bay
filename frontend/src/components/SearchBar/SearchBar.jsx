import React, {useState,useRef,useEffect} from "react"
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/input"
import {BiSearchAlt2} from "react-icons/bi"
import {Flex} from "@chakra-ui/layout"
import SearchedUsersDropdown from "./SearchedItemsDropDown"
import CategoryList from "../Categories/CategoryList";


const SearchBar = () => {
    
    const [options, setOptions] = useState([])
    const [searchModalOpen, setSearchModalOpen] = useState("")

    //handles change in input
    const onInputChange = (event) => {
        const searchInput = event.target.value
        console.log(searchInput)

        if (searchInput) {
            setSearchModalOpen(true);
        } else {
            setSearchModalOpen(false);
        }

       const newOptions = CategoryList.filter((category) => 
            category.value.toLowerCase().includes(event.target.value))
 
       setOptions(newOptions)
    }

    //handles closing of search when clicking anywhere outside the modal
    const [clickedOutside, setClickedOutside] = useState(false);
    const myRef = useRef();

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
        setClickedOutside(true);
        }
    };

    //useEffect to listen to any click events
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    });
    

    return(
        <Flex flexDir="column">
            <InputGroup ml="6vw">
                <Input borderWidth="1.9px" onChange={onInputChange} onClick={(e) => {setClickedOutside(false)}} focusBorderColor = "blue" background="#ffffff" borderRadius="5px" width="554px" placeholder="search here..." size="md"/>
                <InputRightAddon
                    pointerEvents="none"
                    children={<BiSearchAlt2 />}
                />
            </InputGroup>
            <div ref={myRef}>
             { !clickedOutside && searchModalOpen && <SearchedUsersDropdown options={options} />}
            </div>
        </Flex>
    )
}

export default SearchBar;
