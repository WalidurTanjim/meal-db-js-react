import Meals from "../Meals/Meals";

const Home = () => {
    return (
        <section className="home w-full">
            <div className="home-inner container mx-auto px-6 py-14">
                <h1>Meal DB home page.</h1>
                <Meals />
            </div>
        </section>
    );
};

export default Home;