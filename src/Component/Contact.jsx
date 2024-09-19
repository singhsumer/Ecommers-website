    import React, { useState } from 'react'
    import './Contact.css'

    const Contact = () => {
        const [user , setUser] =useState(
            {
                Name: '', Email:'',Subject:'',Message:''
            }
        )
            let values ,names
            const data = (e) => {
                values = e.target.value;
                names = e.target.names;   
                setUser( {...user,[names]:values})
            }
    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="form">
                        <h2>#Contact us</h2>
                            <form method="POST">
                                <div className="box">
                                    <div className="lable">
                                        <h4>Name</h4>
                                    </div>
                                    <div className="input">
                                        <input type="text" placeholder='name' value={user.Name} name='Name' onChange={data} />
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="lable">
                                        <h4>E-mail</h4>
                                    </div>
                                    <div className="input">
                                        <input type="email" placeholder='name' value={user.Email} name='Email' onChange={data} />
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="lable">
                                        <h4>Sub</h4>
                                    </div>
                                    <div className="input">
                                        <input type="text" placeholder='name' value={user.Subject} name='Subject' onChange={data} />
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="lable">
                                        <h4>message</h4>
                                    </div>
                                    <div className="input">
                                        <textarea  placeholder='message' value={user.Message} name='Message' onChange={data} />
                                    </div>
                                    <button type='submit'>send</button>
                                </div>

                            </form>
                    </div>
                </div>
            </div>
        </>
    )
    }

    export default Contact;