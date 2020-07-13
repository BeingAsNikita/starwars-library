import React from 'react';
import '../Content/Content.scss';
import Card from '../Card/Card';



const Content = ({ data, isLoading, setModalData, setSpeciesThunk }) => {
    return (

        <ul className="content__card-list">
            {
                isLoading
                    ? 'Please wait...'
                    : data.map((item) => {

                        return <Card key={item.name}
                        setModalData={setModalData}
                        setSpeciesThunk={setSpeciesThunk}
                            data={item}
                        />
                    })
            }
        </ul>


    )
}



export default Content;