import React from 'react'
import styled from 'styled-components'
import { Announcement } from '../components/Announcement'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { Newsletter } from '../components/Newsletter'
import { AllProduct } from '../components/AllProduct'
import { useLocation } from 'react-router'
import { useState } from 'react'


const Container=styled.div``
const Title=styled.h1`
margin:20px;`
const FilterContainer=styled.div`
display:flex;
justify-content:space-between;`
const Filter=styled.div`
margin:20px;`

const FilterText=styled.span`
font-size:20px;
font-weight:600;
magin-right:20px;`

const Select=styled.select`
padding:10px;
margin-rigth:20px;
border:none;
background-color:transparent;
list-style:none;`
const Option=styled.option`
padding:10px;
margin-rigth:20px;
margin-left:20px;
border:none;
list-style:none;`

export const ProductList = () => {
    const location=useLocation();
    const cat=(location.pathname.split("/")[2]);
    const [filters,setFilters]=useState({});
    const [sort,setSort]=useState("popular");

    const handleFilter=(e)=>{
        e.preventDefault();
        const value=e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value,
        })
    }
    //console.log(filters)

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Yummy</Title>

            <FilterContainer>
                <Filter>
                <FilterText>Filter Products</FilterText>
                <Select name="size" onChange={handleFilter}>
                    <Option disabled>
                    Size
                    </Option>
                    <Option>small</Option>
                    <Option>large</Option>
                    <Option>mediume</Option>
                    <Option>extra-Large</Option>
                    <Option>combo</Option>
                    </Select>
                    <Select name="categories" onChange={handleFilter}>
                    <Option disabled>
                        category
                    </Option>
                    <Option>fried</Option>
                    <Option>Indian</Option>
                    <Option>veg</Option>
                    <Option>egg</Option>
                    <Option>nonveg</Option>
                    <Option>chicken</Option>
                    <Option>special</Option>
                    <Option>chiness</Option>
                </Select>
                </Filter>
                <Filter>
                <FilterText>Sort By Choice</FilterText>
               <Select onChange={e=>setSort(e.target.value)}>
                   <Option value="popular">Popular</Option>
                   <Option value="aesc">prive(asec)</Option>
                   <Option value="desc">price(desc)</Option>
                   
               </Select>
                </Filter>
            </FilterContainer>
            <AllProduct cat={cat} filters={filters} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

