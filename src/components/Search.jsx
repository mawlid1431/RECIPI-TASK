import React from 'react'

function Recipe() {
    return (
        <div>

            <input type="text" placeholder="Search" value={value} onChange={(e) => setSearch(e.target.value)} />

            <button onClick={searchMeals}>Search</button>

        </div>
    )
}
export default Recipe