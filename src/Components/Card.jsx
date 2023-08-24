import DOMPurify from 'dompurify';

const Card = ({ content }) => {
    const { Title, type, Code } = content

    const sanitizedCode = DOMPurify.sanitize(Code);


    return (
        <div className='transition bg-gradient-to-b from-[#1C1615] to-[#0A0807] rounded-md min-h-[300px] mx-10 flex items-center justify-center cursor-pointer hover:scale-105'>
            <div dangerouslySetInnerHTML={{ __html: sanitizedCode }} />
        </div>
    )
}

export default Card;