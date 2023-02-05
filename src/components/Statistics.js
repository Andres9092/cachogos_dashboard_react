import React from 'react';
import '../assets/css/style-home.css';
import ContentTopCards from './ContentTopCards';
import ContentCategoryCards from './ContentCategoryCards';
import ContentLastProductCards from './ContentLastProductCards';
import '../assets/css/cardStyles.css';


function Statistics(){
    return(
        <React.Fragment>

<main className="stat">
        
        <ContentTopCards />
        <ContentCategoryCards/>
        <ContentLastProductCards/>
        

</main>

        
</React.Fragment>

)
}
export default Statistics

