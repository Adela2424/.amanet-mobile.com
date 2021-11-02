import React from "react";
import "./Form.css";
function Form() {
  return (
    <div className="page_form">
      <div className="container_form">
        <div className="container_form_left">
            <div className="text_left">
                <h3 className="titlu_left"> Pentru mai multe detalii va rugam lasati un mesaj completand formularul din dreapta !</h3>
                <h4> Telefon: 0747846890</h4>
                <h4> Email: AmanetMobile@yahoo.com</h4>
            </div>
        </div>
        <div className="container_form_right">
          <div className="container_text">
            <form action="">

              <div className="form_row">
                <div className="input_data">
                  <input type="text" placeholder="First Name"/>
                  
                </div>
                <div className="input_data">
                  <input type="text" placeholder="Last Name" />
                  
                </div>
               </div>

                <div className="form_row">
                  <div className="input_data">
                    <input type="text" placeholder="Email Adress" />
                    
                  </div>
                  <div className="input_data">
                    <input type="text"  placeholder="Website Name" />
                  
                  </div>
                </div>

                <div className="form_row textarea">
                  <div className="input_data">
                    <textarea name="" id="" cols="30" rows="10"  placeholder="Email Adress" ></textarea>
                    
                  </div>
                </div>

                <div className="form_row submit_btn">
                  <div className="input_data">
                    <div className="inner"  ></div>
                    <input type="submit" value="SUBMIT"  />
                  </div>
                </div>
    
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
