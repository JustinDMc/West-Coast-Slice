import React from 'react'

export default function Home( {currentUser} ) {

    return (
        <div>
            <h1>Welcome {currentUser.username}, we are on the home page.</h1>
        </div>
    )
}
