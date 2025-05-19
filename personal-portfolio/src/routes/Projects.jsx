import React from 'react'
import Header from '../components/Header'
import { projects } from '../data/projects.json'
import { Link } from 'react-router-dom'


const Projects = () => {
    return (
        <div>
            <Header />
            <h1>Projects</h1>

            <ul>
                {projects.map((x) => (
                    <li key={x.id}>
                        <Link to={x.name}>{x.link}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Projects