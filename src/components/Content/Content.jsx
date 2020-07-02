import React from 'react';
import '../Content/Content.scss';
import Card from '../Card/Card';



const Content = ({ data, isLoading }) => {

    return (
       
            <ul className="content__card-list">
                {
                    isLoading
                        ? 'Please wait...'
                        : data.map((item) => {
                            return <Card key={item.name} 
                            name={item.name}
                            species={item.species}
                            />
                        })
                }
            </ul>
           
       
    )
}



export default Content;