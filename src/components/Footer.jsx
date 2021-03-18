import React from 'react'

function Footer() {

    const date = new Date();
    let year = date.getFullYear();

    return (
        <footer>
            <div className="footer">
                © {year}
            </div>
        </footer>
      
    )
}

export default Footer
