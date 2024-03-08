import { useState } from "react";
import "./PostUser.css";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom";

const PostUser = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: ""

    })

    const navigate = useNavigate();

    const handleInputChange = (event) =>{
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch ("http://localhost:8080/api/employee", {
                method: "POST",
                headers: {"Content-Type": "application/json","Access-Control-Allow-Headers" : "Content-Type", 'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'},
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log("Employee created: ", data);
            navigate("/");
        }
        catch (error){
            console.log("Error creating employee: ", error.message);
        }


    }

    return(
        <>
            <div className="center-form">
                <h1>Post New Employee</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter your E-mail"
                            value={formData.email}
                            onChange={handleInputChange} />
                    </Form.Group>


                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="phone"
                            placeholder="Enter your Phone"
                            value={formData.phone}
                            onChange={handleInputChange} />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="department"
                            placeholder="Enter your Department"
                            value={formData.department}
                            onChange={handleInputChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">Post Employee</Button>


                </Form>



            </div>
        </>

    )


}


export default PostUser;