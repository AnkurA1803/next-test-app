'use client';

import Header from "../header/Header";
import BookData from "@/constants/data.json";
import Link from "next/link";
import { useRouter } from "next/navigation";

type BookPageProps = {
    bookId: string;
}

const BookPage = ({ bookId }: BookPageProps) => {
    const data = BookData.find((item) => item.id === bookId);
    const router = useRouter();
    return (
        <>
            <Header>
                <button className="absolute top-5 left-5 px-3.5 py-2.5 rounded-lg text-black bg-white" onClick={() => router.back()}>Back</button>
                <h2 className="text-5xl text-white font-bold">Books Details</h2>
            </Header>
            <div className="flex md:flex-row flex-col p-24">
                <div className="flex flex-col items-center basis-96 shrink-0">
                    <img className="rounded-xl w-60 h-80 object-fill" src={data?.volumeInfo?.imageLinks?.smallThumbnail} alt="" />
                    <div className="mt-5 text-center">
                        <h3 className="text-base font-bold">{data?.volumeInfo?.title}</h3>
                        <p>By {data?.volumeInfo?.authors}</p>
                        <p>{data?.volumeInfo?.publisher} <span>{data?.volumeInfo?.publishedDate}</span></p>
                        <Link href={data?.volumeInfo?.previewLink!}>
                            <button className="rounded-lg mt-2.5 py-3.5 px-5 bg-black text-white text-base">Visit Website</button>
                        </Link>
                    </div>
                </div>
                <div className="md:mt-0 mt-6">{data?.volumeInfo?.description}</div>
            </div>
        </>
    )
}

export default BookPage;