import React from 'react'

const Unauthorized = () => {
    return (
        <div>
            <div style={{ textAlign: 'center', paddingTop: '60px' }}>
                <h2>🚫 Access Denied</h2>
                <p>This page is for admins only.</p>
            </div>
        </div>
    )
}

export default Unauthorized
