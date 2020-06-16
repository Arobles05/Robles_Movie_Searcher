import  React from 'react'
export const Header = ({ children }) => (
   <section className="hero is-primary is-medium">
      <div className="hero-body">
            <div className="container">
                { children }
            </div>
        </div>
  </section>
)
