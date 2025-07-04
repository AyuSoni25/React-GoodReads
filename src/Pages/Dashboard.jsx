import BookCard from "Components/BookCard/BookCard";
import Layout from "Layouts/Layout";

export default function Dashboard() {
    return (
        <Layout>
            <BookCard title={"Harry Potter"} author={"Ayushi Soni"} description={"Hello there, hope you like my book."}>

            </BookCard>
        </Layout>
    );
}