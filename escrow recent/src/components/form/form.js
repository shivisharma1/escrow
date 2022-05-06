import { Signup } from './Signup';
import './form.css'
import NavbarDashboard from '../../components/navbarfordashboard/navbardashboard'

function Form(){
    return(
        <>
        <NavbarDashboard/>
        <div className='HeroContainer'>
           <div className='HeroBg'>
           
           </div> 
           <div className='HeroContent text-black'>
                <div className="col-md-6 offset-0 ">
                    <Signup />
                </div>
          </div>
        </div>
        </>
    )
}
export default Form;