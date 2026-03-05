import WindowWrapper from "#hoc/WindowWrapper"
import WindowControls from "#components/WindowClose"
import { socials } from "#constants"
import WindowClose from "#components/WindowClose"
const Contact = () => {
  return (
    <>
    <div id="window-header">
        <WindowClose target="contact"/>
        <h2>Contact me</h2>
    </div>
    <div className="p-5 space-y-3">
      <div class="h-30 pt-3 pl-3 
        bg-gradient-to-r from-purple-650 via-gray-250 to-gray-700
rounded-xl text-white font-medium">
       <h1 className="text-3xl text-white font-semibold ">Let's<br/>
       <span className="font-bold text-6xl">Connect</span>
       
        </h1>
        </div>
        <p className="text-gray-400 flex items-center gap-1">
  Looking to build something meaningful together? I'm just one message away..!
</p>


    
    <ul>
        {socials.map(({id, bg, link, icon, text})=>
        <li key={id} style={{backgroundColor:bg}}>
            <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                <img src={icon} alt={text} className="size-5"/>
                <p>{text}</p>
            </a>

        </li>)}
    </ul>
    </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, "contact")
export default ContactWindow;