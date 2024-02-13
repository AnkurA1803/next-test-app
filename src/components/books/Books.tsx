import useDebounce from "@/hooks/useDebounce";
import BookData from "@/constants/data.json";
import { useEffect, useState } from "react";
import Card from "../card/Card";

type BookListProps = {
    searchText: string
}

const BookList = ({ searchText }: BookListProps) => {
    const [bookList, setBookList] = useState(BookData);
    const debouncedVal = useDebounce(searchText, 500);

    useEffect(() => {
        if (debouncedVal.length > 3) {
            searchBooks();
        } else if (debouncedVal.length === 0) {
            setBookList(BookData);
        }
    }, [debouncedVal]);

    const searchBooks = () => {
        const books = bookList.filter((item) => item.volumeInfo?.title?.toLowerCase().includes(searchText));
        setBookList(books);
    }

    const displayData = () => {
        return bookList.map((item, index) => {
            return (
                <Card
                    id={item?.id}
                    image={item?.volumeInfo?.imageLinks?.smallThumbnail}
                    title={item?.volumeInfo?.title}
                    price={item?.saleInfo?.listPrice?.amount!}
                    key={index}
                />
            )
        })
    }
    return (
        <>
            {/* {displayData()} */}
            {bookList?.length > 0 ?
                <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-14">
                    {displayData()}
                </div>
                :
                <h3 className="text-2xl text-center font-bold">No Data Found</h3>
            }
        </>
    )
};

export default BookList;