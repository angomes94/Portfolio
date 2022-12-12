import React from 'react'


function ProjectPage(props) {
    return (
        <div className='container-project'>
            <h7>{props.title}</h7>
            <div className='wrapper-project'>
                <p>{props.description}</p>
                <div className='wrapper-images'>
                    <img className='img1' alt='img1' src={props.img1}/>
                    <img className='img2' alt='img2' src={props.img2}/>
                    <img className='img3' alt='img3' src={props.img3}/>
                    <img className='img4' alt='img4' src={props.img4}/>
                </div>
            </div>

        </div>
    )
}

export default ProjectPage;
