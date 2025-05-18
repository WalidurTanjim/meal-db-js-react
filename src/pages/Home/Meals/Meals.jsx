import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMeals from "../../../hooks/useMeals";

const Meals = () => {
    const [meals, isPending, isError, error] = useMeals();
    console.log(meals);

    return (
        <section className="meals w-full">
            <div className="meals-inner container mx-auto px-6 py-14">
                <SectionTitle title={"Our Meals"} />

                <div className="all-meals mt-10">
                    
                </div>
            </div>
        </section>
    );
};

export default Meals;