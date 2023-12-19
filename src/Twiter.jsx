export function Twiter({userName,name,isFollowing}){
    return(
        <article className="a">
           <header className="b">
                <img className="c" src={`https://unavatar.io/${userName}`}alt="" />
                <div className="e">
            <strong>{name}</strong>
                   <span className="f">@{userName}</span>
                </div>
       
           </header>
       
           <aside>
              <button className="d">
               seguir
              </button>
           </aside>
       
       </article>
                )



}