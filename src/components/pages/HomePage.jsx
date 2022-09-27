import React from 'react'
import NavBarLogin from './navbar/NavBarlogin'
import landing from "../../img/landing.png"
import "./HomePage.css"
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
const HomePage = () => {
  return (
    <div>
       <NavBarLogin/>
       <div className='flex_home'>
          
          <div className='information'>
           <h1>learn Online</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sequi natus quas ducimus veniam vel. Perferendis debitis temporibus iste facilis! Amet consequuntur neque officia quam corporis doloremque animi libero error repellat! Quos, repudiandae molestias ullam facilis magnam unde minus exercitationem adipisci ipsum esse laudantium aliquid fuga commodi facere mollitia et.</p>
           </div>

          <div>
            <img className='landing' src={landing} alt="" srcset="" />
          </div>
       </div>

      <div className='flex_home'>
     

        <div>
          <iframe class="gmap_iframe" title="myFrame" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Aurangabad&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
        </div>
          
         

        <div className='contact_form'>
        <h1>Contact Form</h1>
        <TextField className='TextField' label="Enter your email" variant="outlined" sx={{marginTop:"30px"}}/>
        <TextField className='TextField' label="Enter your mobile number" variant="outlined" sx={{marginTop:"30px"}}/>
        <TextField className='TextField' label="Enter your question" variant="outlined" sx={{marginTop:"30px"}}/>
        <Button className="Button" variant="contained" sx={{width:"20rem",marginTop:"30px"}}>Submit</Button>       

      </div>

      </div>

    </div>
  )
}

export default HomePage