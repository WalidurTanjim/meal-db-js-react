const SectionTitle = ({ title }) => {
    return (
        <div>
            <h1 className="text-center text-slate-700 text-2xl md:text-3xl font-medium">{ title ? title : ""}</h1>
        </div>
    );
};

export default SectionTitle;