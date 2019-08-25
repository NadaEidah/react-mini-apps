import React, {Component} from "react";



class Card  extends React.Component {
    
    render()
    {
        return(
            <div className="card">
                <div className="all">
                    <div className="card-header">
                    name1
                    </div>
                    <div className="card-body">
                        <p className="card-text">name1@test.com</p>
                        <p className="card-text">147852</p>
                        <button className="btn btn-primary">Click to View Details</button>
                        
                    </div>
                </div>
                <div className="all">
                    <div className="card-header">
                    name2
                    </div>
                    <div className="card-body">
                        <p className="card-text">name2@test.com</p>
                        <p className="card-text">23698712</p>
                        <button className="btn btn-primary">Click to View Details</button>
                    </div>
                    </div>

                    <div className="all">
                    <div className="card-header">
                    name3
                    </div>
                    <div className="card-body">
                        <p className="card-text">name3@test.com</p>
                        <p className="card-text">35741269</p>
                        <button className="btn btn-primary" >Click to View Details</button>
                    </div>
                    </div>
            </div>
    )
    }
}




 
export default Card;