import Home from '../../assets/icons/Home.svg'; 
import Prop from '../../assets/icons/prop.svg';
import User from '../../assets/icons/user.svg';
import News from '../../assets/icons/news.svg';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()
    return(
        <footer className='fixed bottom-0 w-[420px] flex flex-row items-center justify-between mt-8 bg-[#F0F0F0] py-4 px-12'>
            <div onClick={() => navigate('/Home')} className='flex flex-col justify-center items-center cursor-pointer'>
                <img className='w-5' src={Home} alt="" /> 
                <p className='text-[14px]'>Home</p>
            </div>

            <div onClick={() => navigate('/Propostas')} className='flex flex-col justify-center items-center cursor-pointer'>
                <img className='w-5' src={Prop} alt="" />
                <p className='text-[14px]'>Propostas</p>
            </div>

            <div className='flex flex-col justify-center items-center cursor-pointer'>
                <img className='w-6' src={News} alt="" />
                <p className='text-[14px]'>Notícias</p>
            </div>

            <div className='flex flex-col justify-center items-center cursor-pointer'>
                <img className='w-8' src={User} alt="" />
                <p className='text-[14px]'>Contas</p>
            </div>
        </footer>
    )
}

export default Footer;