const Card = ({icon, title, desc}) => {
    return(
        <div className='mt-2 flex flex-row gap-2 bg-gray-100 p-4 cursor-pointer rounded-lg border border-[#00000025]'>
            <div className='w-[20%]'><img src={icon} alt="" className='w-[78%] justify-center'/></div>
            <div className="flex flex-col w-[80%]">
            <h2>{title}</h2>
            <p className='text-[12px]'>{desc}</p>
            <a className='text-[12px] underline' href="">Ver Detalhes</a>
            </div>
        </div>
    )
}

export default Card;