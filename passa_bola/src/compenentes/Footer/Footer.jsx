import { ReactComponent as HomeIcon } from '../../assets/icons/Home.svg'; 
import Prop from '../../assets/icons/prop.svg';
import User from '../../assets/icons/user.svg';

const Footer = () => {
    return(
        <footer className='flex flex-row w-full items-center justify-between mt-8 bg-[#F0F0F0] py-6 px-16'>
            <div className='flex flex-col justify-center items-center cursor-pointer'>
                <HomeIcon className='w-8 h-8 text-black' /> 
                <p>Home</p>
            </div>

            <div className='flex flex-col justify-center items-center cursor-pointer'>
                <img className='w-5' src={Prop} alt="" />
                <p>Propostas</p>
            </div>

            <div className='flex flex-col justify-center items-center cursor-pointer'>
                <img className='w-8' src={User} alt="" />
                <p>Contas</p>
            </div>
        </footer>
    )
}

export default Footer;