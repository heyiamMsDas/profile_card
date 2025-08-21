
import React from "react";


import proimg from "./img/pro_img.jpeg"



const CompanyName = ({name , tagline}) => {

  return (
 <div className="CompanyName"> 
 <h2 className="header"> {name} </h2>
 <p className="tagline">{tagline}</p>
 </div>
  )


};

const ProfileImage = ({src , alt }) =>  {
    return (
      <div className="profile-outline">
      <img className="img-outline"
      src = {src}
      alt= {alt}
     
     />
      </div>
    )



}

const AboutProfile = ({description}) => {

  return (
    <div className="description-outline"> 
      <p className="description">{description}</p>
    </div>


  )


}


const App = () => {

  return (
    <div>

      <div>
        <CompanyName
        name="XYZ COMPANY"
        tagline="Innovate , build , Success"
        />

        <ProfileImage
        
        src= {proimg}
        alt={"profile"}

        

        />

        <AboutProfile
        description="A frontend web developer plays a crucial role in shaping the user experience of web applications. They combine technical skills with creativity to build engaging, user-friendly interfaces that meet the needs of users and businesses alike. As technology evolves, frontend developers must stay updated with the latest trends and tools in web development to remain competitive in the field."

        />

      </div>

    </div>
  )

} ;


export default App ;