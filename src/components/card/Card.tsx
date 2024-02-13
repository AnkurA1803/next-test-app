import Link from "next/link";

type CardPropsType = {
    id: string,
    image: string,
    title: string,
    price: number
}

const Card = ({ ...props }: CardPropsType) => {
    return (
        <Link href={`books/${props.id}`} className="max-w-sm rounded overflow-hidden cursor-pointer">
            <img className="w-60 h-80 rounded-lg shadow-md m-auto" src={props.image} alt="" />
            <div className="px-6 py-4 text-center">
                <div className="font-bold text-base mb-2">{props.title}</div>
                <p className="text-gray-700 text-base">{props.price}</p>
            </div>
        </Link>
    )
};

export default Card;