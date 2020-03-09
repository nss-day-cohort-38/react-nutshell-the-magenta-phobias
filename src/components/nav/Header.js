import React from "react"

const Header = props => {
    const user= JSON.parse(sessionStorage.getItem('credentials'))
    if(props.hasUser){
        return (
            <>
            <header>
            <h1 className="title">{'{'}fōlô{'}'}</h1>
            </header>
            <div className="userInfo">
                <div className="deets">
                <h4 className="userName">{user.username}</h4>
                <picture className="image-cropper">
                    <img src={user.picUrl} className="profile-pic" alt="prof-pic"/>
                </picture>
   
        </div>
            </div>
            </>
        )
    }else {
    return (
        <>
        <header>
        <h1 className="title">{'{'}fōlô{'}'}</h1>
        </header>
        </>
    )}
}

export default Header;
