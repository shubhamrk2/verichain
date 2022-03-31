import React, {Component} from "react";

class Register extends Component{
        render(){
            return(
                <div>
                    <a href="/src/student/index.html" class="card">
                        <div class="card-image"></div>
                        <div class="card-text">
                            <h1>STUDENT</h1>
                        </div>
                    </a>
                    <a href="/src/institute/index.html" class="card">
                        <div class="card-image2"></div>
                        <div class="card-text">
                            <h1>INSTITUTE</h1>
                        </div>
                    </a>
                </div>
            );
        }
}

export default Register;