import React from "react";
import "./Status.css"
import { useNavigate } from 'react-router-dom';


const Status = () => {
  const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return(
          <div className="statusContainer">
            <div className="statusWrapper">
                <div className="statusTaskWrapper">
                    <div className="nomen">
                      <span>***********12</span>
                      <span>Tasks*************</span>                        
                    </div>
                    <div className="completedContainer">
                        <div className="ccon">
                        <span>4</span>
                            <span>completed</span>
                            <button>view</button>
                         </div>
                        <div className="ucon">
                        <span>4</span>
                            <span>uncompleted</span>
                            <button>view</button>
                         </div>
                        <div className="dcon">
                        <span>4</span>
                            <span>deleted</span>
                            <button>view</button>
                         </div>
                      </div>
                </div>
                <div className="statusTaskWrapper">
                            <div className="nomen">
                      <span>***********8</span>
                      <span>Projects*************</span>                        
                    </div>
                    <div className="completedContainer">
                        <div className="ccon">
                        <span>4</span>
                            <span>completed</span>
                            <button>view</button>
                         </div>
                        <div className="ucon">
                        <span>3</span>
                            <span>uncompleted</span>
                            <button>view</button>
                         </div>
                        <div className="dcon">
                        <span>1</span>
                            <span>deleted</span>
                            <button>view</button>
                         </div>
                      </div>
                </div>
                
              </div>

          </div>
    )
}

export default Status;