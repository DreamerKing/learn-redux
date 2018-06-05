import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = () => ( 
<p>
    显示: {'  '} 
    <FilterLink filter = "SHOW_ALL" >
        所有 
    </FilterLink> {',  ' } 
    <FilterLink filter = "SHOW_ACTIVE" >
         激活 
    </FilterLink> {',  '} 
    <FilterLink filter = "SHOW_COMPLETED" >
        完成 
    </FilterLink> 
    </p>
)

export  default Footer;