import React from 'react'
import Header from '../components/Header'
import { projects } from '../data/projects.json'
import { useParams } from 'react-router-dom'

const Links = () => {
    const {name} = useParams
    const project = projects.find((x) => x.name === name)
    return (
        <div>
            <Header />
            <h1>Link</h1>
            <p>{project.id}</p>
            <p>{project.name}</p>
            <p>{project.link}</p>

        </div>
    )
}

export default Links