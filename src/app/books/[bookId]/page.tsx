import BookPage from "@/components/books/Book";


export default function BookDetails({ params }: {
    params: { bookId: string }
}) {
    return (
        <>
            <BookPage bookId={params.bookId} />
        </>
    )
}