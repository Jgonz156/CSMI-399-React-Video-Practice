import React from 'react';
import "./ninjas.css"

const Ninjas = ({ninjas, deleteNinja}) => {
    const ninjaList = ninjas.map(ninja => {
        if (ninjas.age > 20) {
            return (
                <div className="ninja" key={ninja.id}>
                    <section>name: {ninja.name}</section>
                    <section>Age: {ninja.age}</section>
                    <section>Belt: {ninja.belt}</section>
                    <button onClick={() => { deleteNinja(ninja.id) }}>Delete Ninja</button>
                </div>
            )
        } else {
            return null
        }
    })
    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}

export default Ninjas;