import Home from '../../assets/icons/Home.svg'; 
import Prop from '../../assets/icons/prop.svg';
import User from '../../assets/icons/user.svg';
import News from '../../assets/icons/news.svg';
import { Link, useNavigate } from 'react-router-dom';

const Footer = ({pg1, pg2, pg3, pg4}) => {
    const navigate = useNavigate()
    return(
        <footer className='fixed bottom-0 w-[420px] flex flex-row items-center justify-between mt-8 bg-[#F0F0F0] py-4 px-12'>
            <div onClick={() => navigate(pg1)} className='flex flex-col justify-center items-center cursor-pointer'>
                <img className='w-5' src={Home} alt="" /> 
                <p className='text-[14px]'>Home</p>
            </div>

            <div onClick={() => navigate(pg2)} className='flex flex-col justify-center items-center cursor-pointer'>
                <img className='w-5' src={Prop} alt="" />
                <p className='text-[14px]'>Propostas</p>
            </div>

            <div onClick={() => navigate(pg3)} className='flex flex-col justify-center items-center cursor-pointer'>
                <img className='w-6' src={News} alt="" />
                <p className='text-[14px]'>Notícias</p>
            </div>

            <div onClick={() => navigate(pg4)} className='flex flex-col justify-center items-center cursor-pointer'>
                <img className='w-8' src={User} alt="" />
                <p className='text-[14px]'>Conta</p>
            </div>
        </footer>
    )
}

export default Footer;